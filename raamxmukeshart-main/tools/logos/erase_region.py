"""Erase a rectangular region from a logo (removes (R)/TM marks), then retrim.

Usage:
    # transparent erase (RGBA files):
    python tools/logos/erase_region.py itaca.png --box 1549 0 1599 50

    # paint with a color (flat-background files) — sample the fill first:
    python tools/logos/erase_region.py tirupati_courier.png --box 320 0 350 30 --color 244 121 31

    # plain white:
    python tools/logos/erase_region.py payal_maternity.png --box 1531 182 1608 259 --color 255 255 255

Box is l t r b in source-pixel coordinates (from scan_marks.py output).
A 3px pad is added around the box. The file is retrimmed after the erase
so the freed edge space disappears. Format is preserved.
"""

import argparse
import sys
from pathlib import Path

import numpy as np
from PIL import Image

LIB = Path(__file__).resolve().parents[2] / "public" / "images" / "clients"
PAD = 3


def retrim(img: Image.Image) -> Image.Image:
    rgba = img.convert("RGBA")
    a = np.asarray(rgba)
    gray = np.asarray(rgba.convert("L"))
    opaque = a[..., 3] > 40
    nonwhite = gray < 245
    mask = (opaque & nonwhite) if (~opaque).sum() > opaque.size * 0.02 else nonwhite
    if not mask.any():
        return img
    ys, xs = np.where(mask)
    m = max(2, int(max(img.size) * 0.02))
    return img.crop((
        max(0, int(xs.min()) - m),
        max(0, int(ys.min()) - m),
        min(img.width, int(xs.max()) + 1 + m),
        min(img.height, int(ys.max()) + 1 + m),
    ))


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("file", help="filename (library-relative or full path)")
    ap.add_argument("--box", nargs=4, type=int, required=True, metavar=("L", "T", "R", "B"))
    ap.add_argument("--color", nargs=3, type=int, metavar=("R", "G", "B"),
                    help="paint color; omit for transparent erase (RGBA only)")
    ap.add_argument("--lib", default=str(LIB))
    args = ap.parse_args()

    path = Path(args.file)
    if not path.exists():
        path = Path(args.lib) / args.file
    img = Image.open(path)
    fmt = img.format
    l, t, r, b = args.box

    if args.color:
        rgb = img.convert("RGB")
        px = np.asarray(rgb).copy()
        px[max(0, t - PAD):b + PAD, max(0, l - PAD):r + PAD] = args.color
        img = Image.fromarray(px)
    else:
        rgba = img.convert("RGBA")
        px = np.asarray(rgba).copy()
        px[max(0, t - PAD):b + PAD, max(0, l - PAD):r + PAD, 3] = 0
        img = Image.fromarray(px)

    img = retrim(img)
    kwargs = {"quality": 95} if fmt in ("JPEG", "WEBP") else {}
    img.save(path, format=fmt, **kwargs)
    print(f"{path.name}: erased ({l},{t},{r},{b}) -> {img.width}x{img.height}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

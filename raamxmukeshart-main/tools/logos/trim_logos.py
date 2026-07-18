"""Content-aware whitespace trim for client logo files.

Usage:
    python tools/logos/trim_logos.py [files...]       # specific files
    python tools/logos/trim_logos.py --all            # whole library

Handles the two background styles found in practice:
- real transparency (RGBA alpha)  -> bbox of alpha > 40
- flat white canvas (incl. fully-opaque RGBA, the OnePlus case)
  -> bbox of gray < 245

A 2% margin is kept around the mark. Formats preserved (png/jpg/webp);
SVGs are skipped (vector — rasterize first if pixel edits are needed).
"""

import argparse
import sys
from pathlib import Path

import numpy as np
from PIL import Image

LIB = Path(__file__).resolve().parents[2] / "public" / "images" / "clients"
RASTER = {".png", ".jpg", ".jpeg", ".webp"}


def content_mask(img: Image.Image) -> np.ndarray:
    rgba = img.convert("RGBA")
    a = np.asarray(rgba)
    gray = np.asarray(rgba.convert("L"))
    opaque = a[..., 3] > 40
    nonwhite = gray < 245
    # only trust alpha when the image actually uses transparency
    if (~opaque).sum() > opaque.size * 0.02:
        return opaque & nonwhite
    return nonwhite


def trim(path: Path) -> None:
    img = Image.open(path)
    fmt = img.format
    mask = content_mask(img)
    if not mask.any():
        print(f"SKIP {path.name}: no content found")
        return
    ys, xs = np.where(mask)
    m = max(2, int(max(img.size) * 0.02))
    box = (
        max(0, int(xs.min()) - m),
        max(0, int(ys.min()) - m),
        min(img.width, int(xs.max()) + 1 + m),
        min(img.height, int(ys.max()) + 1 + m),
    )
    before = img.size
    cropped = img.crop(box)
    kwargs = {"quality": 95} if fmt in ("JPEG", "WEBP") else {}
    cropped.save(path, format=fmt, **kwargs)
    print(f"OK   {path.name}: {before[0]}x{before[1]} -> {cropped.width}x{cropped.height}")


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("files", nargs="*", help="logo files (default: --all over library)")
    ap.add_argument("--all", action="store_true", help="process every raster in the library")
    ap.add_argument("--lib", default=str(LIB), help="library directory")
    args = ap.parse_args()

    lib = Path(args.lib)
    targets = [Path(f) for f in args.files]
    if args.all or not targets:
        targets = sorted(p for p in lib.iterdir() if p.suffix.lower() in RASTER)
    for p in targets:
        if p.suffix.lower() not in RASTER:
            print(f"SKIP {p.name}: not a raster")
            continue
        try:
            trim(p)
        except Exception as exc:
            print(f"FAIL {p.name}: {exc}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

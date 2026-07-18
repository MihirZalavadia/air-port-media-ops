"""Report-only scanner: finds (R)/TM-mark candidates and untrimmed canvases.

Usage:
    python tools/logos/scan_marks.py            # whole library
    python tools/logos/scan_marks.py file.png   # specific files

Flags two things per image, changing nothing:
1. Small isolated blobs on the right side (candidate registered marks).
   IMPORTANT: candidates are only *candidates* — tagline letters, "..."
   dots (Nova), and emblem fragments match the same shape test. Decide
   per blob using its cy (marks are usually cy < 0.6, superscript) and a
   visual check, then erase with erase_region.py.
2. Canvases whose content box is <92% of the frame (needs trim_logos.py).

White-on-dark marks (e.g. a white (R) inside an orange box) are invisible
to this scan — those you spot visually and paint over with erase_region.py
--color sampled from the surrounding fill.
"""

import argparse
import sys
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage

LIB = Path(__file__).resolve().parents[2] / "public" / "images" / "clients"
RASTER = {".png", ".jpg", ".jpeg", ".webp"}


def content_mask(img: Image.Image) -> np.ndarray:
    rgba = img.convert("RGBA")
    a = np.asarray(rgba)
    gray = np.asarray(rgba.convert("L"))
    opaque = a[..., 3] > 40
    nonwhite = gray < 245
    if (~opaque).sum() > opaque.size * 0.02:
        return opaque & nonwhite
    return nonwhite


def scan(path: Path) -> None:
    img = Image.open(path)
    m = content_mask(img)
    if not m.any():
        print(f"{path.name}: EMPTY MASK")
        return
    h, w = m.shape
    ys, xs = np.where(m)
    cw, ch = xs.max() - xs.min(), ys.max() - ys.min()
    notes = []
    if cw < w * 0.92 or ch < h * 0.92:
        notes.append(f"UNTRIMMED canvas {w}x{h} content {cw}x{ch}")

    dil = ndimage.binary_dilation(m, iterations=2)
    labels, n = ndimage.label(dil)
    cands = []
    big = max(w, h)
    for i in range(1, n + 1):
        blob = (labels == i) & m
        bys, bxs = np.where(blob)
        if len(bxs) == 0:
            continue
        bw, bh = bxs.max() - bxs.min() + 1, bys.max() - bys.min() + 1
        if 2 < bw < big * 0.085 and 2 < bh < big * 0.085:
            cx, cy = bxs.mean() / w, bys.mean() / h
            if cx > 0.62 and 0.5 < bw / bh < 2.0:
                cands.append(
                    f"x[{bxs.min()}-{bxs.max()}] y[{bys.min()}-{bys.max()}] cx={cx:.2f} cy={cy:.2f}"
                )
    if cands:
        notes.append(f"{len(cands)} mark candidate(s): " + "; ".join(cands))
    if notes:
        print(f"{path.name}: " + " | ".join(notes))


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("files", nargs="*")
    ap.add_argument("--lib", default=str(LIB))
    args = ap.parse_args()
    lib = Path(args.lib)
    targets = [
        p if p.exists() else lib / f
        for f, p in ((f, Path(f)) for f in args.files)
    ] or sorted(p for p in lib.iterdir() if p.suffix.lower() in RASTER)
    for p in targets:
        try:
            scan(p)
        except Exception as exc:
            print(f"FAIL {p.name}: {exc}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

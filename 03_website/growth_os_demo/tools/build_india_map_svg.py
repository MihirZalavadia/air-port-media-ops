from __future__ import annotations

import math
import struct
import sys
from pathlib import Path


SOURCE_URL = "https://surveyofindia.gov.in/documents/Outline_of_India.zip"
VIEWBOX_WIDTH = 1000
VIEWBOX_HEIGHT = 700
PADDING_Y = 30
SIMPLIFY_TOLERANCE_METERS = 1800


def read_polygon_shapefile(path: Path) -> tuple[tuple[float, float, float, float], list[list[tuple[float, float]]]]:
    data = path.read_bytes()
    if struct.unpack(">i", data[0:4])[0] != 9994:
        raise ValueError("Not an ESRI shapefile")

    shape_type = struct.unpack("<i", data[32:36])[0]
    if shape_type != 5:
        raise ValueError(f"Expected polygon shapefile type 5, found {shape_type}")

    offset = 100
    paths: list[list[tuple[float, float]]] = []
    source_bbox: tuple[float, float, float, float] | None = None

    while offset < len(data):
        record_length = struct.unpack(">i", data[offset + 4 : offset + 8])[0] * 2
        record_start = offset + 8
        record_type = struct.unpack("<i", data[record_start : record_start + 4])[0]
        if record_type == 5:
            source_bbox = struct.unpack("<4d", data[record_start + 4 : record_start + 36])
            part_count, point_count = struct.unpack("<2i", data[record_start + 36 : record_start + 44])
            part_offset = record_start + 44
            parts = list(struct.unpack("<" + "i" * part_count, data[part_offset : part_offset + 4 * part_count]))
            parts.append(point_count)
            points_offset = part_offset + 4 * part_count
            points = [
                struct.unpack("<2d", data[points_offset + i * 16 : points_offset + i * 16 + 16])
                for i in range(point_count)
            ]

            for start, end in zip(parts, parts[1:]):
                ring = points[start:end]
                if len(ring) >= 3:
                    paths.append(ring)

        offset = record_start + record_length

    if source_bbox is None:
        raise ValueError("No polygon geometry found")

    return source_bbox, paths


def perpendicular_distance(
    point: tuple[float, float],
    start: tuple[float, float],
    end: tuple[float, float],
) -> float:
    x, y = point
    x1, y1 = start
    x2, y2 = end
    dx = x2 - x1
    dy = y2 - y1
    if dx == 0 and dy == 0:
        return math.hypot(x - x1, y - y1)

    t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy)
    if t < 0:
        return math.hypot(x - x1, y - y1)
    if t > 1:
        return math.hypot(x - x2, y - y2)

    return abs(dy * x - dx * y + x2 * y1 - y2 * x1) / math.hypot(dx, dy)


def simplify_path(points: list[tuple[float, float]], tolerance: float) -> list[tuple[float, float]]:
    if len(points) <= 2:
        return points

    keep = [False] * len(points)
    keep[0] = keep[-1] = True
    stack = [(0, len(points) - 1)]

    while stack:
        start, end = stack.pop()
        max_distance = -1.0
        max_index = start
        for index in range(start + 1, end):
            distance = perpendicular_distance(points[index], points[start], points[end])
            if distance > max_distance:
                max_distance = distance
                max_index = index

        if max_distance > tolerance:
            keep[max_index] = True
            stack.append((start, max_index))
            stack.append((max_index, end))

    return [point for point, should_keep in zip(points, keep) if should_keep]


def make_transform(source_bbox: tuple[float, float, float, float]):
    min_x, min_y, max_x, max_y = source_bbox
    scale = (VIEWBOX_HEIGHT - PADDING_Y * 2) / (max_y - min_y)
    rendered_width = (max_x - min_x) * scale
    padding_x = (VIEWBOX_WIDTH - rendered_width) / 2

    def transform(point: tuple[float, float]) -> tuple[float, float]:
        x, y = point
        return (
            padding_x + (x - min_x) * scale,
            PADDING_Y + (max_y - y) * scale,
        )

    return transform


def path_to_svg(points: list[tuple[float, float]]) -> str:
    if not points:
        return ""
    commands = [f"M {points[0][0]:.1f} {points[0][1]:.1f}"]
    commands.extend(f"L {x:.1f} {y:.1f}" for x, y in points[1:])
    commands.append("Z")
    return " ".join(commands)


def build_svg(source_shp: Path, output_svg: Path) -> None:
    bbox, raw_paths = read_polygon_shapefile(source_shp)
    transform = make_transform(bbox)
    rendered_paths: list[str] = []

    for raw_path in raw_paths:
        simplified = simplify_path(raw_path, SIMPLIFY_TOLERANCE_METERS)
        rendered = [transform(point) for point in simplified]
        rendered_paths.append(path_to_svg(rendered))

    path_data = "\n      ".join(rendered_paths)
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {VIEWBOX_WIDTH} {VIEWBOX_HEIGHT}" role="img" aria-label="Official Survey of India outline map">
  <title>India outline map</title>
  <desc>Generated from Survey of India Outline of India vector data: {SOURCE_URL}. Presentation styling only.</desc>
  <defs>
    <linearGradient id="indiaLand" x1="360" y1="40" x2="640" y2="690" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#16384E" stop-opacity="0.96"/>
      <stop offset="0.52" stop-color="#0E2B3F" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#1E4E64" stop-opacity="0.94"/>
    </linearGradient>
    <filter id="indiaGlow" x="-18%" y="-12%" width="136%" height="128%">
      <feDropShadow dx="0" dy="22" stdDeviation="18" flood-color="#0B2335" flood-opacity="0.24"/>
      <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#FFFFFF" flood-opacity="0.3"/>
    </filter>
  </defs>
  <g filter="url(#indiaGlow)">
    <path
      d="{path_data}"
      fill="url(#indiaLand)"
      fill-rule="evenodd"
      stroke="#5BA9C7"
      stroke-width="1.45"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
    <path
      d="{path_data}"
      fill="none"
      stroke="#B8E8F6"
      stroke-width="0.45"
      stroke-linejoin="round"
      stroke-linecap="round"
      opacity="0.42"
    />
  </g>
</svg>
"""
    output_svg.write_text(svg, encoding="utf-8")


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: python tools/build_india_map_svg.py <Outline_of_India.shp> <output.svg>")
        return 2

    build_svg(Path(sys.argv[1]), Path(sys.argv[2]))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

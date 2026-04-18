import type { s } from '@/types';
import {
  DEFAULT_FILL_COLOR,
  DEFAULT_ROTATION_ANGLE,
  DEFAULT_STROKE_COLOR,
  DEFAULT_STROKE_WIDTH,
  DEFAULT_TRIANGLE_CENTER_HORIZONTAL_SHIFT,
  DEFAULT_TRIANGLE_CENTER_VERTICAL_SHIFT,
  TYPE_TRIANGLE,
} from '../constants/common';

export function constructTriangle(
  id: string,
  cx: number,
  cy: number,
): s.Triangle {
  return {
    id: id,
    type: TYPE_TRIANGLE,
    stroke: DEFAULT_STROKE_COLOR,
    strokeWidth: DEFAULT_STROKE_WIDTH,
    fill: DEFAULT_FILL_COLOR,
    x1: cx,
    y1: cy - DEFAULT_TRIANGLE_CENTER_VERTICAL_SHIFT,
    x2: cx + DEFAULT_TRIANGLE_CENTER_HORIZONTAL_SHIFT,
    y2: cy + DEFAULT_TRIANGLE_CENTER_VERTICAL_SHIFT,
    x3: cx - DEFAULT_TRIANGLE_CENTER_HORIZONTAL_SHIFT,
    y3: cy + DEFAULT_TRIANGLE_CENTER_VERTICAL_SHIFT,
    rotation: DEFAULT_ROTATION_ANGLE,
  };
}

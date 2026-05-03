import type { s } from '@/types';
import {
  DEFAULT_LINE_HORIZONTAL_SHIFT_X,
  DEFAULT_LINE_STROKE_WIDTH,
  DEFAULT_ROTATION_ANGLE,
  DEFAULT_STROKE_COLOR,
  TYPE_LINE,
} from '../constants/common';

export function constructLine(id: string, cx: number, cy: number): s.Line {
  return {
    id: id,
    type: TYPE_LINE,
    stroke: DEFAULT_STROKE_COLOR,
    strokeWidth: DEFAULT_LINE_STROKE_WIDTH,
    points: [
      {
        x: cx - DEFAULT_LINE_HORIZONTAL_SHIFT_X,
        y: cy,
      },
      {
        x: cx + DEFAULT_LINE_HORIZONTAL_SHIFT_X,
        y: cy,
      },
    ],
    rotation: DEFAULT_ROTATION_ANGLE,
  };
}

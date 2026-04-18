import type { s } from '../../types';
import {
  DEFAULT_FILL_COLOR,
  DEFAULT_ROTATION_ANGLE,
  DEFAULT_STROKE_COLOR,
  DEFAULT_STROKE_WIDTH,
  DEFAULT_TYPE_RECTANGLE_H,
  DEFAULT_TYPE_RECTANGLE_W,
  TYPE_RECTANGLE,
} from '../constants/common';

export const constructRectangle = (
  id: string,
  x: number,
  y: number,
): s.Rectangle => ({
  id: id,
  type: TYPE_RECTANGLE,
  stroke: DEFAULT_STROKE_COLOR,
  strokeWidth: DEFAULT_STROKE_WIDTH,
  fill: DEFAULT_FILL_COLOR,
  height: DEFAULT_TYPE_RECTANGLE_H,
  width: DEFAULT_TYPE_RECTANGLE_W,
  x: x,
  y: y,
  rotation: DEFAULT_ROTATION_ANGLE,
});

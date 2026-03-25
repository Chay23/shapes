import type { s } from '../../../types';
import {
  DEFAULT_FILL_COLOR,
  DEFAULT_STROKE_COLOR,
  TYPE_RECTANGLE,
} from '../../constants/common';
import {
  DEFAULT_TYPE_RECTANGLE_H,
  DEFAULT_TYPE_RECTANGLE_W,
} from '../../constants/quadrilaterals/rectangle';

export const constructRectangle = (
  id: string,
  x: string,
  y: string,
): s.Rectangle => ({
  id: id,
  type: TYPE_RECTANGLE,
  stroke: DEFAULT_STROKE_COLOR,
  fill: DEFAULT_FILL_COLOR,
  height: DEFAULT_TYPE_RECTANGLE_H,
  width: DEFAULT_TYPE_RECTANGLE_W,
  x: x,
  y: y,
});

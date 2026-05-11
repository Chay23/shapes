import {
  TYPE_ELLIPSE,
  TYPE_LINE,
  TYPE_RECTANGLE,
  TYPE_TRIANGLE,
} from './common';
import { constructEllipse } from '../utils/ellipse';
import { constructLine } from '../utils/line';
import { constructRectangle } from '../utils/rectangle';
import { constructTriangle } from '../utils/triangle';

export const SHAPE_CONSTRUCTORS = {
  [TYPE_RECTANGLE]: constructRectangle,
  [TYPE_ELLIPSE]: constructEllipse,
  [TYPE_TRIANGLE]: constructTriangle,
  [TYPE_LINE]: constructLine,
} as const;

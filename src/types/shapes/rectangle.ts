import type { FillableShape, Shape } from './common';

export type BaseRectangle = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type Rectangle = Shape<FillableShape<BaseRectangle>, 'rectangle'>;

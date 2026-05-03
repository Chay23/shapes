import type { AxisPoint, FillableShape, Shape } from './common';

export type BaseTriangle = {
  points: AxisPoint[];
};

export type Triangle = Shape<FillableShape<BaseTriangle>, 'triangle'>;

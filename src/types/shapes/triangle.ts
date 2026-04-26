import type { AxisPoint, Shape } from './common';

export type BaseTriangle = {
  points: AxisPoint[];
};

export type Triangle = Shape<BaseTriangle, 'triangle'>;

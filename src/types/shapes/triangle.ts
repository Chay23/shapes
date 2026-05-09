import type { AxisPoint, TShape } from './common';

export type BaseTriangle = {
  points: AxisPoint[];
};

export type Triangle = TShape<BaseTriangle, 'triangle'>;

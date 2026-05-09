import type { AxisPoint, TShape } from './common';

type BaseLine = {
  points: AxisPoint[];
};

export type Line = TShape<BaseLine, 'line'>;

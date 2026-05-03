import type { AxisPoint, Shape } from './common';

type BaseLine = {
  points: [AxisPoint, AxisPoint];
};

export type Line = Shape<BaseLine, 'line'>;

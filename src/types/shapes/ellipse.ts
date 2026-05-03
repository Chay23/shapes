import type { FillableShape, Shape } from './common';

export type BaseEllipse = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
};

export type Ellipse = Shape<FillableShape<BaseEllipse>, 'ellipse'>;

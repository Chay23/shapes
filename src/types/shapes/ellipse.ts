import type { TShape } from './common';

export type BaseEllipse = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
};

export type Ellipse = TShape<BaseEllipse, 'ellipse'>;

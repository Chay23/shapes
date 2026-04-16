import type { Shape } from "./common";

export type BaseEllipse = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
};

export type Ellipse = Shape<BaseEllipse, 'ellipse'>;
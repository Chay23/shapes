import type { Shape } from "./common";

export type BaseTriangle = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;
};

export type Triangle = Shape<BaseTriangle, 'triangle'>;
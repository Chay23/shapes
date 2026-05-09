import type { TShape } from './common';

export type BaseRectangle = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type Rectangle = TShape<BaseRectangle, 'rectangle'>;

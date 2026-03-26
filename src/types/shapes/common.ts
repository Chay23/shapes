import type { Rectangle } from './quadrilaterals';

export type ShapeType = 'rectangle';

export type BaseShape = {
  id: string;
  fill: string;
  stroke: string;
  strokeWidth: number;
  x: number;
  y: number;
};

export type Shape<S extends BaseShape, T extends ShapeType> = S & {
  type: T;
};

export type Shapes = Rectangle;

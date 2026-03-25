import type { Rectangle } from './quadrilaterals';

export type ShapeType = 'rectangle';

export type BaseShape = {
  id: string;
  fill: string;
  stroke: string;
  x: string;
  y: string;
};

export type Shape<S extends BaseShape, T extends ShapeType> = S & {
  type: T;
};

export type Shapes = Rectangle;

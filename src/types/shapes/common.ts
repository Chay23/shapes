import type { Rectangle } from './rectangle';

export type ShapeType = 'rectangle';

export type BaseShape = {
  id: string;
  fill: string;
  stroke: string;
  strokeWidth: number;
};

export type Shape<S, T extends ShapeType> = BaseShape &
  S & {
    type: T;
  };

export type Shapes = Rectangle;

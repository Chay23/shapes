import type { DIRECTION_MAP } from '@/lib/constants/common';
import type { Rectangle } from './rectangle';
import type { Ellipse } from './ellipse';
import type { Triangle } from './triangle';
import type { Line } from './line';
import type { KeysOfType } from '../common';

export type ShapeType = 'rectangle' | 'ellipse' | 'triangle' | 'line';
export type BaseShape = {
  id: string;
  stroke: string;
  strokeWidth: number;
  rotation: number;
  fill?: string;
};

export type TShape<S, T extends ShapeType> = BaseShape &
  S & {
    type: T;
  };

export type PointBasedShape = Triangle | Line;
export type Shape = Rectangle | Ellipse | PointBasedShape;

export type AxisPoint = {
  x: number;
  y: number;
};

export type NumericShapeKeys = KeysOfType<Shape, number>;
export type ColorShapeKeys = 'fill';

export type DirectionKey = keyof typeof DIRECTION_MAP;

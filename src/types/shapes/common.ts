import type { DIRECTION_MAP } from '@/lib/constants/common';
import type { Rectangle } from './rectangle';
import type { Ellipse } from './ellipse';
import type { Triangle } from './triangle';
import type { Line } from './line';

export type FillableShape<S> = S & {
  fill: string;
};

export type BaseShape = {
  id: string;
  stroke: string;
  strokeWidth: number;
  rotation: number;
};

export type Shape<S, T extends ShapeType> = BaseShape &
  S & {
    type: T;
  };

export type Shapes = Rectangle | Ellipse | Triangle | Line;
export type ShapeType = 'rectangle' | 'ellipse' | 'triangle' | 'line';

export type AxisPoint = {
  x: number;
  y: number;
};

export type DirectionKey = keyof typeof DIRECTION_MAP;

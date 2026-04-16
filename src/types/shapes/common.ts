import type { DIRECTION_MAP } from '@/lib/constants/common';
import type { Rectangle } from './rectangle';
import type { Ellipse } from './ellipse';

export type BaseShape = {
  id: string;
  fill: string;
  stroke: string;
  strokeWidth: number;
  rotation: number;
};

export type Shape<S, T extends ShapeType> = BaseShape &
  S & {
    type: T;
  };

export type Shapes = Rectangle | Ellipse;
export type ShapeType = 'rectangle' | 'ellipse';

export type AxisPoint = {
  x: number;
  y: number;
};

export type DirectionKey = keyof typeof DIRECTION_MAP;

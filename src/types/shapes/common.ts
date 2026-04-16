import type { DIRECTION_MAP } from '@/lib/constants/common';
import type { Rectangle } from './rectangle';

export type ShapeType = 'rectangle';

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

export type Shapes = Rectangle;

export type AxisPoint = {
  x: number;
  y: number;
};

export type DirectionKey = keyof typeof DIRECTION_MAP;
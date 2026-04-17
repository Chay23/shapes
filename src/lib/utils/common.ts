import { clsx, type ClassValue } from 'clsx';
import {
  Circle,
  Hand,
  Minus,
  MousePointer,
  MoveRight,
  Square,
  Triangle,
  Type,
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import {
  EAST_RESIZE,
  NORTH_EAST_RESIZE,
  NORTH_RESIZE,
  NORTH_WEST_RESIZE,
  SOUTH_EAST_RESIZE,
  SOUTH_RESIZE,
  SOUTH_WEST_RESIZE,
  TYPE_ARROW,
  TYPE_ELLIPSE,
  TYPE_LINE,
  TYPE_RECTANGLE,
  TYPE_TEXT,
  TYPE_TRIANGLE,
  WEST_RESIZE,
} from '../constants/common';
import type { s } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toolbarOptions = [
  {
    id: 'hand',
    component: Hand,
  },
  {
    id: '',
    component: MousePointer,
  },
  {
    id: 'rectangle',
    component: Square,
    dataType: TYPE_RECTANGLE,
  },
  { id: 'ellipse', component: Circle, dataType: TYPE_ELLIPSE },
  { id: 'triangle', component: Triangle, dataType: TYPE_TRIANGLE },
  { id: 'arrow', component: MoveRight, dataType: TYPE_ARROW },
  { id: 'line', component: Minus, dataType: TYPE_LINE },
  { id: 'text', component: Type, dataType: TYPE_TEXT },
];

export function getShapeCenterXPoint(shape: s.Shapes) {
  if ('cx' in shape) {
    return shape.cx;
  }
  return shape.x + shape.width / 2;
}

export function getShapeCenterYPoint(shape: s.Shapes) {
  if ('cy' in shape) {
    return shape.cy;
  }
  return shape.y + shape.height / 2;
}

export function getOutlineXPoint(shape: s.Shapes) {
  if ('x' in shape) {
    return shape.x;
  }
  return shape.cx - shape.rx;
}

export function getOutlineYPoint(shape: s.Shapes) {
  if ('y' in shape) {
    return shape.y;
  }
  return shape.cy - shape.ry;
}

export function getShapeWidth(shape: s.Shapes) {
  if ('width' in shape) {
    return shape.width;
  }

  return shape.rx * 2;
}

export function getShapeHeight(shape: s.Shapes) {
  if ('height' in shape) {
    return shape.height;
  }

  return shape.ry * 2;
}

export function getRectangleResizePoints(
  rectangle: s.Rectangle,
  resizeHandler: (
    pointerDownEvent: React.PointerEvent<SVGCircleElement>,
  ) => void,
) {
  const middleResizePositionX = rectangle.x + rectangle.width / 2;
  const middleResizePositionY = rectangle.y + rectangle.height / 2;

  const eastResizePositionX = rectangle.x + rectangle.width;
  const southResizePositionY = rectangle.y + rectangle.height;
  const topResizePositionX = rectangle.x;
  const topResizePositionY = rectangle.y;

  return [
    {
      cx: middleResizePositionX,
      cy: topResizePositionY,
      'data-resize-side': NORTH_RESIZE,
      className: 'cursor-n-resize resize-btn',
      onPointerDown: resizeHandler,
    },
    {
      cx: middleResizePositionX,
      cy: southResizePositionY,
      'data-resize-side': SOUTH_RESIZE,
      className: 'cursor-s-resize resize-btn',
      onPointerDown: resizeHandler,
    },
    {
      cx: eastResizePositionX,
      cy: middleResizePositionY,
      'data-resize-side': EAST_RESIZE,
      className: 'cursor-e-resize resize-btn',
      onPointerDown: resizeHandler,
    },
    {
      cx: topResizePositionX,
      cy: middleResizePositionY,
      'data-resize-side': WEST_RESIZE,
      className: 'cursor-w-resize resize-btn',
      onPointerDown: resizeHandler,
    },
    {
      cx: topResizePositionX,
      cy: topResizePositionY,
      'data-resize-side': NORTH_WEST_RESIZE,
      className: 'cursor-nw-resize resize-btn',
      onPointerDown: resizeHandler,
    },
    {
      cx: eastResizePositionX,
      cy: topResizePositionY,
      'data-resize-side': NORTH_EAST_RESIZE,
      className: 'cursor-ne-resize resize-btn',
      onPointerDown: resizeHandler,
    },
    {
      cx: topResizePositionX,
      cy: southResizePositionY,
      'data-resize-side': SOUTH_WEST_RESIZE,
      className: 'cursor-sw-resize resize-btn',
      onPointerDown: resizeHandler,
    },
    {
      cx: eastResizePositionX,
      cy: southResizePositionY,
      'data-resize-side': SOUTH_EAST_RESIZE,
      className: 'cursor-se-resize resize-btn',
      onPointerDown: resizeHandler,
    },
  ];
}

export function getWrapperResizePosition(
  shape: s.Shapes,
  resizeHandler: (
    pointerDownEvent: React.PointerEvent<SVGCircleElement>,
  ) => void,
) {
  switch (shape.type) {
    case TYPE_RECTANGLE: {
      return getRectangleResizePoints(shape, resizeHandler);
    }
  }
  return [];
}

export const getRotationAngle = (
  cx: number,
  cy: number,
  pointerX: number,
  pointerY: number,
) => {
  return Math.atan2(pointerY - cy, pointerX - cx) * (180 / Math.PI);
};

export function toRad(angle: number) {
  return (angle * Math.PI) / 180;
}

export function getLocalXAxisStep(rad: number) {
  return { x: Math.cos(rad), y: Math.sin(rad) };
}

export function getLocalYAxisStep(rad: number) {
  return { x: -Math.sin(rad), y: Math.cos(rad) };
}

export function getAxisMovement(
  dx: number,
  dy: number,
  axis: { x: number; y: number },
) {
  return dx * axis.x + dy * axis.y;
}

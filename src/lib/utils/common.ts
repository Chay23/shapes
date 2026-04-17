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
  DIRECTION_MAP,
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
import type { AxisPoint, DirectionKey } from '@/types/shapes';

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

export default function getShapeResizePoints(
  shape: s.Shapes,
  resizeHandler: (
    pointerDownEvent: React.PointerEvent<SVGCircleElement>,
  ) => void,
) {
  const shapeWidth = getShapeWidth(shape);
  const shapeHeight = getShapeHeight(shape);

  const middleResizePositionX = getShapeCenterXPoint(shape);
  const middleResizePositionY = getShapeCenterYPoint(shape);
  const rightResizePositionX = middleResizePositionX + shapeWidth / 2;
  const bottomResizePositionY = middleResizePositionY + shapeHeight / 2;
  const leftResizePositionX = middleResizePositionX - shapeWidth / 2;
  const topResizePositionY = middleResizePositionY - shapeHeight / 2;

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
      cy: bottomResizePositionY,
      'data-resize-side': SOUTH_RESIZE,
      className: 'cursor-s-resize resize-btn',
      onPointerDown: resizeHandler,
    },
    {
      cx: rightResizePositionX,
      cy: middleResizePositionY,
      'data-resize-side': EAST_RESIZE,
      className: 'cursor-e-resize resize-btn',
      onPointerDown: resizeHandler,
    },
    {
      cx: leftResizePositionX,
      cy: middleResizePositionY,
      'data-resize-side': WEST_RESIZE,
      className: 'cursor-w-resize resize-btn',
      onPointerDown: resizeHandler,
    },
    {
      cx: leftResizePositionX,
      cy: topResizePositionY,
      'data-resize-side': NORTH_WEST_RESIZE,
      className: 'cursor-nw-resize resize-btn',
      onPointerDown: resizeHandler,
    },
    {
      cx: rightResizePositionX,
      cy: topResizePositionY,
      'data-resize-side': NORTH_EAST_RESIZE,
      className: 'cursor-ne-resize resize-btn',
      onPointerDown: resizeHandler,
    },
    {
      cx: leftResizePositionX,
      cy: bottomResizePositionY,
      'data-resize-side': SOUTH_WEST_RESIZE,
      className: 'cursor-sw-resize resize-btn',
      onPointerDown: resizeHandler,
    },
    {
      cx: rightResizePositionX,
      cy: bottomResizePositionY,
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
      return getShapeResizePoints(shape, resizeHandler);
    }
    case TYPE_ELLIPSE: {
      return getShapeResizePoints(shape, resizeHandler);
    }
    default:
      return [];
  }
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

export function getAxisMovement(dx: number, dy: number, axis: AxisPoint) {
  return dx * axis.x + dy * axis.y;
}

export function resizeShape(
  shape: s.Shapes,
  direction: s.AxisPoint,
  xAxisStep: s.AxisPoint,
  yAxisStep: s.AxisPoint,
  xMovement: number,
  yMovement: number,
) {
  const shapeWidth = getShapeWidth(shape);
  const shapeHeight = getShapeHeight(shape);

  const constrainedXMovement = xMovement * Math.abs(direction.x);
  const constrainedYMovement = yMovement * Math.abs(direction.y);

  const rawWidth = shapeWidth + direction.x * constrainedXMovement;
  const rawHeight = shapeHeight + direction.y * constrainedYMovement;

  const centerX = getShapeCenterXPoint(shape);
  const centerY = getShapeCenterYPoint(shape);

  const globalXChange =
    (constrainedXMovement / 2) * xAxisStep.x +
    (constrainedYMovement / 2) * yAxisStep.x;
  const globalYChange =
    (constrainedXMovement / 2) * xAxisStep.y +
    (constrainedYMovement / 2) * yAxisStep.y;

  const newCx = centerX + globalXChange;
  const newCy = centerY + globalYChange;

  const finalWidth = Math.abs(rawWidth);
  const finalHeight = Math.abs(rawHeight);

  switch (shape.type) {
    case TYPE_RECTANGLE: {
      return {
        ...shape,
        width: finalWidth,
        height: finalHeight,
        x: newCx - finalWidth / 2,
        y: newCy - finalHeight / 2,
      };
    }
    case TYPE_ELLIPSE: {
      return {
        ...shape,
        rx: finalWidth / 2,
        ry: finalHeight / 2,
        cx: newCx,
        cy: newCy,
      };
    }
  }
}

export const getResizedShape = (
  initialShape: s.Shapes,
  resizeSide: DirectionKey,
  dx: number,
  dy: number,
): s.Shapes => {
  const handle = DIRECTION_MAP[resizeSide];
  const rad = toRad(initialShape.rotation);

  const localXAxisStep = getLocalXAxisStep(rad);
  const localYAxisStep = getLocalYAxisStep(rad);

  const localXAxisMovement = getAxisMovement(dx, dy, localXAxisStep);
  const localYAxisMovement = getAxisMovement(dx, dy, localYAxisStep);

  return resizeShape(
    initialShape,
    handle,
    localXAxisStep,
    localYAxisStep,
    localXAxisMovement,
    localYAxisMovement,
  );
};

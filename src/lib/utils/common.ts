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

export function getTriangleGeometry(triangle: s.Triangle) {
  const xs = [triangle.x1, triangle.x2, triangle.x3];
  const ys = [triangle.y1, triangle.y2, triangle.y3];
  const maxX = Math.max(...xs);
  const minX = Math.min(...xs);
  const maxY = Math.max(...ys);
  const minY = Math.min(...ys);

  const width = maxX - minX;
  const height = maxY - minY;

  return { maxX, minX, maxY, minY, height, width };
}

export function getShapeCenterXPoint(shape: s.Shapes) {
  switch (shape.type) {
    case TYPE_RECTANGLE: {
      return shape.x + shape.width / 2;
    }
    case TYPE_ELLIPSE: {
      return shape.cx;
    }
    case TYPE_TRIANGLE: {
      return (shape.x1 + shape.x2 + shape.x3) / 3;
    }
  }
}

export function getShapeCenterYPoint(shape: s.Shapes) {
  switch (shape.type) {
    case TYPE_RECTANGLE: {
      return shape.y + shape.height / 2;
    }
    case TYPE_ELLIPSE: {
      return shape.cy;
    }
    case TYPE_TRIANGLE: {
      return (shape.y1 + shape.y2 + shape.y3) / 3;
    }
  }
}

export function getBoundingBoxXPoint(shape: s.Shapes) {
  switch (shape.type) {
    case TYPE_RECTANGLE: {
      return shape.x;
    }
    case TYPE_ELLIPSE: {
      return shape.cx - shape.rx;
    }
    case TYPE_TRIANGLE: {
      return getTriangleGeometry(shape).minX;
    }
  }
}

export function getBoundingBoxYPoint(shape: s.Shapes) {
  switch (shape.type) {
    case TYPE_RECTANGLE: {
      return shape.y;
    }
    case TYPE_ELLIPSE: {
      return shape.cy - shape.ry;
    }
    case TYPE_TRIANGLE: {
      return getTriangleGeometry(shape).minY;
    }
  }
}

export function getBoundingBoxWidth(shape: s.Shapes) {
  switch (shape.type) {
    case TYPE_RECTANGLE: {
      return shape.width;
    }
    case TYPE_ELLIPSE: {
      return shape.rx * 2;
    }
    case TYPE_TRIANGLE: {
      return getTriangleGeometry(shape).width;
    }
  }
}

export function getBoundingBoxHeight(shape: s.Shapes) {
  switch (shape.type) {
    case TYPE_RECTANGLE: {
      return shape.height;
    }
    case TYPE_ELLIPSE: {
      return shape.ry * 2;
    }
    case TYPE_TRIANGLE: {
      return getTriangleGeometry(shape).height;
    }
  }
}

export default function getShapeResizePoints(
  shape: s.Shapes,
  resizeHandler: (
    pointerDownEvent: React.PointerEvent<SVGCircleElement>,
  ) => void,
) {
  const shapeWidth = getBoundingBoxWidth(shape);
  const shapeHeight = getBoundingBoxHeight(shape);

  const middleResizePositionX = getBoundingBoxXPoint(shape) + shapeWidth / 2;
  const middleResizePositionY = getBoundingBoxYPoint(shape) + shapeHeight / 2;
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
    case TYPE_TRIANGLE: {
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
  const shapeWidth = getBoundingBoxWidth(shape);
  const shapeHeight = getBoundingBoxHeight(shape);

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

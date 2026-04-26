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

export function getRectangleBoundingBox(rectangle: s.Rectangle) {
  return {
    width: rectangle.width,
    height: rectangle.height,
    minX: rectangle.x,
    minY: rectangle.y,
    maxX: rectangle.x + rectangle.width,
    maxY: rectangle.y + rectangle.height,
  };
}

export function getEllipseBoundingBox(ellipse: s.Ellipse) {
  const height = ellipse.ry * 2;
  const width = ellipse.rx * 2;
  return {
    width,
    height,
    minX: ellipse.cx - width / 2,
    minY: ellipse.cy - height / 2,
    maxX: ellipse.cx + width / 2,
    maxY: ellipse.cy + height / 2,
  };
}

export function getTriangleBoundingBox(triangle: s.Triangle) {
  const { points } = triangle;
  const xs = points.map(point => point.x);
  const ys = points.map(point => point.y);
  const maxX = Math.max(...xs);
  const minX = Math.min(...xs);
  const maxY = Math.max(...ys);
  const minY = Math.min(...ys);

  const width = maxX - minX;
  const height = maxY - minY;

  return { maxX, minX, maxY, minY, height, width };
}

export function getBoundingBoxCenterXPoint(shape: s.Shapes) {
  switch (shape.type) {
    case TYPE_RECTANGLE: {
      return shape.x + shape.width / 2;
    }
    case TYPE_ELLIPSE: {
      return shape.cx;
    }
    case TYPE_TRIANGLE: {
      const { minX, width } = getTriangleBoundingBox(shape);
      return minX + width / 2;
    }
  }
}

export function getBoundingBoxCenterYPoint(shape: s.Shapes) {
  switch (shape.type) {
    case TYPE_RECTANGLE: {
      return shape.y + shape.height / 2;
    }
    case TYPE_ELLIPSE: {
      return shape.cy;
    }
    case TYPE_TRIANGLE: {
      const { minY, height } = getTriangleBoundingBox(shape);
      return minY + height / 2;
    }
  }
}

export default function getShapeResizePoints(
  shape: s.Shapes,
  resizeHandler: (
    pointerDownEvent: React.PointerEvent<SVGCircleElement>,
  ) => void,
) {
  const boundingBox = getShapeBoundingBox(shape);

  const middleResizePositionX = boundingBox.minX + boundingBox.width / 2;
  const middleResizePositionY = boundingBox.minY + boundingBox.height / 2;
  const rightResizePositionX = boundingBox.maxX;
  const bottomResizePositionY = boundingBox.maxY;
  const leftResizePositionX = boundingBox.minX;
  const topResizePositionY = boundingBox.minY;

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

export function resizeBoundingBox(
  boundingBox: s.BoundingBox,
  direction: s.AxisPoint,
  xAxisStep: s.AxisPoint,
  yAxisStep: s.AxisPoint,
  xMovement: number,
  yMovement: number,
) {
  const constrainedXMovement = xMovement * Math.abs(direction.x);
  const constrainedYMovement = yMovement * Math.abs(direction.y);

  const rawWidth = boundingBox.width + direction.x * constrainedXMovement;
  const rawHeight = boundingBox.height + direction.y * constrainedYMovement;

  const centerX = boundingBox.minX + boundingBox.width / 2;
  const centerY = boundingBox.minY + boundingBox.height / 2;

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

  return {
    width: finalWidth,
    height: finalHeight,
    minX: newCx - finalWidth / 2,
    minY: newCy - finalHeight / 2,
    maxX: newCx + finalWidth / 2,
    maxY: newCy + finalHeight / 2,
  };
}

export function getShapeBoundingBox(shape: s.Shapes) {
  switch (shape.type) {
    case TYPE_RECTANGLE: {
      return getRectangleBoundingBox(shape);
    }
    case TYPE_ELLIPSE: {
      return getEllipseBoundingBox(shape);
    }
    case TYPE_TRIANGLE: {
      return getTriangleBoundingBox(shape);
    }
  }
}

function denormalizeTriangle(
  points: s.AxisPoint[],
  box: s.BoundingBox,
): s.AxisPoint[] {
  return points.map(point => ({
    x: box.minX + point.x * (box.maxX - box.minX),
    y: box.minY + point.y * (box.maxY - box.minY),
  }));
}

function normalizeTriangle(triangle: s.Triangle) {
  const box = getTriangleBoundingBox(triangle);

  return triangle.points.map(point => ({
    x: (point.x - box.minX) / box.width,
    y: (point.y - box.minY) / box.height,
  }));
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

  const box = getShapeBoundingBox(initialShape);

  const resizedBox = resizeBoundingBox(
    box,
    handle,
    localXAxisStep,
    localYAxisStep,
    localXAxisMovement,
    localYAxisMovement,
  );

  switch (initialShape.type) {
    case TYPE_RECTANGLE: {
      return {
        ...initialShape,
        x: resizedBox.minX,
        y: resizedBox.minY,
        width: resizedBox.maxX - resizedBox.minX,
        height: resizedBox.maxY - resizedBox.minY,
      };
    }
    case TYPE_ELLIPSE: {
      return {
        ...initialShape,
        rx: resizedBox.width / 2,
        ry: resizedBox.height / 2,
        cx: resizedBox.minX + resizedBox.width / 2,
        cy: resizedBox.minY + resizedBox.height / 2,
      };
    }
    case TYPE_TRIANGLE: {
      const normalizedPoints = normalizeTriangle(initialShape);
      const newTrianglePoints = denormalizeTriangle(
        normalizedPoints,
        resizedBox,
      );

      return {
        ...initialShape,
        points: newTrianglePoints,
      };
    }
  }
};

export function translateShape(
  initialShape: s.Shapes,
  leftShift: number,
  topShift: number,
) {
  switch (initialShape.type) {
    case TYPE_RECTANGLE: {
      const updatedRectX = initialShape.x + leftShift;
      const updatedRectY = initialShape.y + topShift;

      return {
        ...initialShape,
        x: updatedRectX,
        y: updatedRectY,
      };
    }
    case TYPE_ELLIPSE: {
      const updatedEllipseCx = initialShape.cx + leftShift;
      const updatedEllipseCy = initialShape.cy + topShift;

      return {
        ...initialShape,
        cx: updatedEllipseCx,
        cy: updatedEllipseCy,
      };
    }
    case TYPE_TRIANGLE: {
      const updatedPoints = initialShape.points.map(point => ({
        x: point.x + leftShift,
        y: point.y + topShift,
      }));

      return {
        ...initialShape,
        points: updatedPoints,
      };
    }
  }
}

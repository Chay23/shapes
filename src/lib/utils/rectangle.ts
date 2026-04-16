import type { DirectionKey } from '@/types/shapes';
import type { s } from '../../types';
import {
  DEFAULT_FILL_COLOR,
  DEFAULT_STROKE_COLOR,
  DEFAULT_STROKE_WIDTH,
  DIRECTION_MAP,
  TYPE_RECTANGLE,
} from '../constants/common';
import {
  DEFAULT_TYPE_RECTANGLE_H,
  DEFAULT_TYPE_RECTANGLE_W,
} from '../constants/rectangle';
import {
  getAxisMovement,
  getLocalXAxisStep,
  getLocalYAxisStep,
  toRad,
} from './common';

export const constructRectangle = (
  id: string,
  x: number,
  y: number,
): s.Rectangle => ({
  id: id,
  type: TYPE_RECTANGLE,
  stroke: DEFAULT_STROKE_COLOR,
  strokeWidth: DEFAULT_STROKE_WIDTH,
  fill: DEFAULT_FILL_COLOR,
  height: DEFAULT_TYPE_RECTANGLE_H,
  width: DEFAULT_TYPE_RECTANGLE_W,
  x: x,
  y: y,
  rotation: 0,
});

export function getRectangleCenter(rect: s.Rectangle) {
  return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
}

export function resizeRectangle(
  rect: s.Rectangle,
  direction: s.AxisPoint,
  xAxisStep: s.AxisPoint,
  yAxisStep: s.AxisPoint,
  xMovement: number,
  yMovement: number,
) {
  const constrainedXMovement = xMovement * Math.abs(direction.x);
  const constrainedYMovement = yMovement * Math.abs(direction.y);

  const rawWidth = rect.width + direction.x * constrainedXMovement;
  const rawHeight = rect.height + direction.y * constrainedYMovement;

  const center = getRectangleCenter(rect);

  const globalXChange =
    (constrainedXMovement / 2) * xAxisStep.x +
    (constrainedYMovement / 2) * yAxisStep.x;
  const globalYChange =
    (constrainedXMovement / 2) * xAxisStep.y +
    (constrainedYMovement / 2) * yAxisStep.y;

  const newCx = center.x + globalXChange;
  const newCy = center.y + globalYChange;

  const finalWidth = Math.abs(rawWidth);
  const finalHeight = Math.abs(rawHeight);

  return {
    ...rect,
    width: finalWidth,
    height: finalHeight,
    x: newCx - finalWidth / 2,
    y: newCy - finalHeight / 2,
  };
}

export const getUpdatedRectangle = (
  initialRectangle: s.Rectangle,
  resizeSide: DirectionKey,
  dx: number,
  dy: number,
): s.Rectangle => {
  const handle = DIRECTION_MAP[resizeSide];
  const rad = toRad(initialRectangle.rotation);

  const localXAxisStep = getLocalXAxisStep(rad);
  const localYAxisStep = getLocalYAxisStep(rad);

  const localXAxisMovement = getAxisMovement(dx, dy, localXAxisStep);
  const localYAxisMovement = getAxisMovement(dx, dy, localYAxisStep);

  return resizeRectangle(
    initialRectangle,
    handle,
    localXAxisStep,
    localYAxisStep,
    localXAxisMovement,
    localYAxisMovement,
  );
};

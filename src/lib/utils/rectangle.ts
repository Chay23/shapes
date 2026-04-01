import type { s } from '../../types';
import {
  DEFAULT_FILL_COLOR,
  DEFAULT_STROKE_COLOR,
  DEFAULT_STROKE_WIDTH,
  EAST_RESIZE,
  NORTH_EAST_RESIZE,
  NORTH_RESIZE,
  NORTH_WEST_RESIZE,
  SOUTH_EAST_RESIZE,
  SOUTH_RESIZE,
  SOUTH_WEST_RESIZE,
  TYPE_RECTANGLE,
  WEST_RESIZE,
} from '../constants/common';
import {
  DEFAULT_TYPE_RECTANGLE_H,
  DEFAULT_TYPE_RECTANGLE_W,
} from '../constants/rectangle';

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
});

export const getUpdatedRectangle = (
  initialRectangle: s.Rectangle,
  resizeSide: string,
  shiftX: number,
  shiftY: number,
): s.Rectangle => {
  const rectangleWidth = initialRectangle.width;
  const rectangleHeight = initialRectangle.height;

  const eastUpdatedWidth = rectangleWidth + shiftX;
  const westUpdatedWidth = rectangleWidth - shiftX;
  const southUpdatedHeight = rectangleHeight + shiftY;
  const northUpdatedHeight = rectangleHeight - shiftY;

  switch (resizeSide) {
    case NORTH_RESIZE: {
      return {
        ...initialRectangle,
        y: initialRectangle.y + shiftY,
        height: northUpdatedHeight,
      };
    }
    case NORTH_EAST_RESIZE: {
      return {
        ...initialRectangle,
        y: initialRectangle.y + shiftY,
        width: eastUpdatedWidth,
        height: northUpdatedHeight,
      };
    }
    case NORTH_WEST_RESIZE: {
      return {
        ...initialRectangle,
        x: initialRectangle.x + shiftX,
        y: initialRectangle.y + shiftY,
        height: northUpdatedHeight,
        width: westUpdatedWidth,
      };
    }
    case SOUTH_RESIZE: {
      return { ...initialRectangle, height: southUpdatedHeight };
    }
    case SOUTH_EAST_RESIZE: {
      return {
        ...initialRectangle,
        height: southUpdatedHeight,
        width: eastUpdatedWidth,
      };
    }
    case SOUTH_WEST_RESIZE: {
      return {
        ...initialRectangle,
        x: initialRectangle.x + shiftX,
        height: southUpdatedHeight,
        width: westUpdatedWidth,
      };
    }
    case WEST_RESIZE: {
      return {
        ...initialRectangle,
        x: initialRectangle.x + shiftX,
        width: westUpdatedWidth,
      };
    }
    case EAST_RESIZE: {
      return { ...initialRectangle, width: eastUpdatedWidth };
    }
    default: {
      return initialRectangle;
    }
  }
};

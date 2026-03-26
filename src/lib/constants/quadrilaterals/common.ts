import type { s } from '../../../types';
import {
  EAST_RESIZE,
  NORTH_EAST_RESIZE,
  NORTH_RESIZE,
  NORTH_WEST_RESIZE,
  SOUTH_EAST_RESIZE,
  SOUTH_RESIZE,
  SOUTH_WEST_RESIZE,
  WEST_RESIZE,
} from '../common';

export const getUpdatedQuadrilateral = (
  initialQuadrilateral: s.Quadrilateral,
  resizeSide: string,
  shiftX: number,
  shiftY: number,
): s.Quadrilateral => {
  const quadrilateralWidth = initialQuadrilateral.width;
  const quadrilateralHeight = initialQuadrilateral.height;

  const eastUpdatedWidth = quadrilateralWidth + shiftX;
  const westUpdatedWidth = quadrilateralWidth - shiftX;
  const southUpdatedHeight = quadrilateralHeight + shiftY;
  const northUpdatedHeight = quadrilateralHeight - shiftY;

  switch (resizeSide) {
    case NORTH_RESIZE: {
      return {
        ...initialQuadrilateral,
        y: initialQuadrilateral.y + shiftY,
        height: northUpdatedHeight,
      };
      break;
    }
    case NORTH_EAST_RESIZE: {
      return {
        ...initialQuadrilateral,
        y: initialQuadrilateral.y + shiftY,
        width: eastUpdatedWidth,
        height: northUpdatedHeight,
      };
      break;
    }
    case NORTH_WEST_RESIZE: {
      return {
        ...initialQuadrilateral,
        x: initialQuadrilateral.x + shiftX,
        y: initialQuadrilateral.y + shiftY,
        height: northUpdatedHeight,
        width: westUpdatedWidth,
      };
      break;
    }
    case SOUTH_RESIZE: {
      return { ...initialQuadrilateral, height: southUpdatedHeight };
      break;
    }
    case SOUTH_EAST_RESIZE: {
      return {
        ...initialQuadrilateral,
        height: southUpdatedHeight,
        width: eastUpdatedWidth,
      };
      break;
    }
    case SOUTH_WEST_RESIZE: {
      return {
        ...initialQuadrilateral,
        x: initialQuadrilateral.x + shiftX,
        height: southUpdatedHeight,
        width: westUpdatedWidth,
      };
      break;
    }
    case WEST_RESIZE: {
      return {
        ...initialQuadrilateral,
        x: initialQuadrilateral.x + shiftX,
        width: westUpdatedWidth,
      };
      break;
    }
    case EAST_RESIZE: {
      return { ...initialQuadrilateral, width: eastUpdatedWidth };
    }
    default: {
      return initialQuadrilateral;
    }
  }
};

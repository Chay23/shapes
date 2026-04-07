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

export function resizeNorth(
  initialRectangle: s.Rectangle,
  updatedHeight: number,
  shiftY: number,
) {
  if (updatedHeight <= 0) {
    return {
      ...initialRectangle,
      y: initialRectangle.y + initialRectangle.height,
      height: Math.abs(updatedHeight),
    };
  }

  return {
    ...initialRectangle,
    y: initialRectangle.y + shiftY,
    height: updatedHeight,
  };
}

export function resizeNorthEast(
  initialRectangle: s.Rectangle,
  updatedWidth: number,
  updatedHeight: number,
  shiftY: number,
) {
  if (updatedHeight <= 0 && updatedWidth <= 0) {
    return {
      ...initialRectangle,
      x: initialRectangle.x + updatedWidth,
      y: initialRectangle.y + initialRectangle.height,
      height: Math.abs(updatedHeight),
      width: Math.abs(updatedWidth),
    };
  }

  if (updatedHeight <= 0) {
    return {
      ...initialRectangle,
      y: initialRectangle.y + initialRectangle.height,
      width: updatedWidth,
      height: Math.abs(updatedHeight),
    };
  }

  if (updatedWidth <= 0) {
    return {
      ...initialRectangle,
      x: initialRectangle.x + updatedWidth,
      y: initialRectangle.y + shiftY,
      height: updatedHeight,
      width: Math.abs(updatedWidth),
    };
  }

  return {
    ...initialRectangle,
    y: initialRectangle.y + shiftY,
    width: updatedWidth,
    height: updatedHeight,
  };
}

export function resizeNorthWest(
  initialRectangle: s.Rectangle,
  updatedWidth: number,
  updatedHeight: number,
  shiftX: number,
  shiftY: number,
) {
  if (updatedHeight <= 0 && updatedWidth <= 0) {
    return {
      ...initialRectangle,
      x: initialRectangle.x + initialRectangle.width,
      y: initialRectangle.y + initialRectangle.height,
      height: Math.abs(updatedHeight),
      width: Math.abs(updatedWidth),
    };
  }

  if (updatedHeight <= 0) {
    return {
      ...initialRectangle,
      x: initialRectangle.x + shiftX,
      y: initialRectangle.y + initialRectangle.height,
      width: updatedWidth,
      height: Math.abs(updatedHeight),
    };
  }

  if (updatedWidth <= 0) {
    return {
      ...initialRectangle,
      x: initialRectangle.x + initialRectangle.width,
      y: initialRectangle.y + shiftY,
      height: updatedHeight,
      width: Math.abs(updatedWidth),
    };
  }

  return {
    ...initialRectangle,
    x: initialRectangle.x + shiftX,
    y: initialRectangle.y + shiftY,
    height: updatedHeight,
    width: updatedWidth,
  };
}

export function resizeEast(
  initialRectangle: s.Rectangle,
  updatedWidth: number,
) {
  if (updatedWidth <= 0) {
    return {
      ...initialRectangle,
      x: initialRectangle.x + updatedWidth,
      width: Math.abs(updatedWidth),
    };
  }

  return { ...initialRectangle, width: updatedWidth };
}

export function resizeSouthWest(
  initialRectangle: s.Rectangle,
  updatedWidth: number,
  updatedHeight: number,
  shiftX: number,
) {
  if (updatedHeight <= 0 && updatedWidth <= 0) {
    return {
      ...initialRectangle,
      x: initialRectangle.x + initialRectangle.width,
      y: initialRectangle.y + updatedHeight,
      height: Math.abs(updatedHeight),
      width: Math.abs(updatedWidth),
    };
  }

  if (updatedHeight <= 0) {
    return {
      ...initialRectangle,
      x: initialRectangle.x + shiftX,
      y: initialRectangle.y + updatedHeight,
      width: updatedWidth,
      height: Math.abs(updatedHeight),
    };
  }

  if (updatedWidth <= 0) {
    return {
      ...initialRectangle,
      x: initialRectangle.x + initialRectangle.width,
      height: updatedHeight,
      width: Math.abs(updatedWidth),
    };
  }

  return {
    ...initialRectangle,
    x: initialRectangle.x + shiftX,
    height: updatedHeight,
    width: updatedWidth,
  };
}

export function resizeSouthEast(
  initialRectangle: s.Rectangle,
  updatedWidth: number,
  updatedHeight: number,
) {
  if (updatedHeight <= 0 && updatedWidth <= 0) {
    return {
      ...initialRectangle,
      x: initialRectangle.x + updatedWidth,
      y: initialRectangle.y + updatedHeight,
      height: Math.abs(updatedHeight),
      width: Math.abs(updatedWidth),
    };
  }

  if (updatedHeight <= 0) {
    return {
      ...initialRectangle,
      x: initialRectangle.x,
      y: initialRectangle.y + updatedHeight,
      width: Math.abs(updatedWidth),
      height: Math.abs(updatedHeight),
    };
  }

  if (updatedWidth <= 0) {
    return {
      ...initialRectangle,
      x: initialRectangle.x + updatedWidth,
      height: updatedHeight,
      width: Math.abs(updatedWidth),
    };
  }

  return {
    ...initialRectangle,
    height: updatedHeight,
    width: updatedWidth,
  };
}

export function resizeWest(
  initialRectangle: s.Rectangle,
  updatedWidth: number,
  shiftX: number,
) {
  if (updatedWidth <= 0) {
    return {
      ...initialRectangle,
      x: initialRectangle.x + initialRectangle.width,
      width: Math.abs(updatedWidth),
    };
  }

  return {
    ...initialRectangle,
    x: initialRectangle.x + shiftX,
    width: updatedWidth,
  };
}

export function resizeSouth(
  initialRectangle: s.Rectangle,
  updatedHeight: number,
) {
  if (updatedHeight <= 0) {
    return {
      ...initialRectangle,
      y: initialRectangle.y + updatedHeight,
      height: Math.abs(updatedHeight),
    };
  }
  return { ...initialRectangle, height: updatedHeight };
}

export const getUpdatedRectangle = (
  initialRectangle: s.Rectangle,
  resizeSide: string,
  shiftX: number,
  shiftY: number,
): s.Rectangle => {
  const eastUpdatedWidth = initialRectangle.width + shiftX;
  const westUpdatedWidth = initialRectangle.width - shiftX;
  const southUpdatedHeight = initialRectangle.height + shiftY;
  const northUpdatedHeight = initialRectangle.height - shiftY;

  switch (resizeSide) {
    case NORTH_RESIZE: {
      return resizeNorth(initialRectangle, northUpdatedHeight, shiftY);
    }
    case NORTH_EAST_RESIZE: {
      return resizeNorthEast(
        initialRectangle,
        eastUpdatedWidth,
        northUpdatedHeight,
        shiftY,
      );
    }
    case NORTH_WEST_RESIZE: {
      return resizeNorthWest(
        initialRectangle,
        westUpdatedWidth,
        northUpdatedHeight,
        shiftX,
        shiftY,
      );
    }
    case SOUTH_RESIZE: {
      return resizeSouth(initialRectangle, southUpdatedHeight);
    }
    case SOUTH_EAST_RESIZE: {
      return resizeSouthEast(
        initialRectangle,
        eastUpdatedWidth,
        southUpdatedHeight,
      );
    }
    case SOUTH_WEST_RESIZE: {
      return resizeSouthWest(
        initialRectangle,
        westUpdatedWidth,
        southUpdatedHeight,
        shiftX,
      );
    }
    case WEST_RESIZE: {
      return resizeWest(initialRectangle, westUpdatedWidth, shiftX);
    }
    case EAST_RESIZE: {
      return resizeEast(initialRectangle, eastUpdatedWidth);
    }
    default: {
      return initialRectangle;
    }
  }
};

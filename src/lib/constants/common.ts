export const TYPE_RECTANGLE = 'rectangle';
export const TYPE_TRIANGLE = 'triangle';
export const TYPE_LINE = 'line';
export const TYPE_ELLIPSE = 'ellipse';
export const TYPE_TEXT = 'text';
export const TYPE_ARROW = 'arrow';

export const DEFAULT_FILL_COLOR = '#f2f2f2';
export const DEFAULT_STROKE_COLOR = '#000000';
export const DEFAULT_STROKE_WIDTH = 0;

export const RESIZE_CIRCLE_R = '3';
export const RESIZE_CIRCLE_FILL = '#ffffff';
export const RESIZE_CIRCLE_STROKE_COLOR = '#000000';
export const RESIZE_CIRCLE_STROKE_WIDTH = 0.5;

export const DEFAULT_ELLIPSE_RX = 60;
export const DEFAULT_ELLIPSE_RY = 40;

export const NORTH_RESIZE = 'n';
export const SOUTH_RESIZE = 's';
export const WEST_RESIZE = 'w';
export const EAST_RESIZE = 'e';
export const NORTH_WEST_RESIZE = 'nw';
export const NORTH_EAST_RESIZE = 'ne';
export const SOUTH_WEST_RESIZE = 'sw';
export const SOUTH_EAST_RESIZE = 'se';

export const ROTATE_BTN_SIZE = 18;
export const ROTATE_BTN_Y_SHIFT = 30;

export const DIRECTION_MAP = {
  [NORTH_RESIZE]: { x: 0, y: -1 },
  [SOUTH_RESIZE]: { x: 0, y: 1 },
  [EAST_RESIZE]: { x: 1, y: 0 },
  [WEST_RESIZE]: { x: -1, y: 0 },
  [NORTH_EAST_RESIZE]: { x: 1, y: -1 },
  [NORTH_WEST_RESIZE]: { x: -1, y: -1 },
  [SOUTH_EAST_RESIZE]: { x: 1, y: 1 },
  [SOUTH_WEST_RESIZE]: { x: -1, y: 1 },
};
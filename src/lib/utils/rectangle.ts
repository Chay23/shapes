import ShapeSizeEditor from '@/components/organisms/editor/shape-size-editor';
import type { s, ui } from '../../types';
import {
  DEFAULT_FILL_COLOR,
  DEFAULT_ROTATION_ANGLE,
  DEFAULT_STROKE_COLOR,
  DEFAULT_STROKE_WIDTH,
  DEFAULT_TYPE_RECTANGLE_H,
  DEFAULT_TYPE_RECTANGLE_W,
  NINETY_DEGREE_ROTATION,
  TYPE_RECTANGLE,
} from '../constants/common';
import {
  KEY_BRING_TO_FRONT_ITEM,
  KEY_DELETE_ITEM,
  KEY_ROTATE_90_ITEM,
  KEY_SEND_TO_BACK_ITEM,
} from '../constants/context-menu';
import StrokeEditor from '@/components/molecules/editor/StrokeEditor';

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
  rotation: DEFAULT_ROTATION_ANGLE,
  strokeDasharray: {
    gap: undefined,
    dash: undefined,
  },
});

export function getRectangleEditor(): ui.Editor {
  return {
    title: 'Rectangle',
    grids: [
      {
        title: 'Size',
        cells: [
          {
            key: 'rectangle-size',
            type: 'custom',
            component: ShapeSizeEditor,
          },
        ],
      },
      {
        title: 'Appearance',
        cells: [
          {
            key: 'rectangle-fill',
            type: 'color-picker',
            shapePropName: 'fill',
            props: {
              label: 'Color',
              inputId: 'rectangle-fill-color',
            },
          },
          {
            key: 'rectangle-rotation',
            type: 'numeric',
            separator: true,
            shapePropName: 'rotation',
            props: {
              label: 'Rotation \u00B0',
              inputId: 'rectangle-rotation',
            },
          },
        ],
      },
      {
        title: 'Stroke',
        cells: [
          {
            key: 'rectangle-stroke',
            type: 'custom',
            component: StrokeEditor,
          },
        ],
      },
    ],
  };
}

export function getRectangleContextMenu({
  rotateShape,
  deleteShape,
}: {
  rotateShape: (event: React.PointerEvent<HTMLDivElement>) => void;
  deleteShape: () => void;
}): ui.ContextMenuItem[] {
  return [
    {
      key: KEY_ROTATE_90_ITEM,
      title: 'Rotate 90°',
      shortcut: 'Ctrl + R',
      events: { onPointerUp: rotateShape },
      dataAttributes: { 'data-angle': NINETY_DEGREE_ROTATION },
    },
    {
      key: KEY_BRING_TO_FRONT_ITEM,
      title: 'Bring to front',
      shortcut: 'Ctrl + ]',
    },
    {
      key: KEY_SEND_TO_BACK_ITEM,
      title: 'Send to back',
      shortcut: 'Ctrl + [',
      separator: true,
    },
    {
      key: KEY_DELETE_ITEM,
      title: 'Delete',
      shortcut: 'Delete',
      events: { onPointerUp: deleteShape },
    },
  ];
}

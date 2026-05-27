import type { s, ui } from '@/types';
import {
  DEFAULT_ELLIPSE_RX,
  DEFAULT_ELLIPSE_RY,
  DEFAULT_FILL_COLOR,
  DEFAULT_ROTATION_ANGLE,
  DEFAULT_STROKE_COLOR,
  DEFAULT_STROKE_WIDTH,
  NINETY_DEGREE_ROTATION,
  TYPE_ELLIPSE,
} from '../constants/common';
import ShapeSizeEditor from '@/components/organisms/editor/shape-size-editor';
import {
  KEY_BRING_TO_FRONT_ITEM,
  KEY_DELETE_ITEM,
  KEY_ROTATE_90_ITEM,
  KEY_SEND_TO_BACK_ITEM,
} from '../constants/context-menu';
import StrokeEditor from '@/components/molecules/editor/StrokeEditor';

export function constructEllipse(
  id: string,
  cx: number,
  cy: number,
): s.Ellipse {
  return {
    id: id,
    type: TYPE_ELLIPSE,
    stroke: DEFAULT_STROKE_COLOR,
    strokeWidth: DEFAULT_STROKE_WIDTH,
    fill: DEFAULT_FILL_COLOR,
    cx: cx,
    cy: cy,
    rx: DEFAULT_ELLIPSE_RX,
    ry: DEFAULT_ELLIPSE_RY,
    rotation: DEFAULT_ROTATION_ANGLE,
    strokeDasharray: {
      gap: undefined,
      dash: undefined,
    },
  };
}

export function getEllipseEditor(): ui.Editor {
  return {
    title: 'Ellipse',
    grids: [
      {
        title: 'Size',
        cells: [
          {
            key: 'ellipse-size',
            type: 'custom',
            component: ShapeSizeEditor,
          },
        ],
      },
      {
        title: 'appearance',
        cells: [
          {
            key: 'ellipse-fill',
            type: 'color-picker',
            shapePropName: 'fill',
            props: {
              label: 'Color',
              inputId: 'ellipse-fill-color',
            },
          },
          {
            key: 'ellipse-rotation',
            type: 'numeric',
            separator: true,
            shapePropName: 'rotation',
            props: {
              label: 'Rotation \u00B0',
              inputId: 'ellipse-rotation',
            },
          },
        ],
      },
      {
        title: 'Stroke',
        cells: [
          {
            key: 'ellipse-stroke',
            type: 'custom',
            component: StrokeEditor,
          },
        ],
      },
    ],
  };
}

export function getEllipseContextMenu({
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

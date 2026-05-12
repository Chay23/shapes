import ShapeSizeEditor from '@/components/organisms/editor/ShapeSizeEditor';
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
import StrokeWidthEditor from '@/components/organisms/editor/StrokeWidthEditor';
import FillColorEditor from '@/components/organisms/editor/FillColorEditor';
import {
  KEY_BRING_TO_FRONT_ITEM,
  KEY_DELETE_ITEM,
  KEY_ROTATE_90_ITEM,
  KEY_SEND_TO_BACK_ITEM,
} from '../constants/context-menu';

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
});

export function getRectangleEditor(): ui.EditorGrid {
  return {
    title: 'Rectangle',
    components: [
      {
        render: ShapeSizeEditor,
        separator: true,
      },
      {
        render: StrokeWidthEditor,
        separator: true,
      },
      {
        render: FillColorEditor,
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

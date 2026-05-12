import type { s, ui } from '@/types';
import {
  DEFAULT_LINE_HORIZONTAL_SHIFT_X,
  DEFAULT_LINE_STROKE_WIDTH,
  DEFAULT_ROTATION_ANGLE,
  DEFAULT_STROKE_COLOR,
  TYPE_LINE,
} from '../constants/common';
import {
  KEY_BRING_TO_FRONT_ITEM,
  KEY_DELETE_ITEM,
  KEY_SEND_TO_BACK_ITEM,
} from '../constants/context-menu';

export function constructLine(id: string, cx: number, cy: number): s.Line {
  return {
    id: id,
    type: TYPE_LINE,
    stroke: DEFAULT_STROKE_COLOR,
    strokeWidth: DEFAULT_LINE_STROKE_WIDTH,
    points: [
      {
        x: cx - DEFAULT_LINE_HORIZONTAL_SHIFT_X,
        y: cy,
      },
      {
        x: cx + DEFAULT_LINE_HORIZONTAL_SHIFT_X,
        y: cy,
      },
    ],
    rotation: DEFAULT_ROTATION_ANGLE,
  };
}

export function getLineContextMenu({
  deleteShape,
}: {
  deleteShape: () => void;
}): ui.ContextMenuItem[] {
  return [
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

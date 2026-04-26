import type { s, ui } from '@/types';
import {
  DEFAULT_ELLIPSE_RX,
  DEFAULT_ELLIPSE_RY,
  DEFAULT_FILL_COLOR,
  DEFAULT_ROTATION_ANGLE,
  DEFAULT_STROKE_COLOR,
  DEFAULT_STROKE_WIDTH,
  TYPE_ELLIPSE,
} from '../constants/common';
import ShapeSizeEditor from '@/components/organisms/editor/ShapeSizeEditor';
import StrokeWidthEditor from '@/components/organisms/editor/StrokeWidthEditor';
import FillColorEditor from '@/components/organisms/editor/FillColorEditor';

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
  };
}

export function getEllipseEditor(): ui.EditorGrid {
  return {
    title: 'Ellipse',
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

import type { s, ui } from '@/types';
import {
  DEFAULT_FILL_COLOR,
  DEFAULT_ROTATION_ANGLE,
  DEFAULT_STROKE_COLOR,
  DEFAULT_STROKE_WIDTH,
  DEFAULT_TRIANGLE_CENTER_HORIZONTAL_SHIFT,
  DEFAULT_TRIANGLE_CENTER_VERTICAL_SHIFT,
  TYPE_TRIANGLE,
} from '../constants/common';
import ShapeSizeEditor from '@/components/organisms/editor/ShapeSizeEditor';
import StrokeWidthEditor from '@/components/organisms/editor/StrokeWidthEditor';
import FillColorEditor from '@/components/molecules/editor/ColorEditorInput';

export function constructTriangle(
  id: string,
  cx: number,
  cy: number,
): s.Triangle {
  return {
    id: id,
    type: TYPE_TRIANGLE,
    stroke: DEFAULT_STROKE_COLOR,
    strokeWidth: DEFAULT_STROKE_WIDTH,
    fill: DEFAULT_FILL_COLOR,
    points: [
      {
        x: cx,
        y: cy - DEFAULT_TRIANGLE_CENTER_VERTICAL_SHIFT,
      },
      {
        x: cx + DEFAULT_TRIANGLE_CENTER_HORIZONTAL_SHIFT,
        y: cy + DEFAULT_TRIANGLE_CENTER_VERTICAL_SHIFT,
      },
      {
        x: cx - DEFAULT_TRIANGLE_CENTER_HORIZONTAL_SHIFT,
        y: cy + DEFAULT_TRIANGLE_CENTER_VERTICAL_SHIFT,
      },
    ],
    rotation: DEFAULT_ROTATION_ANGLE,
  };
}

export function getTriangleEditor(): ui.EditorGrid {
  return {
    title: 'Triangle',
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

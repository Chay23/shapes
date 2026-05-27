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
import ShapeSizeEditor from '@/components/organisms/editor/shape-size-editor';
import StrokeEditor from '@/components/molecules/editor/StrokeEditor';

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
    strokeDasharray: {
      gap: undefined,
      dash: undefined,
    },
  };
}

export function getTriangleEditor(): ui.Editor {
  return {
      title: 'Triangle',
      grids: [
        {
          title: 'Size',
          cells: [
            {
              key: 'triangle-size',
              type: 'custom',
              component: ShapeSizeEditor,
            },
          ],
        },
        {
          title: 'Appearance',
          cells: [
            {
              key: 'triangle-fill',
              type: 'color-picker',
              shapePropName: 'fill',
              props: {
                label: 'Color',
                inputId: 'triangle-fill-color',
              },
            },
            {
              key: 'triangle-rotation',
              type: 'numeric',
              separator: true,
              shapePropName: 'rotation',
              props: {
                label: 'Rotation \u00B0',
                inputId: 'triangle-rotation',
              },
            },
          ],
        },
        {
          title: 'Stroke',
          cells: [
            {
              key: 'triangle-stroke',
              type: 'custom',
              component: StrokeEditor,
            },
          ],
        },
      ],
    };
}

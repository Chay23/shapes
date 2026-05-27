import DashedStrokeEditor from '@/components/organisms/editor/dashed-stroke-editor';
import type { StrokeType, TabEditorArgs } from '@/types/UI';

export const strokeStyleOptions: TabEditorArgs<StrokeType> = {
  type: 'tabs',
  solid: {
    cells: [
      {
        key: 'solid-stroke-color',
        type: 'color-picker',
        shapePropName: 'stroke',
        props: {
          label: 'Color',
          inputId: 'rectangle-fill-color',
        },
      },
      {
        key: 'solid-stroke-width',
        type: 'slider',
        separator: true,
        shapePropName: 'strokeWidth',
        props: {
          inputId: 'rectangle-stroke-width',
          min: 0,
          max: 20,
        },
      },
    ],
  },
  dashed: {
    cells: [
      {
        key: 'dashed-stroke-color',
        type: 'color-picker',
        shapePropName: 'stroke',
        props: {
          label: 'Color',
          inputId: 'rectangle-fill-color',
        },
      },
      {
        key: 'dashed-stroke-width',
        type: 'slider',
        shapePropName: 'strokeWidth',
        props: {
          inputId: 'rectangle-stroke-width',
          min: 0,
          max: 20,
        },
      },
      {
        key: 'dashed-stroke-style',
        type: 'custom',
        component: DashedStrokeEditor,
        separator: true,
      },
    ],
  },
};

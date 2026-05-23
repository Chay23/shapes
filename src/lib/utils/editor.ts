import DashedStrokeEditor from '@/components/organisms/editor/dashed-stroke-editor';
import type { StrokeType, TabEditorArgs } from '@/types/UI';

export const strokeStyleOptions: TabEditorArgs<StrokeType> = {
  type: 'tabs',
  solid: {
    cells: [
      {
        type: 'color-picker',
        shapePropName: 'stroke',
        props: {
          label: 'Color',
          inputId: 'rectangle-fill-color',
        },
      },
      {
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
        type: 'color-picker',
        shapePropName: 'stroke',
        props: {
          label: 'Color',
          inputId: 'rectangle-fill-color',
        },
      },
      {
        type: 'slider',
        shapePropName: 'strokeWidth',
        props: {
          inputId: 'rectangle-stroke-width',
          min: 0,
          max: 20,
        },
      },
      {
        type: 'custom',
        component: DashedStrokeEditor,
        separator: true,
      },
    ],
  },
};

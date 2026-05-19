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
    cells: [],
  },
};

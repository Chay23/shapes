import type { ui } from '@/types';
import { TabsEditor } from './TabsEditor';
import { strokeStyleOptions } from '@/lib/utils/editor';

const variantOptions: ui.StrokeType[] = ['solid', 'dashed'];

export default function StrokeEditor() {
  return (
    <TabsEditor
      variantOptions={variantOptions}
      defaultOption={'solid'}
      options={strokeStyleOptions}
    />
  );
}

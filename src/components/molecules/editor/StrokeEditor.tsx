import type { ui } from '@/types';
import { TabsEditor } from './TabsEditor';
import { strokeStyleOptions } from '@/lib/utils/editor';
import { useState } from 'react';

const variantOptions: ui.StrokeType[] = ['solid', 'dashed'];

export default function StrokeEditor() {
  const [selectedOption, setSelectedOption] = useState<ui.StrokeType>(
    variantOptions[0],
  );

  const handleOptionChange = (option: ui.StrokeType) => {
    setSelectedOption(option);
  };

  return (
    <TabsEditor
      selectedOption={selectedOption}
      onOptionChange={handleOptionChange}
      variantOptions={variantOptions}
      options={strokeStyleOptions}
    />
  );
}

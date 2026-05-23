import type { ui } from '@/types';
import { TabsEditor } from './TabsEditor';
import { strokeStyleOptions } from '@/lib/utils/editor';
import { useState } from 'react';
import { useSelectedShape, useUpdateShape } from '@/store/shapes/selectors';

const variantOptions: ui.StrokeType[] = ['solid', 'dashed'];

export default function StrokeEditor() {
  const updateShape = useUpdateShape();
  const selectedShape = useSelectedShape();
  const [selectedOption, setSelectedOption] = useState<ui.StrokeType>(
    selectedShape?.strokeDasharray?.dash !== undefined
      ? 'dashed'
      : variantOptions[0],
  );

  const handleOptionChange = (option: ui.StrokeType) => {
    if (!selectedShape) return;

    setSelectedOption(option);

    if (option === 'dashed') {
      return updateShape({
        ...selectedShape,
        strokeDasharray: { ...selectedShape.strokeDasharray, dash: 6 },
      });
    }
    updateShape({
      ...selectedShape,
      strokeDasharray: {
        dash: undefined,
        gap: undefined,
      },
    });
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

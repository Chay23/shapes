import { useState } from 'react';
import { Slider } from '@/components/atoms/Slider';
import type { s, ui } from '@/types';
import { useSelectedShape } from '@/store/shapes/selectors';
import { Label } from '@/components/atoms/Label';

type SliderProps = ui.SliderEditorArgs['props'] & {
  shapePropsName: s.NumericShapeKeys;
  onCommit: (value: number) => void;
};

export default function SliderEditorInput({
  shapePropsName,
  inputId,
  label,
  min,
  max,
  onCommit,
}: SliderProps) {
  const selectedShape = useSelectedShape() as s.Rectangle;

  const [sliderValue, setSliderValue] = useState([
    selectedShape[shapePropsName],
  ]);

  const handleStrokeWidthChange = (values: number[]) => {
    if (!selectedShape) return;

    setSliderValue(values);
    onCommit(values[0]);
  };

  return (
    <div className='flex items-center gap-2 py-2'>
      {label && <Label>{label}</Label>}
      <Slider
        id={inputId}
        min={min}
        max={max}
        value={sliderValue}
        onValueChange={handleStrokeWidthChange}
      />
      <span className='text-xs'>{sliderValue}px</span>
    </div>
  );
}

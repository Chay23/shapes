import { useState } from 'react';
import { useShapes } from '../../../store/shapes/shapes';
import { Slider } from '@/components/atoms/Slider';
import { Separator } from '@/components/atoms/Separator';
import type { s } from '@/types';
import { useSelectedShape } from '@/store/shapes/selectors';

export default function StrokeWidthEditor() {
  const selectedShape = useSelectedShape() as s.Rectangle;
  const updateShape = useShapes((state) => state.updateShape);
  const [strokeWidth, setStrokeWidth] = useState([selectedShape.strokeWidth]);

  const handleStrokeWidthChange = (values: number[]) => {
    if (!selectedShape) return;

    setStrokeWidth(values);
    updateShape({ ...selectedShape, strokeWidth: values[0] });
  };

  return (
    <article>
      <h5>Stroke</h5>
      <div className='flex items-center gap-2 py-2'>
        <Slider
          min={0}
          max={20}
          value={strokeWidth}
          onValueChange={handleStrokeWidthChange}
        />
        <span className='text-xs'>{strokeWidth}px</span>
      </div>
      <Separator />
    </article>
  );
}

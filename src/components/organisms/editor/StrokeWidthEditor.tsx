import { useState } from 'react';
import { useShapes } from '../../../store/shapes';

export default function StrokeWidthEditor() {
  const selectedShapes = useShapes((state) => state.selectedShapes);
  const selectedShape = Array.from(selectedShapes.values())[0];
  const updateShape = useShapes((state) => state.updateShape);
  const [strokeWidth, setStrokeWidth] = useState(selectedShape.strokeWidth);

  const handleStrokeWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!selectedShape) return;

    setStrokeWidth(parseFloat(value));
    updateShape({ ...selectedShape, strokeWidth: parseFloat(value) });
  };

  return (
    <article>
      <h5>Stroke</h5>
      <div className='flex items-center gap-2'>
        <input
          type='range'
          min={0}
          max={10}
          value={strokeWidth}
          onChange={handleStrokeWidthChange}
        />
        <span className='text-xs'>{strokeWidth}px</span>
      </div>
    </article>
  );
}

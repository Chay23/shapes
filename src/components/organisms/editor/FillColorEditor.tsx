import { useState } from 'react';
import { useShapes } from '../../../store/shapes';

export default function FillColorEditor() {
  const selectedShapes = useShapes((state) => state.selectedShapes);
  const selectedShape = Array.from(selectedShapes.values())[0];
  const updateShape = useShapes((state) => state.updateShape);
  const [fill, setFill] = useState(selectedShape.fill);

  const handleFillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);
    if (!selectedShape) return;
    setFill(value);
    updateShape({ ...selectedShape, fill: value });
  };

  return (
    <article>
      <h5>Fill</h5>
      <input type='color' value={fill} onChange={handleFillChange} />
    </article>
  );
}

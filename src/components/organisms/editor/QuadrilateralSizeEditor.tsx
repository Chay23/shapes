import { useState } from 'react';
import { useShapes } from '../../../store/shapes';

export default function QuadrilateralSizeEditor() {
  const selectedShapes = useShapes((state) => state.selectedShapes);
  const selectedShape = Array.from(selectedShapes.values())[0];
  const updateShape = useShapes((state) => state.updateShape);

  const [size, setSize] = useState({
    width: selectedShape.width,
    height: selectedShape.height,
  });

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (value === '') {
      return setSize((prevSize) => ({
        ...prevSize,
        [name]: '',
      }));
    }

    setSize((prevSize) => ({
      ...prevSize,
      [name]: parseFloat(value),
    }));
  };

  const handleApplySizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!selectedShape) return;

    if (!value) {
      setSize((prevSize) => ({
        ...prevSize,
        [name]: selectedShape[name],
      }));
      return;
    }

    if (name === 'height') {
      updateShape({ ...selectedShape, height: parseFloat(value) });
      return;
    }
    updateShape({ ...selectedShape, width: parseFloat(value) });
  };

  return (
    <article className='border-b-2 py-2'>
      <h5>Size</h5>
      <div className='flex gap-3'>
        <div className='flex-1 min-w-0'>
          {/* // make separate label component */}
          <label className='text-xs' htmlFor='shape-height'>
            Height
          </label>
          <input
            id='shape-height'
            value={size.height}
            className='w-full'
            name='height'
            onChange={handleSizeChange}
            onBlur={handleApplySizeChange}
          />
        </div>
        <div className='flex-1 min-w-0'>
          {/* // make separate label component */}
          <label className='text-xs' htmlFor='shape-width'>
            Width
          </label>
          <input
            id='shape-width'
            value={size.width}
            className='w-full'
            name='width'
            onChange={handleSizeChange}
            onBlur={handleApplySizeChange}
          />
        </div>
      </div>
    </article>
  );
}

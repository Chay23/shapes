import { useState } from 'react';
import { useShapes } from '../../../store/shapes';
import { Input } from '@/components/atoms/Input';
import { Field, FieldLabel } from '@/components/atoms/Field';
import { Separator } from '@/components/atoms/Separator';

export default function RectangleSizeEditor() {
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
    <article>
      <h5>Size</h5>
      <div className='flex gap-3 py-2'>
        <Field className='flex-1'>
          <FieldLabel htmlFor='shape-height'>Height</FieldLabel>
          <Input
            id='shape-height'
            value={size.height}
            name='height'
            onChange={handleSizeChange}
            onBlur={handleApplySizeChange}
          />
        </Field>
        <Field className='flex-1'>
          <FieldLabel htmlFor='shape-width'>Width</FieldLabel>
          <Input
            id='shape-width'
            value={size.width}
            name='width'
            onChange={handleSizeChange}
            onBlur={handleApplySizeChange}
          />
        </Field>
      </div>
      <Separator />
    </article>
  );
}

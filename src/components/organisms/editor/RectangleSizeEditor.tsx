import { useState } from 'react';
import { useShapes } from '../../../store/shapes/shapes';
import { Input } from '@/components/atoms/Input';
import { Field, FieldLabel } from '@/components/atoms/Field';
import { Separator } from '@/components/atoms/Separator';
import type { s } from '@/types';
import { useSelectedShape } from '@/store/shapes/selectors';

type RectangleSize = {
  width: string | number;
  height: string | number;
};

type InputName = 'width' | 'height';

export default function RectangleSizeEditor() {
  const selectedShape = useSelectedShape() as s.Rectangle;
  const updateShape = useShapes((state) => state.updateShape);

  const [size, setSize] = useState<Partial<RectangleSize>>({});

  const displayWidth = 'width' in size ? size.width : selectedShape.width;
  const displayHeight = 'height' in size ? size.height : selectedShape.height;

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

  const applySizeChange = (name: InputName, value: string) => {
    if (!selectedShape) return;

    if (!value) {
      setSize({});
      return;
    }

    setSize({});

    if (name === 'height') {
      updateShape({ ...selectedShape, height: parseFloat(value) });
      return;
    }
    updateShape({ ...selectedShape, width: parseFloat(value) });
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    applySizeChange(name as InputName, value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    if (e.key === 'Enter') {
      applySizeChange(name as InputName, value);
    }
  };

  return (
    <article>
      <h5>Size</h5>
      <div className='flex gap-3 py-2'>
        <Field className='flex-1'>
          <FieldLabel htmlFor='shape-height'>Height</FieldLabel>
          <Input
            id='shape-height'
            value={displayHeight}
            name='height'
            onChange={handleSizeChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        </Field>
        <Field className='flex-1'>
          <FieldLabel htmlFor='shape-width'>Width</FieldLabel>
          <Input
            id='shape-width'
            value={displayWidth}
            name='width'
            onChange={handleSizeChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        </Field>
      </div>
      <Separator />
    </article>
  );
}

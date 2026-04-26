import { useRef, useState } from 'react';
import { useShapes } from '../../../store/shapes/shapes';
import { Input } from '@/components/atoms/Input';
import { ButtonGroup } from '@/components/atoms/ButtonGroup';
import { Button } from '@/components/atoms/Button';
import type { s } from '@/types';
import { useSelectedShape } from '@/store/shapes/selectors';
import EditorCell from './EditorCell';

export default function FillColorEditor() {
  const selectedShape = useSelectedShape() as s.Rectangle;
  const updateShape = useShapes(state => state.updateShape);
  const [fill, setFill] = useState(selectedShape.fill);
  const colorPickerRef = useRef<HTMLInputElement>(null);

  const handleColorPickerOpen = () => {
    colorPickerRef.current?.click();
  };

  const handleFillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!selectedShape) return;
    setFill(value);
    updateShape({ ...selectedShape, fill: value });
  };

  return (
    <EditorCell title={'Fill'}>
      <ButtonGroup className='flex'>
        <Input
          type='text'
          className='basis-10/12'
          value={fill}
          onChange={handleFillChange}
        />
        <input
          className='invisible absolute'
          ref={colorPickerRef}
          type='color'
          value={fill}
          onChange={handleFillChange}
          accept=''
        />
        <Button
          className='basis-2/12'
          style={{ backgroundColor: fill }}
          onPointerDown={handleColorPickerOpen}></Button>
      </ButtonGroup>
    </EditorCell>
  );
}

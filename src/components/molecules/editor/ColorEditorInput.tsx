import { useRef, useState } from 'react';
import { Input } from '@/components/atoms/Input';
import { ButtonGroup } from '@/components/atoms/ButtonGroup';
import { Button } from '@/components/atoms/Button';
import type { s, ui } from '@/types';
import { useSelectedShape } from '@/store/shapes/selectors';
import { Field, FieldLabel } from '@/components/atoms/Field';

type Props = ui.ColorEditInputArgs['props'] & {
  shapePropName: s.ColorShapeKeys;
  ref?: React.Ref<HTMLInputElement>;
  onCommit: (value: string) => void;
};

export default function ColorEditorInput({
  shapePropName,
  inputId,
  label,
  fieldClassName,
  ref,
  onCommit,
}: Props) {
  const selectedShape = useSelectedShape() as s.Rectangle;
  const [fill, setFill] = useState(selectedShape[shapePropName]);
  const colorPickerRef = useRef<HTMLInputElement>(null);

  const handleColorPickerOpen = () => {
    colorPickerRef.current?.click();
  };

  const handleFillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!selectedShape) return;
    setFill(value);
    onCommit(value);
  };

  return (
    <Field className={fieldClassName}>
      <FieldLabel htmlFor={inputId}>{label}</FieldLabel>
      <ButtonGroup className='flex'>
        <Input
          ref={ref}
          id={inputId}
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
    </Field>
  );
}

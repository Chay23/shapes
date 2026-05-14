import { useState } from 'react';
import { Input } from '@/components/atoms/Input';
import type { s, ui } from '@/types';
import { useSelectedShape } from '@/store/shapes/selectors';
import { isEmptyString, isValidNumber } from '@/lib/utils/common';
import { Field, FieldLabel } from '@/components/atoms/Field';

type Props = ui.NumericEditInputArgs['props'] & {
  shapePropName: s.NumericShapeKeys;
  ref?: React.Ref<HTMLInputElement>;
  onCommit: (value: number) => void;
};

export default function NumberEditorInput({
  shapePropName,
  inputId,
  label,
  fieldClassName,
  inputClassName,
  onCommit,
  ref,
}: Props) {
  const selectedShape = useSelectedShape() as s.Shape;
  const [value, setValue] = useState<string | undefined>(undefined);

  const displayValue =
    value !== undefined ? value : selectedShape[shapePropName];

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!selectedShape) return;
    setValue(value);
  };

  const commitValue = (value: string) => {
    setValue(undefined);

    if (!selectedShape || isEmptyString(value) || !isValidNumber(value)) return;

    onCommit(parseFloat(value));
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    commitValue(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (e.key === 'Enter') {
      commitValue(value);
    }

    if (e.key === 'Escape') {
      setValue(undefined);
    }
  };

  return (
    <Field className={fieldClassName}>
      <FieldLabel htmlFor={inputId}>{label}</FieldLabel>
      <Input
        ref={ref}
        id={inputId}
        type='text'
        className={inputClassName}
        value={displayValue}
        onChange={handleValueChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    </Field>
  );
}

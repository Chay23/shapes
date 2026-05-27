import { useState } from 'react';
import { Input } from '@/components/atoms/Input';
import type { s, ui } from '@/types';
import { useSelectedShape } from '@/store/shapes/selectors';
import { isEmptyString, isValidNumber } from '@/lib/utils/common';
import { Field, FieldLabel } from '@/components/atoms/Field';

type Props = ui.NumericEditInputArgs['props'] &
  Omit<
    React.ComponentProps<'input'>,
    'id | onChange' | 'onBlur' | 'onKeyDown'
  > & {
    shapePropName?: s.NumericShapeKeys;
    value?: number;
    onCommit: (value: number) => void;
  };

export default function NumberEditorInput({
  shapePropName,
  inputId,
  label,
  fieldClassName,
  inputClassName,
  ref,
  value,
  onCommit,
  ...rest
}: Props) {
  const selectedShape = useSelectedShape() as s.Shape;
  const [inputValue, setInputValue] = useState<string | undefined>(undefined);

  const getDisplayValue = () => {
    if (inputValue !== undefined) return inputValue;
    if (shapePropName) return selectedShape[shapePropName];
    return value ?? 0;
  };

  const displayValue = getDisplayValue();

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const commitValue = (val: string) => {
    setInputValue(undefined);

    if (isEmptyString(val) || !isValidNumber(val)) return;

    onCommit(parseFloat(val));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    commitValue(e.currentTarget.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      commitValue(e.currentTarget.value);
    }

    if (e.key === 'Escape') {
      setInputValue(undefined);
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const value = parseFloat(e.currentTarget.value);
      commitValue((value + 1).toString());
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const value = parseFloat(e.currentTarget.value);
      const valueToCommit = value > 0 ? (value - 1).toString() : '0';
      commitValue(valueToCommit);
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
        {...rest}
      />
    </Field>
  );
}

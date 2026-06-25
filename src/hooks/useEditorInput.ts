import { useState } from 'react';

/**
 * Manages state for editor inputs with proper synchronization to external shape changes.
 * Resets local input state when the shape selection changes or properties are modified externally.
 *
 * @param currentValue - The current value from the shape (reactive)
 * @param shapeId - The ID of the selected shape (used for dependency tracking)
 * @returns State object with the input value and handlers
 */
export function useEditorInput<T extends string | number>(
  currentValue: T,
  //   shapeId: string | undefined,
) {
  const [inputValue, setInputValue] = useState<T | undefined>(undefined);

  // Reset local input state when shape selection changes (external modifications detected

  /**
   * Gets the display value - prioritizes user input over current shape value.
   * Once user starts typing, shows that input until committed or canceled.
   */
  const getDisplayValue = (): T => {
    console.log(inputValue);
    return inputValue !== undefined ? inputValue : currentValue;
  };

  /**
   * Sets the input to user's typed value
   */
  const updateInputValue = (newValue: T) => {
    console.log(newValue);
    setInputValue(newValue);
  };

  /**
   * Resets the input to show current value (e.g., on Escape key)
   */
  const resetInputValue = () => {
    setInputValue(undefined);
  };

  /**
   * Commits the input value and resets local state
   */
  const commitValue = (callback: (value: T) => void) => {
    console.log(inputValue);
    if (inputValue !== undefined) {
      callback(inputValue);
    }
    setInputValue(undefined);
  };

  return {
    displayValue: getDisplayValue(),
    inputValue,
    updateInputValue,
    resetInputValue,
    commitValue,
  };
}

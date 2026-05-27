import { Button } from '@/components/atoms/Button';
import { ButtonGroup } from '@/components/atoms/ButtonGroup';
import EditorGrid from '@/components/organisms/editor/EditorGrid';
import { capitalizeFirstLetter } from '@/lib/utils/common';
import type { ui } from '@/types';

type Props<T extends string> = {
  selectedOption: T;
  variantOptions: T[];
  options: ui.TabEditorArgs<T>;
  onOptionChange: (option: T) => void;
};

export function TabsEditor<T extends string>({
  selectedOption,
  variantOptions,
  options,
  onOptionChange,
}: Props<T>) {
  const handleOptionChange = (option: T) => {
    onOptionChange(option);
  };

  return (
    <>
      <ButtonGroup className='w-full flex-1'>
        {variantOptions.map(option => {
          return (
            <Button
              key={option}
              className='flex-1 text-xs'
              variant={option === selectedOption ? 'default' : 'outline'}
              onPointerDown={() => handleOptionChange(option)}>
              {capitalizeFirstLetter(option)}
            </Button>
          );
        })}
      </ButtonGroup>
      <EditorGrid grid={options[selectedOption]} />
    </>
  );
}

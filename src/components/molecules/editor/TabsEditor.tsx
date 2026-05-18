import { Button } from '@/components/atoms/Button';
import { ButtonGroup } from '@/components/atoms/ButtonGroup';
import EditorGrid from '@/components/organisms/editor/EditorGrid';
import { capitalizeFirstLetter } from '@/lib/utils/common';
import type { ui } from '@/types';
import { useState } from 'react';

type Props = {
  variantOptions: string[];
  options: ui.TabEditorArgs;
  defaultOption: string;
};

export function TabsEditor({ variantOptions, options, defaultOption }: Props) {
  const [selectedOption, setSelectedOption] = useState<string>(
    defaultOption || variantOptions[0],
  );

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      <ButtonGroup className='w-full flex-1'>
        {variantOptions.map(option => {
          return (
            <Button
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

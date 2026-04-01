import { type MouseEvent } from 'react';
import { ShapeTypeButton } from '../atoms/ShapeTypeButton';
import type { s } from '../../types';
import { useShapes } from '../../store/shapes';
import { toolbarOptions } from '@/lib/utils/common';

export default function BottomToolbar() {
  const addShape = useShapes((state) => state.addShape);

  const handleAddShape = (e: MouseEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.getAttribute('data-type') as
      | s.ShapeType
      | undefined;

    if (!type) {
      return;
    }

    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const x = screenWidth / 2;
    const y = screenHeight / 2;
    addShape(type, crypto.randomUUID(), x, y);
  };

  return (
    <div
      data-keep-selection={true}
      className='fixed bottom-3 left-1/2 -translate-x-1/2 bg-surface z-999'
    >
      <div className='py-1.5 px-4 rounded-lg bg-card shadow-md'>
        <div className='flex gap-3'>
          {toolbarOptions.map(({ id, component: Component, dataType }) => (
            <ShapeTypeButton
              key={id}
              data-type={dataType}
              onClick={handleAddShape}
            >
              <Component strokeWidth={1} />
            </ShapeTypeButton>
          ))}
        </div>
      </div>
    </div>
  );
}

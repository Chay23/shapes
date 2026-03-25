import { type MouseEvent } from 'react';
import {
  TYPE_CIRCLE,
  TYPE_ELLIPSE,
  TYPE_RECTANGLE,
  TYPE_TRIANGLE,
} from '../../lib/constants/common';
import { ShapeTypeButton } from '../atoms/ShapeTypeButton';
import type { s } from '../../types';
import { useShapes } from '../../store/shapes';

export default function Toolbar() {
  const addShape = useShapes((state) => state.addShape);

  const handleAddShape = (e: MouseEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.getAttribute('data-type') as s.ShapeType;
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const x = screenWidth / 2;
    const y = screenHeight / 2;
    addShape(type, crypto.randomUUID(), x, y);
  };

  return (
    <div className='fixed bottom-3 left-1/2 -translate-x-1/2 bg-surface z-999'>
      <div className='p-3 rounded-xl bg-gray-100'>
        <div className='grid grid-cols-4 gap-2'>
          <ShapeTypeButton data-type={TYPE_RECTANGLE} onClick={handleAddShape}>
            Rectangle
          </ShapeTypeButton>
          <ShapeTypeButton data-type={TYPE_TRIANGLE}>Triangle</ShapeTypeButton>
          <ShapeTypeButton data-type={TYPE_CIRCLE}>Circle</ShapeTypeButton>
          <ShapeTypeButton data-type={TYPE_ELLIPSE}>Ellipse</ShapeTypeButton>
        </div>
      </div>
    </div>
  );
}

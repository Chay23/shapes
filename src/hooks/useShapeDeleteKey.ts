import { useSelectedShape } from '@/store/shapes/selectors';
import { useShapes } from '@/store/shapes/shapes';
import { useEffect } from 'react';

export default function useShapeDeleteKey() {
  const selectedShape = useSelectedShape();
  const deleteShape = useShapes((state) => state.deleteShape);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Delete' && selectedShape) {
      deleteShape(selectedShape.id);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedShape]);
}

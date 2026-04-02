import { useSelectedShape } from '@/store/selectors';
import { TYPE_RECTANGLE } from '../../../lib/constants/common';
import RectangleEditor from './RectangleEditor';

export default function ShapeEditor() {
  const selectedShape = useSelectedShape();

  if (!selectedShape) {
    return null;
  }

  switch (selectedShape.type) {
    case TYPE_RECTANGLE: {
      return <RectangleEditor />;
    }
  }
}

import { useSelectedShape } from '@/store/shapes/selectors';
import { TYPE_ELLIPSE, TYPE_RECTANGLE } from '../../../lib/constants/common';
import RectangleEditor from './RectangleEditor';
import EllipseEditor from './EllipseEditor';

export default function ShapeEditor() {
  const selectedShape = useSelectedShape();

  if (!selectedShape) {
    return null;
  }

  switch (selectedShape.type) {
    case TYPE_RECTANGLE: {
      return <RectangleEditor />;
    }

    case TYPE_ELLIPSE: {
      return <EllipseEditor />;
    }
  }
}

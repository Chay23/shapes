import { useSelectedShape } from '@/store/shapes/selectors';
import {
  TYPE_ELLIPSE,
  TYPE_RECTANGLE,
  TYPE_TRIANGLE,
} from '../../../lib/constants/common';
import RectangleEditor from './RectangleEditor';
import EllipseEditor from './EllipseEditor';
import TriangleEditor from './TriangleEditor';

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
    // case TYPE_TRIANGLE: {
    // return <TriangleEditor />;
    // }
  }
}

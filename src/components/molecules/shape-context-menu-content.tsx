import { TYPE_ELLIPSE, TYPE_RECTANGLE } from '@/lib/constants/common';
import { useSelectedShape } from '@/store/shapes/selectors';
import ReactangleContextMenuContent from './rectangle/rectangle-context-menu-content';
import EllipseContextMenuContent from './ellipse/ellipse-context-menu-content';

export default function ShapeContextMenuContent() {
  const selectedShape = useSelectedShape();

  if (!selectedShape) return null;

  switch (selectedShape.type) {
    case TYPE_RECTANGLE: {
      return <ReactangleContextMenuContent />;
    }
    case TYPE_ELLIPSE: {
      return <EllipseContextMenuContent />;
    }
    default:
      return null;
  }
}

import {
  TYPE_ELLIPSE,
  TYPE_LINE,
  TYPE_RECTANGLE,
  TYPE_TRIANGLE,
} from '@/lib/constants/common';
import { useSelectedShape } from '@/store/shapes/selectors';
import ReactangleContextMenuContent from './rectangle/rectangle-context-menu-content';
import EllipseContextMenuContent from './ellipse/ellipse-context-menu-content';
import TriangleContextMenuContent from './triangle/triangle-context-menu-content';
import LineContextMenuContent from './line/line-context-menu-content';

export default function ShapeContextMenuFactory() {
  const selectedShape = useSelectedShape();

  if (!selectedShape) return null;

  switch (selectedShape.type) {
    case TYPE_RECTANGLE: {
      return <ReactangleContextMenuContent />;
    }
    case TYPE_ELLIPSE: {
      return <EllipseContextMenuContent />;
    }
    case TYPE_TRIANGLE: {
      return <TriangleContextMenuContent />;
    }
    case TYPE_LINE: {
      return <LineContextMenuContent />;
    }
    default:
      return null;
  }
}

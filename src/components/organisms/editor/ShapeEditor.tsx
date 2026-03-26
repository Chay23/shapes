import { TYPE_RECTANGLE } from '../../../lib/constants/common';
import { useShapes } from '../../../store/shapes';
import QuadrilateralEditor from './QuadrilateralEditor';

export default function ShapeEditor() {
  const selectedShapes = useShapes((state) => state.selectedShapes);
  const selectedShape = Array.from(selectedShapes.values())[0];

  switch (selectedShape.type) {
    case TYPE_RECTANGLE: {
      return <QuadrilateralEditor />;
    }
  }

  return <section></section>;
}

import { useShapes } from '../../store/shapes';
import SceneEditor from './editor/SceneEditor';
import ShapeEditor from './editor/ShapeEditor';

export default function SidebarContent() {
  const selectedShapes = useShapes((state) => state.selectedShapeIds);

  if (selectedShapes.size === 0) {
    return <SceneEditor />;
  }
  return <ShapeEditor />;
}

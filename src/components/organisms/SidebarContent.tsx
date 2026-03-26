import { useShapes } from '../../store/shapes';
import SceneEditor from './editor/SceneEditor';
import ShapeEditor from './editor/ShapeEditor';

export default function SidebarContent() {
  const selectedShapes = useShapes((state) => state.selectedShapes);

  if (selectedShapes.size === 0) {
    return <SceneEditor />;
  }
  if (selectedShapes.size === 1) {
    return <ShapeEditor />;
  }
  return null;
}

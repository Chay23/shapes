import { EditorGrid } from './EditorGrid';
import ShapeSizeEditor from './ShapeSizeEditor';

export default function EllipseEditor() {
  return (
    <EditorGrid title={'Ellipse'}>
      <ShapeSizeEditor />
    </EditorGrid>
  );
}

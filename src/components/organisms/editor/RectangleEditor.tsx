import ShapeSizeEditor from './ShapeSizeEditor';
import StrokeWidthEditor from './StrokeWidthEditor';
import FillColorEditor from './FillColorEditor';
import { EditorGrid } from './EditorGrid';

export default function RectangleEditor() {
  return (
    <EditorGrid title={'Rectangle'}>
      <ShapeSizeEditor />
      <StrokeWidthEditor />
      <FillColorEditor />
    </EditorGrid>
  );
}

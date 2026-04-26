import ShapeSizeEditor from './ShapeSizeEditor';
import StrokeWidthEditor from './StrokeWidthEditor';
import FillColorEditor from './FillColorEditor';
import { EditorGrid } from './EditorGrid';
import { Separator } from '@/components/atoms/Separator';

export default function RectangleEditor() {
  return (
    <EditorGrid title={'Rectangle'}>
      <ShapeSizeEditor />
      <Separator />
      <StrokeWidthEditor />
      <Separator />
      <FillColorEditor />
    </EditorGrid>
  );
}

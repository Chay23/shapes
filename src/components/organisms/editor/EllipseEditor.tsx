import { Separator } from '@/components/atoms/Separator';
import { EditorGrid } from './EditorGrid';
import ShapeSizeEditor from './ShapeSizeEditor';
import StrokeWidthEditor from './StrokeWidthEditor';

export default function EllipseEditor() {
  return (
    <EditorGrid title={'Ellipse'}>
      <ShapeSizeEditor />
      <Separator />
      <StrokeWidthEditor />
    </EditorGrid>
  );
}

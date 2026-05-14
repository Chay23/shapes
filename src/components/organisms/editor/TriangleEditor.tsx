import { getTriangleEditor } from '@/lib/utils/triangle';
import EditorGrid from './EditorGrid';

export default function TriangleEditor() {
  const triangleEditorOptions = getTriangleEditor();
  return <EditorGrid editorOptions={triangleEditorOptions} />;
}

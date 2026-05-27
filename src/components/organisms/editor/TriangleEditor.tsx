import { getTriangleEditor } from '@/lib/utils/triangle';
import Editor from './Editor';

export default function TriangleEditor() {
  const triangleEditorOptions = getTriangleEditor();
  return <Editor editorOptions={triangleEditorOptions} />;
}

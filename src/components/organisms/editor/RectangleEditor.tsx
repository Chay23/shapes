import Editor from './Editor';
import { getRectangleEditor } from '@/lib/utils/rectangle';

export default function RectangleEditor() {
  const rectangleEditorOptions = getRectangleEditor();
  return <Editor editorOptions={rectangleEditorOptions} />;
}

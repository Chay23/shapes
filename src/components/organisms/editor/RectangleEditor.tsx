import { EditorGrid } from './EditorGrid';
import { getRectangleEditor } from '@/lib/utils/rectangle';

export default function RectangleEditor() {
  const rectangleEditorOptions = getRectangleEditor();
  return <EditorGrid editorOptions={rectangleEditorOptions} />;
}

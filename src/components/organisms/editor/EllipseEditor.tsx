import Editor from './Editor';
import { getEllipseEditor } from '@/lib/utils/ellipse';

export default function EllipseEditor() {
  const ellipseEditorOptions = getEllipseEditor();
  return <Editor editorOptions={ellipseEditorOptions} />;
}

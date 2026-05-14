import EditorGrid from './EditorGrid';
import { getEllipseEditor } from '@/lib/utils/ellipse';

export default function EllipseEditor() {
  const ellipseEditorOptions = getEllipseEditor();
  return <EditorGrid editorOptions={ellipseEditorOptions} />;
}

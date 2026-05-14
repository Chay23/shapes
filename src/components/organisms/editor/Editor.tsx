import type { ui } from '@/types';
import EditorGrid from './EditorGrid';

type Props = {
  editorOptions: ui.Editor;
};

export default function Editor({ editorOptions }: Props) {
  const { title, grids } = editorOptions;
  return (
    <section className='flex flex-col gap-2'>
      {typeof title === 'string' ? <h4 className='text-lg'>{title}</h4> : title}
      {grids.map(grid => (
        <EditorGrid grid={grid} />
      ))}
    </section>
  );
}

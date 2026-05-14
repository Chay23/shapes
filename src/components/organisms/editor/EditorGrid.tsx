import { Separator } from '@/components/atoms/Separator';
import EditorCell from '@/components/molecules/editor/EditorCell';
import type { ui } from '@/types';

type Props = {
  grid: ui.EditorGrid;
};

export default function EditorGrid({ grid }: Props) {
  const { title, cells } = grid;
  return (
    <section className='flex flex-col gap-1'>
      {typeof title === 'string' ? (
        <h6 className='text-base'>{title}</h6>
      ) : (
        title
      )}
      {cells.map(cell => {
        return (
          <>
            <EditorCell {...cell} />
            {cell.separator && <Separator className='my-2' />}
          </>
        );
      })}
    </section>
  );
}

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
      {title && <h6 className='text-sm mb-1'>{title}</h6>}
      {cells.map(cell => {
        const { key, ...rest } = cell;
        return (
          <>
            <EditorCell key={key} {...rest} />
            {cell.separator && (
              <Separator key={`${key}-separator`} className='mt-2' />
            )}
          </>
        );
      })}
    </section>
  );
}

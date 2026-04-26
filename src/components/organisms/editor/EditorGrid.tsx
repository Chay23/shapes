import { Separator } from '@/components/atoms/Separator';
import type { ui } from '@/types';

type Props = {
  editorOptions: ui.EditorGrid;
};

export function EditorGrid({ editorOptions }: Props) {
  const { title, components } = editorOptions;
  return (
    <section className='flex flex-col gap-2'>
      {typeof title === 'string' ? <h4>{title}</h4> : title}
      {components.map(component => {
        const { separator, render: EditorCell } = component;
        return (
          <>
            <EditorCell />
            {separator && <Separator />}
          </>
        );
      })}
    </section>
  );
}

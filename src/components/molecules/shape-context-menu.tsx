import { useCloseContextMenu } from '@/store/contextMenu/selectors';
import { DropdownMenu, DropdownMenuContent } from '../atoms/dropdown-menu';
import ShapeContextMenuContent from './shape-context-menu-content';

type Props = {
  open: boolean;
  x: number;
  y: number;
};

export default function ShapeContextMenu({ x, y, open }: Props) {
  const closeContextMenu = useCloseContextMenu();

  return (
    <DropdownMenu
      open={open}
      onOpenChange={(open) => {
        if (!open) closeContextMenu();
      }}
    >
      <DropdownMenuContent
        className='w-40 absolute'
        align='start'
        style={{ left: x, top: y }}
      >
        <ShapeContextMenuContent />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

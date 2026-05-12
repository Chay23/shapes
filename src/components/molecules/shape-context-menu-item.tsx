import { useSelectedShape } from '@/store/shapes/selectors';
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from '../atoms/dropdown-menu';
import type { ui } from '@/types';

type Props = {
  item: ui.ContextMenuItem;
};

export default function ShapeContextMenuItem({ item }: Props) {
  const selectedShape = useSelectedShape();

  if (!selectedShape) return null;

  const attributes =
    item?.dataAttributes !== undefined ? item.dataAttributes : {};

  return (
    <>
      <DropdownMenuItem {...item.events} {...attributes}>
        {item.title}
        {item.shortcut && (
          <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
        )}
      </DropdownMenuItem>
      {item.separator && <DropdownMenuSeparator />}
    </>
  );
}

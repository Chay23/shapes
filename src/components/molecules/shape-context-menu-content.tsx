import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from '@/components/atoms/dropdown-menu';
import { TYPE_RECTANGLE } from '@/lib/constants/common';
import { useSelectedShape } from '@/store/shapes/selectors';
import type { s } from '@/types';

export default function ShapeContextMenuContent() {
  const selectedShape = useSelectedShape() as s.Shapes;

  if (!selectedShape) return null;

  switch (selectedShape.type) {
    case TYPE_RECTANGLE: {
      return (
        <>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Rotate 90°
              <DropdownMenuShortcut>Ctrl + R</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Bring to front
              <DropdownMenuShortcut>{`Ctrl + ]`}</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Send to back
              <DropdownMenuShortcut>{`Ctrl + [`}</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Delete
              <DropdownMenuShortcut>Delete</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </>
      );
    }
    default:
      return null;
  }
}

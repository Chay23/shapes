import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from '@/components/atoms/dropdown-menu';
import { useSelectedShape } from '@/store/shapes/selectors';
import { useShapes } from '@/store/shapes/shapes';

export default function EllipseContextMenuContent() {
  const selectedShape = useSelectedShape();
  const deleteShape = useShapes((state) => state.deleteShape);

  const handleShapeDelete = () => {
    if (selectedShape) {
      deleteShape(selectedShape.id);
    }
  };

  return (
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
      <DropdownMenuItem onPointerUp={handleShapeDelete}>
        Delete
        <DropdownMenuShortcut>Delete</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
  );
}

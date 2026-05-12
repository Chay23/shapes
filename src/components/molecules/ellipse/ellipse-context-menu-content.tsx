import { DropdownMenuGroup } from '@/components/atoms/dropdown-menu';
import useShapeRotateInstant from '@/hooks/use-shape-rotate-instant';
import { useSelectedShape } from '@/store/shapes/selectors';
import { useShapes } from '@/store/shapes/shapes';
import ShapeContextMenuItem from '../shape-context-menu-item';
import { getEllipseContextMenu } from '@/lib/utils/ellipse';

export default function EllipseContextMenuContent() {
  const selectedShape = useSelectedShape();
  const deleteShape = useShapes(state => state.deleteShape);
  const { handleShapeRotate } = useShapeRotateInstant(selectedShape!);

  const handleShapeDelete = () => {
    deleteShape(selectedShape!.id);
  };

  const handleShapeRotation = (event: React.PointerEvent<HTMLDivElement>) => {
    const angle = parseInt(
      event.currentTarget.getAttribute('data-angle') || '0',
    );
    handleShapeRotate(selectedShape!.rotation + angle);
  };

  const contextMenu = getEllipseContextMenu({
    rotateShape: handleShapeRotation,
    deleteShape: handleShapeDelete,
  });

  return (
    <DropdownMenuGroup>
      {contextMenu.map(item => (
        <ShapeContextMenuItem key={item.key} item={item} />
      ))}
    </DropdownMenuGroup>
  );
}

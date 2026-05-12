import { DropdownMenuGroup } from '@/components/atoms/dropdown-menu';
import { useSelectedShape } from '@/store/shapes/selectors';
import { useShapes } from '@/store/shapes/shapes';
import ShapeContextMenuItem from '../shape-context-menu-item';
import { getLineContextMenu } from '@/lib/utils/line';

export default function LineContextMenuContent() {
  const selectedShape = useSelectedShape();
  const deleteShape = useShapes(state => state.deleteShape);

  const handleShapeDelete = () => {
    deleteShape(selectedShape!.id);
  };

  const contextMenu = getLineContextMenu({
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

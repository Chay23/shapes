import ShapeContextMenu from './shape-context-menu';
import {
  useContextMenu,
  useOpenContextMenu,
} from '@/store/contextMenu/selectors';
import useShapeDeleteKey from '@/hooks/useShapeDeleteKey';

type Props = {
  children: React.ReactNode;
};

export default function ShapeWrapper({ children }: Props) {
  useShapeDeleteKey();
  const contextMenu = useContextMenu();
  const openContextMenu = useOpenContextMenu();

  const handleContextMenuOpen = (e: React.MouseEvent<SVGGElement>) => {
    e.preventDefault();
    openContextMenu(e.clientX, e.clientY);
  };

  return (
    <>
      <g onContextMenu={handleContextMenuOpen}>{children}</g>
      {contextMenu && (
        <ShapeContextMenu
          open={contextMenu.open}
          x={contextMenu.x}
          y={contextMenu.y}
        />
      )}
    </>
  );
}

import ShapeContextMenu from './shape-context-menu';
import {
  useContextMenu,
  useOpenContextMenu,
} from '@/store/contextMenu/selectors';
import useShapeDeleteKey from '@/hooks/useShapeDeleteKey';
import { useIsShapeSelected } from '@/store/shapes/selectors';
import useRectangleResize from '@/hooks/use-shape-resize';
import type { s } from '@/types';
import useShapeRotate from '@/hooks/use-shape-rotate';
import RotateButton from '../atoms/rotate-button';
import ResizeShapeButton from '../atoms/ResizeShapeButton';
import {
  getBoundingBoxCenterXPoint,
  getBoundingBoxCenterYPoint,
  getWrapperResizePosition,
} from '@/lib/utils/common';
import ShapeBoundingBox from './shape-bounding-box';

type Props = {
  shape: s.Shapes;
  children: React.ReactNode;
};

export default function ShapeWrapper({ shape, children }: Props) {
  useShapeDeleteKey();
  const isShapeSelected = useIsShapeSelected(shape.id);
  const { handleRectangleResize } = useRectangleResize({
    initialShape: shape,
  });
  const { handleShapeRotate } = useShapeRotate({
    initialShape: shape,
  });
  const contextMenu = useContextMenu();
  const openContextMenu = useOpenContextMenu();

  const handleContextMenuOpen = (e: React.MouseEvent<SVGGElement>) => {
    e.preventDefault();
    openContextMenu(e.clientX, e.clientY);
  };

  const boundingBoxCenterX = getBoundingBoxCenterXPoint(shape);
  const boundingBoxCenterY = getBoundingBoxCenterYPoint(shape);

  const wrapperResizePositions = getWrapperResizePosition(
    shape,
    handleRectangleResize,
  );

  return (
    <>
      <g
        onContextMenu={handleContextMenuOpen}
        transform={`rotate(${shape.rotation} ${boundingBoxCenterX} ${boundingBoxCenterY})`}>
        {children}
      </g>
      {contextMenu && (
        <ShapeContextMenu
          open={contextMenu.open}
          x={contextMenu.x}
          y={contextMenu.y}
        />
      )}

      {isShapeSelected && (
        <g>
          <g
            data-keep-selection={true}
            className='cursor-pointer'
            transform={`rotate(${shape.rotation} ${boundingBoxCenterX} ${boundingBoxCenterY})`}>
            <RotateButton shape={shape} onPointerDown={handleShapeRotate} />
            <ShapeBoundingBox shape={shape} />
            {wrapperResizePositions.map(props => {
              return (
                <ResizeShapeButton key={props['data-resize-side']} {...props} />
              );
            })}
          </g>
        </g>
      )}
    </>
  );
}

import useQuadrilateralResize from '../../../hooks/useQuadrilateralResize';
import {
  EAST_RESIZE,
  NORTH_EAST_RESIZE,
  NORTH_RESIZE,
  NORTH_WEST_RESIZE,
  SOUTH_EAST_RESIZE,
  SOUTH_RESIZE,
  SOUTH_WEST_RESIZE,
  WEST_RESIZE,
} from '../../../lib/constants/common';
import { useShapes } from '../../../store/shapes';
import type { s } from '../../../types';
import ResizeShapeButton from '../../atoms/ResizeShapeButton';

type Props = {
  quadrilateral: s.Quadrilateral;
  children?: React.ReactNode;
};

export function QuadrilateralWrapper({ quadrilateral, children }: Props) {
  const selectedShapes = useShapes((state) => state.selectedShapes);
  const isShapeSelected = selectedShapes.has(quadrilateral.id);
  const { handleQuadrilateralResize } = useQuadrilateralResize({
    quadrilateral,
  });

  const middleResizePositionX = quadrilateral.x + quadrilateral.width / 2;
  const middleResizePositionY = quadrilateral.y + quadrilateral.height / 2;
  const eastResizePositionX = quadrilateral.x + quadrilateral.width;
  const southResizePositionY = quadrilateral.y + quadrilateral.height;

  return (
    <g>
      {children}
      {isShapeSelected && (
        <g>
          <ResizeShapeButton
            cx={quadrilateral.x}
            cy={quadrilateral.y}
            data-resize-side={NORTH_WEST_RESIZE}
            className='cursor-nw-resize resize-btn'
            onPointerDown={handleQuadrilateralResize}
          />
          <ResizeShapeButton
            cx={middleResizePositionX}
            cy={quadrilateral.y}
            data-resize-side={NORTH_RESIZE}
            className='cursor-n-resize resize-btn'
            onPointerDown={handleQuadrilateralResize}
          />
          <ResizeShapeButton
            cx={eastResizePositionX}
            cy={quadrilateral.y}
            data-resize-side={NORTH_EAST_RESIZE}
            className='cursor-ne-resize resize-btn'
            onPointerDown={handleQuadrilateralResize}
          />

          <ResizeShapeButton
            cx={quadrilateral.x}
            cy={southResizePositionY}
            data-resize-side={SOUTH_WEST_RESIZE}
            className='cursor-sw-resize resize-btn'
            onPointerDown={handleQuadrilateralResize}
          />
          <ResizeShapeButton
            cx={middleResizePositionX}
            cy={southResizePositionY}
            data-resize-side={SOUTH_RESIZE}
            className='cursor-s-resize resize-btn'
            onPointerDown={handleQuadrilateralResize}
          />
          <ResizeShapeButton
            cx={eastResizePositionX}
            cy={southResizePositionY}
            data-resize-side={SOUTH_EAST_RESIZE}
            className='cursor-se-resize resize-btn'
            onPointerDown={handleQuadrilateralResize}
          />

          <ResizeShapeButton
            cx={quadrilateral.x}
            cy={middleResizePositionY}
            data-resize-side={WEST_RESIZE}
            className='cursor-w-resize resize-btn'
            onPointerDown={handleQuadrilateralResize}
          />
          <ResizeShapeButton
            cx={eastResizePositionX}
            cy={middleResizePositionY}
            data-resize-side={EAST_RESIZE}
            className='cursor-e-resize resize-btn'
            onPointerDown={handleQuadrilateralResize}
          />
        </g>
      )}
    </g>
  );
}

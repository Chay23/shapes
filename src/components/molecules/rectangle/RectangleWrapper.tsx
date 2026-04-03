import useRectangleResize from '@/hooks/useRectangleResize';
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
import type { s } from '../../../types';
import ResizeShapeButton from '../../atoms/ResizeShapeButton';
import { useIsShapeSelected } from '@/store/selectors';
import ShapeWrapper from '../ShapeWrapper';

type Props = {
  rectangle: s.Rectangle;
  children?: React.ReactNode;
};

export function RectangleWrapper({ rectangle, children }: Props) {
  const isShapeSelected = useIsShapeSelected(rectangle.id);
  const { handleRectangleResize } = useRectangleResize({
    rectangle,
  });

  const middleResizePositionX = rectangle.x + rectangle.width / 2;
  const middleResizePositionY = rectangle.y + rectangle.height / 2;
  const eastResizePositionX = rectangle.x + rectangle.width;
  const southResizePositionY = rectangle.y + rectangle.height;

  return (
    <ShapeWrapper>
      {children}
      {isShapeSelected && (
        <g>
          <ResizeShapeButton
            cx={rectangle.x}
            cy={rectangle.y}
            data-resize-side={NORTH_WEST_RESIZE}
            className='cursor-nw-resize resize-btn'
            onPointerDown={handleRectangleResize}
          />
          <ResizeShapeButton
            cx={middleResizePositionX}
            cy={rectangle.y}
            data-resize-side={NORTH_RESIZE}
            className='cursor-n-resize resize-btn'
            onPointerDown={handleRectangleResize}
          />
          <ResizeShapeButton
            cx={eastResizePositionX}
            cy={rectangle.y}
            data-resize-side={NORTH_EAST_RESIZE}
            className='cursor-ne-resize resize-btn'
            onPointerDown={handleRectangleResize}
          />

          <ResizeShapeButton
            cx={rectangle.x}
            cy={southResizePositionY}
            data-resize-side={SOUTH_WEST_RESIZE}
            className='cursor-sw-resize resize-btn'
            onPointerDown={handleRectangleResize}
          />
          <ResizeShapeButton
            cx={middleResizePositionX}
            cy={southResizePositionY}
            data-resize-side={SOUTH_RESIZE}
            className='cursor-s-resize resize-btn'
            onPointerDown={handleRectangleResize}
          />
          <ResizeShapeButton
            cx={eastResizePositionX}
            cy={southResizePositionY}
            data-resize-side={SOUTH_EAST_RESIZE}
            className='cursor-se-resize resize-btn'
            onPointerDown={handleRectangleResize}
          />

          <ResizeShapeButton
            cx={rectangle.x}
            cy={middleResizePositionY}
            data-resize-side={WEST_RESIZE}
            className='cursor-w-resize resize-btn'
            onPointerDown={handleRectangleResize}
          />
          <ResizeShapeButton
            cx={eastResizePositionX}
            cy={middleResizePositionY}
            data-resize-side={EAST_RESIZE}
            className='cursor-e-resize resize-btn'
            onPointerDown={handleRectangleResize}
          />
        </g>
      )}
    </ShapeWrapper>
  );
}

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
import ShapeWrapper from '../shape-wrapper';
import { useIsShapeSelected } from '@/store/shapes/selectors';
import useShapeRotate from '@/hooks/use-shape-rotate';
import RotateButton from '@/components/atoms/rotate-button';

type Props = {
  rectangle: s.Rectangle;
  children?: React.ReactNode;
};

export function RectangleWrapper({ rectangle, children }: Props) {
  const isShapeSelected = useIsShapeSelected(rectangle.id);
  const { handleRectangleResize } = useRectangleResize({
    rectangle,
  });

  const { handleShapeRotate } = useShapeRotate({
    initialRectangle: rectangle,
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
          <g
            data-keep-selection={true}
            className='cursor-pointer'
            transform={`rotate(${rectangle.rotation} ${rectangle.x + rectangle.width / 2} ${rectangle.y + rectangle.height / 2})`}>
            <RotateButton
              cx={middleResizePositionX}
              cy={middleResizePositionY}
              width={rectangle.width}
              height={rectangle.height}
              onPointerDown={handleShapeRotate}
            />
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
        </g>
      )}
    </ShapeWrapper>
  );
}

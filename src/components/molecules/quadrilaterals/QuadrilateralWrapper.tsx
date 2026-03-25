import type { s } from '../../../types';
import ResizeShapeButton from '../../atoms/ResizeShapeButton';

type Props<T extends s.Rectangle> = {
  rect: T;
  children?: React.ReactNode;
};

export function QuadrilateralWrapper<T extends s.Rectangle>({
  rect,
  children,
}: Props<T>) {
  const northResizeButtonX = parseInt(rect.x) + parseInt(rect.width) / 2;
  const northEastResizeButtonX = parseInt(rect.x) + parseInt(rect.width);
  const northResizeButtonY = parseInt(rect.y);

  const southResizeButtonX = parseInt(rect.x) + parseInt(rect.width) / 2;
  const southEastResizeButtonX = parseInt(rect.x) + parseInt(rect.width);
  const southResizeButtonY = parseInt(rect.y) + parseInt(rect.height);

  const eastResizeButtonX = parseInt(rect.x) + parseInt(rect.width);
  const halfResizeButtonY = parseInt(rect.y) + parseInt(rect.height) / 2;

  return (
    <g>
      {children}
      <g>
        <ResizeShapeButton
          cx={rect.x}
          cy={northResizeButtonY}
          data-resize-side='north-west'
          className='cursor-nw-resize'
        />
        <ResizeShapeButton
          cx={northResizeButtonX}
          cy={northResizeButtonY}
          data-resize-side='north'
          className='cursor-n-resize'
        />
        <ResizeShapeButton
          cx={northEastResizeButtonX}
          cy={northResizeButtonY}
          data-resize-side='north-east'
          className='cursor-ne-resize'
        />

        <ResizeShapeButton
          cx={rect.x}
          cy={southResizeButtonY}
          data-resize-side='south-west'
          className='cursor-sw-resize'
        />
        <ResizeShapeButton
          cx={southResizeButtonX}
          cy={southResizeButtonY}
          data-resize-side='south'
          className='cursor-s-resize'
        />
        <ResizeShapeButton
          cx={southEastResizeButtonX}
          cy={southResizeButtonY}
          data-resize-side='south-east'
          className='cursor-se-resize'
        />

        <ResizeShapeButton
          cx={rect.x}
          cy={halfResizeButtonY}
          data-resize-side='west'
          className='cursor-w-resize'
        />
        <ResizeShapeButton
          cx={eastResizeButtonX}
          cy={halfResizeButtonY}
          data-resize-side='east'
          className='cursor-e-resize'
        />
      </g>
    </g>
  );
}

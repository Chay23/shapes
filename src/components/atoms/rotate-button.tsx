import { ROTATE_BTN_SIZE, ROTATE_BTN_Y_SHIFT } from '@/lib/constants/common';
import {
  getBoundingBoxHeight,
  getBoundingBoxYPoint,
  getBoundingBoxWidth,
  getBoundingBoxXPoint,
} from '@/lib/utils/common';
import type { s } from '@/types';
import { RotateCcw } from 'lucide-react';

type Props = React.SVGProps<SVGCircleElement> & {
  shape: s.Shapes;
};

const BACKGROUND_CIRCLE_Y_SHIFT = 22;

export default function RotateButton(props: Props) {
  const boundingBoxWidth = getBoundingBoxWidth(props.shape);
  const boundingBoxHeight = getBoundingBoxHeight(props.shape);

  const shapeCenterX = getBoundingBoxXPoint(props.shape) + boundingBoxWidth / 2;
  const shapeCenterY =
    getBoundingBoxYPoint(props.shape) + boundingBoxHeight / 2;

  const cx = shapeCenterX || 0;
  const cy = shapeCenterY || 0;
  const shiftY = boundingBoxHeight / 2 || 0;

  return (
    <>
      <circle
        className='cursor-pointer'
        r={ROTATE_BTN_SIZE / 2}
        cx={cx}
        cy={cy - shiftY - BACKGROUND_CIRCLE_Y_SHIFT}
        fill={'transparent'}
        onPointerDown={props.onPointerDown}
      />
      <RotateCcw
        x={cx - ROTATE_BTN_SIZE / 2}
        y={cy - shiftY - ROTATE_BTN_Y_SHIFT}
        strokeWidth={1}
        data-keep-selection={true}
        size={ROTATE_BTN_SIZE}
      />
    </>
  );
}

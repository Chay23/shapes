import { ROTATE_BTN_SIZE, ROTATE_BTN_Y_SHIFT } from '@/lib/constants/common';
import { getShapeBoundingBox } from '@/lib/utils/common';
import type { s } from '@/types';
import { RotateCcw } from 'lucide-react';

type Props = React.SVGProps<SVGCircleElement> & {
  shape: s.Shapes;
};

const BACKGROUND_CIRCLE_Y_SHIFT = 22;

export default function RotateButton(props: Props) {
  const boundingBox = getShapeBoundingBox(props.shape);

  const boundingBoxCenterX = boundingBox.minX + boundingBox.width / 2;
  const boundingBoxCenterY = boundingBox.minY + boundingBox.height / 2;

  const cx = boundingBoxCenterX || 0;
  const cy = boundingBoxCenterY || 0;
  const shiftY = boundingBox.height / 2 || 0;

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

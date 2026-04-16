import { ROTATE_BTN_SIZE, ROTATE_BTN_Y_SHIFT } from '@/lib/constants/common';
import { RotateCcw } from 'lucide-react';

type Props = React.SVGProps<SVGCircleElement> & {
  cx: number;
  cy: number;
  height?: number;
  width?: number;
  r?: number;
};

const BACKGROUND_CIRCLE_Y_SHIFT = 22;

export default function RotateButton(props: Props) {
  const cx = props.cx || 0;
  const cy = props.cy || 0;
  const shiftY = props.height ? props.height / 2 : props.r || 0;

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

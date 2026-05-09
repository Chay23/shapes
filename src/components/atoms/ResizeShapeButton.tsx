import {
  RESIZE_CIRCLE_FILL,
  RESIZE_CIRCLE_R,
  RESIZE_CIRCLE_STROKE_COLOR,
  RESIZE_CIRCLE_STROKE_WIDTH,
} from '../../lib/constants/common';

type Props = Omit<React.SVGAttributes<SVGCircleElement>, 'r' | 'fill'> & {
  'data-resize-side'?: string;
  'data-point-index'?: string;
};

export default function ResizeShapeButton(props: Props) {
  return (
    <circle
      {...props}
      data-keep-selection={true}
      r={RESIZE_CIRCLE_R}
      fill={RESIZE_CIRCLE_FILL}
      stroke={RESIZE_CIRCLE_STROKE_COLOR}
      strokeWidth={RESIZE_CIRCLE_STROKE_WIDTH}></circle>
  );
}

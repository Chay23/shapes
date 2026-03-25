import {
  RESIZE_CIRCLE_FILL,
  RESIZE_CIRCLE_R,
} from '../../lib/constants/common';

type Props = Omit<React.SVGAttributes<SVGCircleElement>, 'r' | 'fill'> & {
  'data-resize-side': string;
};

export default function ResizeShapeButton(props: Props) {
  return (
    <circle {...props} r={RESIZE_CIRCLE_R} fill={RESIZE_CIRCLE_FILL}></circle>
  );
}

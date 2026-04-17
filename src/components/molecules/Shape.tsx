import { TYPE_ELLIPSE, TYPE_RECTANGLE } from '../../lib/constants/common';
import type { s } from '../../types';
import Rectangle from './rectangle/Rectangle';
import Ellipse from './ellipse/Ellipse';
import ShapeWrapper from './shape-wrapper';

type Props = {
  shape: s.Shapes;
};

export function Shape({ shape }: Props) {
  switch (shape.type) {
    case TYPE_RECTANGLE:
      return (
        <ShapeWrapper shape={shape}>
          <Rectangle rect={shape} />
        </ShapeWrapper>
      );
    case TYPE_ELLIPSE:
      return (
        <ShapeWrapper shape={shape}>
          <Ellipse ellipse={shape} />
        </ShapeWrapper>
      );
    default:
      return null;
  }
}

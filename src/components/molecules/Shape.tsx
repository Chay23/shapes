import { TYPE_ELLIPSE, TYPE_RECTANGLE } from '../../lib/constants/common';
import type { s } from '../../types';
import RectangleWrapper from './rectangle/RectangleWrapper';
import Rectangle from './rectangle/Rectangle';
import EllipseWrapper from './ellipse/EllipseWrapper';
import Ellipse from './ellipse/Ellipse';

type Props = {
  shape: s.Shapes;
};

export function Shape({ shape }: Props) {
  switch (shape.type) {
    case TYPE_RECTANGLE:
      return (
        <RectangleWrapper rectangle={shape}>
          <Rectangle rect={shape} />
        </RectangleWrapper>
      );
    case TYPE_ELLIPSE:
      return (
        <EllipseWrapper>
          <Ellipse ellipse={shape} />
        </EllipseWrapper>
      );
    default:
      return null;
  }
}

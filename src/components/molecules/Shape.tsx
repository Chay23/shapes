import {
  TYPE_ELLIPSE,
  TYPE_RECTANGLE,
  TYPE_TRIANGLE,
} from '../../lib/constants/common';
import type { s } from '../../types';
import Ellipse from './ellipse/ellipse';
import Rectangle from './rectangle/Rectangle';
import ShapeWrapper from './shape-wrapper';
import Triangle from './triangle/triangle';

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

    case TYPE_TRIANGLE: {
      return <Triangle triangle={shape} />;
    }
    default:
      return null;
  }
}

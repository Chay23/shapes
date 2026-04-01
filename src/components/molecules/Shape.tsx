import { TYPE_RECTANGLE } from '../../lib/constants/common';
import type { s } from '../../types';
import { RectangleWrapper } from './rectangle/RectangleWrapper';
import Rectangle from './rectangle/Rectangle';

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
    default:
      return null;
  }
}

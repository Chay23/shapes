import type { s } from '../../types';
import { QuadrilateralWrapper } from './quadrilaterals/QuadrilateralWrapper';
import Rectangle from './quadrilaterals/Rectangle';

type Props = {
  shape: s.Shapes;
};

export function Shape({ shape }: Props) {
  switch (shape.type) {
    case 'rectangle':
      return (
        <QuadrilateralWrapper>
          <Rectangle rect={shape} />
        </QuadrilateralWrapper>
      );
    default:
      return null;
  }
}

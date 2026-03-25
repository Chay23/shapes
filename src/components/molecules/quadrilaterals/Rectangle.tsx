import type { s } from '../../../types';
import { useShapeTranslate } from '../../../hooks/useShapeTranslate';

type Props = {
  rect: s.Rectangle;
};

export default function Rectangle({ rect }: Props) {
  const { handlePointerDown } = useShapeTranslate(rect);

  return (
    <g onPointerDown={handlePointerDown}>
      <rect
        className='cursor-pointer'
        x={rect.x}
        y={rect.y}
        width={rect.width}
        height={rect.height}
        fill={rect.fill}
        stroke={rect.stroke}
      ></rect>
    </g>
  );
}

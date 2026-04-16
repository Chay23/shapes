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
        data-keep-selection={true}
        className='cursor-pointer'
        x={rect.x}
        y={rect.y}
        width={rect.width}
        height={rect.height}
        fill={rect.fill}
        stroke={rect.stroke}
        strokeWidth={rect.strokeWidth}
        transform={`rotate(${rect.rotation} ${rect.x + rect.width / 2} ${rect.y + rect.height / 2})`}></rect>
    </g>
  );
}

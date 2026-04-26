import type { s } from '../../../types';
import { useShapeTranslate } from '../../../hooks/useShapeTranslate';

type Props = {
  rect: s.Rectangle;
};

export default function Rectangle({ rect }: Props) {
  const { handleShapeTranslate } = useShapeTranslate(rect);

  return (
    <g onPointerDown={handleShapeTranslate}>
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
      />
    </g>
  );
}

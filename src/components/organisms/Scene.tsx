import { useShapes } from '../../store/shapes';
import { Shape } from '../molecules/Shape';

export default function Scene() {
  const shapes = useShapes((state) => state.shapes);
  return (
    <div id='scene' className='h-full w-full'>
      <svg
        style={{
          left: '0px',
          top: '0px',
          width: '100%',
          height: '100%',
          display: 'block',
          position: 'absolute',
        }}
      >
        <g>
          {[...shapes.entries()].map(([id, shape]) => (
            <Shape key={id} shape={shape} />
          ))}
        </g>
      </svg>
    </div>
  );
}

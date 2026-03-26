import { useEffect } from 'react';
import { useShapes } from '../../store/shapes';
import { Shape } from '../molecules/Shape';

export default function Scene() {
  const shapes = useShapes((state) => state.shapes);
  const deselectShapes = useShapes((state) => state.deselectShapes);

  useEffect(() => {
    const handleDeselectShape = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }
      const keepSelection = event.target.closest('[data-keep-selection]');

      if (!keepSelection) {
        deselectShapes();
      }
    };

    const sceneElement = document.getElementById('scene');
    const controller = new AbortController();

    if (sceneElement) {
      document.addEventListener('pointerdown', handleDeselectShape, {
        signal: controller.signal,
      });
    }

    return () => {
      if (sceneElement) {
        controller.abort();
      }
    };
  }, []);

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

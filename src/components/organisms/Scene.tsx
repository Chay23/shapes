import { useEffect } from 'react';
import { useShapes } from '../../store/shapes/shapes';
import { Shape } from '../molecules/Shape';
import { useCloseContextMenu } from '@/store/contextMenu/selectors';

export default function Scene() {
  const shapes = useShapes((state) => state.shapes);
  const deselectShapes = useShapes((state) => state.deselectShapes);
  const closeContextMenu = useCloseContextMenu();

  useEffect(() => {
    const handleDeselectShape = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }
      const keepSelection = event.target.closest('[data-keep-selection]');
      const popoverIsOpened = document.querySelector(
        '[data-radix-popper-content-wrapper]',
      );

      if (!keepSelection && !popoverIsOpened) {
        deselectShapes();
        closeContextMenu();
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
    <div id='scene' className='h-full w-full bg-background'>
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

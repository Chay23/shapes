import { useShapes } from '../../../store/shapes/shapes';
import type { s } from '@/types';
import { useSelectedShape } from '@/store/shapes/selectors';
import NumberEditorInput from '@/components/molecules/editor/NumberEditorInput';

export default function DashedStrokeEditor() {
  const selectedShape = useSelectedShape() as s.Rectangle;
  const updateShape = useShapes(state => state.updateShape);

  const applySizeChange = (value: number, property: keyof s.DashedStroke) => {
    updateShape({
      ...selectedShape,
      strokeDasharray: { ...selectedShape.strokeDasharray, [property]: value },
    });
  };

  return (
    <div className='flex gap-3'>
      <NumberEditorInput
        inputId='stroke-dash'
        value={selectedShape.strokeDasharray?.dash ?? 0}
        label='Dash'
        fieldClassName='flex-1'
        onCommit={value => applySizeChange(value, 'dash')}
      />
      <NumberEditorInput
        inputId='stroke-gap'
        value={selectedShape.strokeDasharray?.gap ?? 0}
        label='Gap'
        fieldClassName='flex-1'
        onCommit={value => applySizeChange(value, 'gap')}
      />
    </div>
  );
}

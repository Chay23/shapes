import { useShapes } from '../../../store/shapes/shapes';
import type { s } from '@/types';
import { useSelectedShape } from '@/store/shapes/selectors';
import { getResizedShape, getShapeBoundingBoxProps } from '@/lib/utils/common';
import NumberEditorInput from '@/components/molecules/editor/NumberEditorInput';

export default function ShapeSizeEditor() {
  const selectedShape = useSelectedShape() as s.Rectangle;
  const updateShape = useShapes(state => state.updateShape);
  const boundingBox = getShapeBoundingBoxProps(selectedShape);

  const applySizeChange = (value: number, dimension: 'width' | 'height') => {
    const resizeSide: s.DirectionKey = dimension === 'width' ? 'e' : 's';
    const dx = dimension === 'width' ? value - boundingBox.width : 0;
    const dy = dimension === 'height' ? value - boundingBox.height : 0;
    const updatedShape = getResizedShape(selectedShape, dx, dy, resizeSide, dy);
    updateShape(updatedShape);
  };

  return (
    <div className='flex gap-3'>
      <NumberEditorInput
        inputId='shape-height'
        value={boundingBox.height}
        label='Height'
        fieldClassName='flex-1'
        onCommit={value => applySizeChange(value, 'height')}
      />
      <NumberEditorInput
        inputId='shape-width'
        value={boundingBox.width}
        label='Width'
        fieldClassName='flex-1'
        onCommit={value => applySizeChange(value, 'width')}
      />
    </div>
  );
}

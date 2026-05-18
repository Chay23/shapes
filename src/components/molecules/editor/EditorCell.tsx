import type { s, ui } from '@/types';
import { useSelectedShape } from '@/store/shapes/selectors';
import NumberEditorInput from './NumberEditorInput';
import { useShapes } from '@/store/shapes/shapes';
import ColorEditorInput from './ColorEditorInput';
import SliderEditorInput from './slider-editor-input';

type Props = ui.EditorCell;

export default function EditorCell(cellProps: Props) {
  const selectedShape = useSelectedShape() as s.Rectangle;
  const updateShape = useShapes(state => state.updateShape);

  const handleInputCommit = (value: number | number[] | string) => {
    if (cellProps.type !== 'custom')
      updateShape({ ...selectedShape, [cellProps.shapePropName]: value });
  };

  switch (cellProps.type) {
    case 'numeric': {
      return (
        <NumberEditorInput
          {...cellProps.props}
          shapePropName={cellProps.shapePropName}
          onCommit={handleInputCommit}
        />
      );
    }
    case 'color-picker': {
      return (
        <ColorEditorInput
          {...cellProps.props}
          shapePropName={cellProps.shapePropName}
          onCommit={handleInputCommit}
        />
      );
    }
    case 'slider': {
      return (
        <SliderEditorInput
          {...cellProps.props}
          shapePropsName={cellProps.shapePropName}
          onCommit={handleInputCommit}
        />
      );
    }
    case 'custom': {
      const Component = cellProps.component;
      return <Component />;
    }
  }
}

import SizeEditor from './RectangleSizeEditor';
import StrokeWidthEditor from './StrokeWidthEditor';
import FillColorEditor from './FillColorEditor';

export default function RectangleEditor() {
  return (
    <section className='flex flex-col gap-2'>
      <h4>Rectangle</h4>
      <SizeEditor />
      <StrokeWidthEditor />
      <FillColorEditor />
    </section>
  );
}

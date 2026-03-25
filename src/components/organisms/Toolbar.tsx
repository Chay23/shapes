import {
  TYPE_CIRCLE,
  TYPE_ELLIPSE,
  TYPE_SQUARE,
  TYPE_TRIANGLE,
} from "../../lib/constants/common";
import { ShapeTypeButton } from "../atoms/ShapeTypeButton";

export default function Toolbar() {
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 bg-surface z-999">
      <div className="p-3 rounded-xl bg-gray-100">
        <div className="grid grid-cols-4 gap-2">
          <ShapeTypeButton data-type={TYPE_SQUARE}>Square</ShapeTypeButton>
          <ShapeTypeButton data-type={TYPE_TRIANGLE}>Triangle</ShapeTypeButton>
          <ShapeTypeButton data-type={TYPE_CIRCLE}>Circle</ShapeTypeButton>
          <ShapeTypeButton data-type={TYPE_ELLIPSE}>Ellipse</ShapeTypeButton>
        </div>
      </div>
    </div>
  );
}

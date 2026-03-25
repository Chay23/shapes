type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  "data-type": string;
};

export function ShapeTypeButton(props: Props) {
  return (
    <button {...props} className={`${props.className ?? ""}cursor-pointer`}>
      {props.children}
    </button>
  );
}

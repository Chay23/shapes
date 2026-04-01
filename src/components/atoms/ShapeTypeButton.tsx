type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  'data-type'?: string;
  active?: boolean;
};

export function ShapeTypeButton(props: Props) {
  return (
    <button
      {...props}
      className={`${props.className ?? ' '}${props.active ? 'bg-primary ' : 'bg-transparent '}cursor-pointer p-1.5 rounded-md hover:bg-hover`}>
      {props.children}
    </button>
  );
}

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Surface(props: Props) {
  const { className, ...rest } = props;
  return (
    <div
      data-keep-selection={true}
      className={`bg-card rounded-lg z-999 ${className}`}
      {...rest}>
      {props.children}
    </div>
  );
}

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export default function EditorCell({ title, children }: Props) {
  return (
    <article>
      {typeof title === 'string' ? <h5>{title}</h5> : title}
      {children}
    </article>
  );
}

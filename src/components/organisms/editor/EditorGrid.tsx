type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export function EditorGrid({ title, children }: Props) {
  return (
    <section className='flex flex-col gap-2'>
      {typeof title === 'string' ? <h4>{title}</h4> : title}
      {children}
    </section>
  );
}

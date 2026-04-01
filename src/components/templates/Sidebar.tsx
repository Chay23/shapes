type Props = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: Props) {
  return (
    <section
      data-keep-selection={true}
      id='sidebar-edit'
      className='absolute right-3.5 h-[96.7%] w-55 bg-card rounded-xl my-3.5 p-3 z-999 shadow-md'
    >
      {children}
    </section>
  );
}

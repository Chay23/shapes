import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import SidebarContent from '../organisms/SidebarContent';
import BottomToolbar from '../organisms/bottom-toolbar';

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className='h-screen'>
      <BottomToolbar />
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      {children}
    </main>
  );
}

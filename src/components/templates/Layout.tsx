import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import SidebarContent from '../organisms/SidebarContent';
import BottomToolbar from '../organisms/bottom-toolbar';
import BottomLeftToolbar from '../organisms/bottom-left-toolbar';

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className='h-screen'>
      <BottomLeftToolbar />
      <BottomToolbar />
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      {children}
    </main>
  );
}

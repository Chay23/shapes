import type { ReactNode } from 'react';
import Toolbar from '../organisms/Toolbar';
import Sidebar from './Sidebar';
import ShapeEditor from '../organisms/editor/ShapeEditor';
import SidebarContent from '../organisms/SidebarContent';

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className='h-screen'>
      <Toolbar />
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      {children}
    </main>
  );
}

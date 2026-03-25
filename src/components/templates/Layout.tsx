import type { ReactNode } from 'react';
import Toolbar from '../organisms/Toolbar';

type Props = {
	children?: ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<main className='h-screen'>
			<Toolbar />
			{children}
		</main>
	);
}

import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function EllipseWrapper({ children }: Props) {
  return children;
}

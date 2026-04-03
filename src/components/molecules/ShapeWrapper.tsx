import useShapeDelete from '@/hooks/useShapeDelete';

type Props = {
  children: React.ReactNode;
};

export default function ShapeWrapper({ children }: Props) {
  useShapeDelete();

  return <g>{children}</g>;
}

import { Moon, Sun } from 'lucide-react';
import Surface from '../atoms/Surface';
import { useTheme } from '@/hooks/use-theme';
import { UI_THEME_DARK, UI_THEME_LIGHT } from '@/lib/constants/common';

export default function BottomLeftToolbar() {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === UI_THEME_LIGHT ? UI_THEME_DARK : UI_THEME_LIGHT);
  };

  return (
    <Surface
      onPointerDown={handleToggleTheme}
      className='fixed bottom-3 left-3 py-1.5 px-4 h-12.75 flex items-center justify-center cursor-pointer shadow-md'>
      <div>
        {theme === UI_THEME_LIGHT ? (
          <Moon strokeWidth={1.5} />
        ) : (
          <Sun strokeWidth={1.5} />
        )}
      </div>
    </Surface>
  );
}

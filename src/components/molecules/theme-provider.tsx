import {
  STORAGE_UI_THEME_KEY,
  UI_THEME_DARK,
  UI_THEME_LIGHT,
  UI_THEME_SYSTEM,
} from '@/lib/constants/common';
import { ThemeProviderContext } from '@/store/theme';
import type { ui } from '@/types';
import { useEffect, useState } from 'react';

export function ThemeProvider({
  children,
  defaultTheme = UI_THEME_SYSTEM,
  storageKey = STORAGE_UI_THEME_KEY,
  ...props
}: ui.ThemeProviderProps) {
  const [theme, setTheme] = useState<ui.Theme>(
    () => (localStorage.getItem(storageKey) as ui.Theme) || defaultTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(UI_THEME_LIGHT, UI_THEME_DARK);

    if (theme === UI_THEME_SYSTEM) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? UI_THEME_DARK
        : UI_THEME_LIGHT;

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: ui.Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

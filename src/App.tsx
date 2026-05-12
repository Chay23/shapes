import { TooltipProvider } from './components/atoms/tooltip';
import { ThemeProvider } from './components/molecules/theme-provider';
import Scene from './components/organisms/Scene';
import Layout from './components/templates/Layout';
import { STORAGE_UI_THEME_KEY, UI_THEME_DARK } from './lib/constants/common';

export default function App() {
  return (
    <ThemeProvider
      defaultTheme={UI_THEME_DARK}
      storageKey={STORAGE_UI_THEME_KEY}>
      <TooltipProvider>
        <Layout>
          <Scene />
        </Layout>
      </TooltipProvider>
    </ThemeProvider>
  );
}

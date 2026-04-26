import { ThemeProvider } from './components/molecules/theme-provider';
import Scene from './components/organisms/Scene';
import Layout from './components/templates/Layout';

export default function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Layout>
        <Scene />
      </Layout>
    </ThemeProvider>
  );
}

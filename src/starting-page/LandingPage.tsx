import * as React from 'react';
import {PaletteMode} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AppAppBar from './components/AppAppBar';
import Footer from './components/Footer';
import MainContent from "./components/MainContent";

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode}/>
        <MainContent/>
        <Footer/>
    </ThemeProvider>
  );
}

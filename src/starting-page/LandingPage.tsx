import * as React from 'react';
import {PaletteMode} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AppAppBar from './components/AppAppBar';
import MedClinicCaption from './components/MedClinicCaption';
import Footer from './components/Footer';
import MedClinicText from "./components/MedClinicText";

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
        <MedClinicCaption/>
        <Box sx={{bgcolor: 'background.default'}}>
            <MedClinicText />
            <Footer/>
        </Box>
    </ThemeProvider>
  );
}

import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import MedClinicText from "./components/MedClinicText";


export default function LandingPage() {
    const [mode, setMode] = React.useState('light');
    const defaultTheme = createTheme({palette: {mode}});

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <AppAppBar mode={mode} toggleColorMode={toggleColorMode}/>
            <Hero/>
            <Box sx={{bgcolor: 'background.default'}}>
                <MedClinicText/>
                <Footer/>
            </Box>
        </ThemeProvider>
    );
}

import {Outlet} from "react-router-dom";
import {Footer} from "../layout/Footer";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import * as React from "react";
import {Header} from "../layout/Header";

export const ContainerPage = () => {
    const [mode, setMode] = React.useState('light');
    const defaultTheme = createTheme({palette: {mode}});

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Header mode={mode} toggleColorMode={toggleColorMode}/>
            <Outlet/>
            <Footer/>
        </ThemeProvider>
    );
}
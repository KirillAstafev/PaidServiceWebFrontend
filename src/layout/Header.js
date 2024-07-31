import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import {CustomAppBar} from "../components/header/CustomAppBar";

export const Header = ({mode, toggleColorMode}) => {
    return (
        <>
            <CssBaseline/>
            <CustomAppBar mode={mode} toggleColorMode={toggleColorMode}/>
        </>
    );
}
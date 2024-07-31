import * as React from "react";
import Box from "@mui/material/Box";
import {ToggleColorMode} from "./ToggleColorMode";

export const ToggleColorMenu = ({mode, toggleColorMode}) => {
    return (
        <Box
            sx={{
                display: {xs: 'none', md: 'flex'},
                gap: 0.5,
                alignItems: 'center',
            }}>
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode}/>
        </Box>
    );
}
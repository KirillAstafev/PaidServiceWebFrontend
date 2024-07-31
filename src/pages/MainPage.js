import {MainText} from "../components/content/main/MainText";
import Box from "@mui/material/Box";
import * as React from "react";
import {MainCaption} from "../components/content/main/MainCaption";

export const MainPage = () => {
    return (
        <Box sx={{bgcolor: 'background.default'}}>
            <MainCaption/>
            <MainText/>
        </Box>
    );
}
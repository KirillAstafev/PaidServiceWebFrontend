import MainCaption from "./MainCaption";
import MainText from "./MainText";
import Box from "@mui/material/Box";
import * as React from "react";

export default function MainContent() {
    return (
        <Box sx={{bgcolor: 'background.default'}}>
            <MainCaption/>
            <MainText/>
        </Box>
    );
}
import MedClinicCaption from "./MedClinicCaption";
import MedClinicText from "./MedClinicText";
import Box from "@mui/material/Box";
import * as React from "react";

export default function MainContent() {
    return (
        <Box sx={{bgcolor: 'background.default'}}>
            <MedClinicCaption/>
            <MedClinicText/>
        </Box>
    );
}
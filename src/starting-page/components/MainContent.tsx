import Box from "@mui/material/Box";
import MedClinicCaption from "./MedClinicCaption";
import MedClinicText from "./MedClinicText";

export default function MainContent() {
    return (
        <Box sx={{bgcolor: 'background.default'}}>
            <MedClinicCaption/>
            <MedClinicText/>
        </Box>
    );
}
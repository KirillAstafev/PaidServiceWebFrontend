import Box from "@mui/material/Box";
import MainCaption from "./MainCaption";
import MainText from "./MainText";

export default function MainContent() {
    return (
        <Box sx={{bgcolor: 'background.default'}}>
            <MainCaption/>
            <MainText/>
        </Box>
    );
}
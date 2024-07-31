import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import {CustomToolbar} from "./CustomToolbar";

export const CustomAppBar = ({mode, toggleColorMode}) => {
    return (
        <AppBar
            sx={{
                position: 'fixed',
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                mt: 2,
            }}>
            <Container maxWidth='lg'>
                <CustomToolbar mode={mode} toggleColorMode={toggleColorMode}/>
            </Container>
        </AppBar>
    );
}
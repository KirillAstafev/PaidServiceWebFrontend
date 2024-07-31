import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Copyright} from "../components/footer/Copyright";
import {License} from "../components/footer/License";

export const Footer = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: {xs: 4, sm: 8},
                py: {xs: 8, sm: 10},
                textAlign: {sm: 'center', md: 'left'}
            }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: {xs: 4, sm: 8},
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider'
                }}>
                <div>
                    <Copyright/>
                    <License/>
                </div>
            </Box>
        </Container>
    );
}
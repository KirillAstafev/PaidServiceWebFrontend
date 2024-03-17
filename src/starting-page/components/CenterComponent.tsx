import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function CenterComponent() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: {xs: 4, sm: 8},
                py: {xs: 8, sm: 10},
                textAlign: {sm: 'center', md: 'left'},
            }}>
            <Box>
                <Typography variant={'body1'}>
                    Box 1
                </Typography>
            </Box>
            <Box>
                <Typography variant={'body1'}>
                    Box 2
                </Typography>
            </Box>
            <Box>
                <Typography variant={'body1'}>
                    Box 3
                </Typography>
            </Box>
        </Container>
    )
}
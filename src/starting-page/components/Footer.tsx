import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            {'Copyright © '}
            <Link href="https://mui.com/">MedClinic&nbsp;</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

function License() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            Лицензия ЛО-01-01-001001 от 01.02.2024
            Выдана Управлением здравоохранения Липецкой области
        </Typography>
    )
}

export default function Footer() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: {xs: 4, sm: 8},
                py: {xs: 8, sm: 10},
                textAlign: {sm: 'center', md: 'left'},
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: {xs: 4, sm: 8},
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <div>
                    <Copyright/>
                    <License/>
                </div>
            </Box>
        </Container>
    );
}

import * as React from 'react';
import {alpha} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import {Title} from "../../shared/Title";

export const MainCaption = () => {
    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: '100%',
                backgroundImage:
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                        : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
                backgroundSize: '100% 20%',
                backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: {xs: 14, sm: 20},
                    pb: {xs: 8, sm: 12},
                }}
            >
                <Stack spacing={2} useFlexGap sx={{width: {xs: '100%', sm: '70%'}}}>
                    <Title title={'Стоматологическая клиника MedClinic -\n' +
                        '                        стоматология в Липецке'}/>

                    <Typography variant="h6" textAlign="center" color="text.secondary">
                        Не теряйте время - записаться на приём можно прямо сейчас
                    </Typography>
                    <Stack
                        direction={{xs: 'column', sm: 'row'}}
                        alignSelf="center"
                        spacing={1}
                        useFlexGap
                        sx={{pt: 2, width: {xs: '100%', sm: 'auto'}}}
                    >
                        <Button variant="contained">
                            <Link to={"/appointments"} className={"App-link"}>
                                Записаться на приём
                            </Link>
                        </Button>
                    </Stack>
                    <Typography variant="caption" textAlign="center" sx={{opacity: 0.8}}>
                        Пользуясь услугами нашей клиники, вы соглашаетесь на использование Ваших персональных данных
                        согласно&nbsp;
                        <Link to={"/docs"} className={"App-link"}>
                            Нормативным документам
                        </Link>
                        .
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}

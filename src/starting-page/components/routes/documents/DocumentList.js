import {alpha} from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";

export default function DocumentList() {
    const openPdfInNewTab = (url) => {
        window.open(url, "_blank");
    };

    return (
        <Box
            sx={(theme) => ({
                width: '100%',
                backgroundImage:
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                        : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
                backgroundSize: '100% 50%',
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
                <Stack spacing={3} useFlexGap sx={{width: {xs: '100%', sm: '80%'}}}>
                    <Typography
                        variant="h4"
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignSelf: 'center',
                            textAlign: 'center',
                        }}>
                        Федеральные нормативные акты
                    </Typography>
                    <Stack spacing={1} useFlexGap
                           sx={{
                               width: {xs: '100%', sm: '100%'},
                               borderBottom: '3px solid rgba(212, 212, 212, 0.9)'
                           }}>
                        <Typography
                            variant="body-2"
                            sx={{
                                display: 'flex',
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'center',
                            }}
                        >
                            «Об утверждении правил предоставления медицинскими организациями платных медицинских услуг,
                            внесении изменений в некоторые акты правительства Российской Федерации
                            и признании утратившим силу постановления правительства Российской Федерации
                            от 4 октября 2012 г. N 1006»
                        </Typography>
                        <Button
                            className={"App-link"}
                            onClick={() => openPdfInNewTab("/docs/postanovlenie-736-11052023.pdf")}>
                            Открыть документ
                        </Button>
                    </Stack>
                    <Stack spacing={1} useFlexGap
                           sx={{
                               width: {xs: '100%', sm: '100%'},
                               borderBottom: '3px solid rgba(212, 212, 212, 0.9)'
                           }}>
                        <Typography
                            variant="body-2"
                            sx={{
                                display: 'flex',
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'left',
                            }}
                        >
                            «О защите прав потребителей»
                        </Typography>
                        <Button
                            className={"App-link"}
                            onClick={() => openPdfInNewTab("/docs/zakon-23001-I.pdf")}>
                            Открыть документ
                        </Button>
                    </Stack>
                    <Stack spacing={1} useFlexGap
                           sx={{
                               width: {xs: '100%', sm: '100%'},
                               borderBottom: '3px solid rgba(212, 212, 212, 0.9)'
                           }}>
                        <Typography
                            variant="body-2"
                            sx={{
                                display: 'flex',
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'left',
                            }}
                        >
                            «Об утверждении Порядка оказания медицинской помощи
                            взрослому населению при стоматологических заболеваниях»
                        </Typography>
                        <Button
                            className={"App-link"}
                            onClick={() => openPdfInNewTab("/docs/prikaz-1496-ministerstva-zdravoohranenia.pdf")}>
                            Открыть документ
                        </Button>
                    </Stack>
                    <Stack spacing={1} useFlexGap
                           sx={{
                               width: {xs: '100%', sm: '100%'},
                               borderBottom: '3px solid rgba(212, 212, 212, 0.9)'
                           }}>
                        <Typography
                            variant="body-2"
                            sx={{
                                display: 'flex',
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'left',
                            }}
                        >
                            «Об утверждении Порядка оказания медицинской помощи
                            детям со стоматологическими заболеваниями»
                        </Typography>
                        <Button
                            className={"App-link"}
                            onClick={() => openPdfInNewTab("/docs/prikaz-910-ministerstva-zdravoohranenia.pdf")}>
                            Открыть документ
                        </Button>
                    </Stack>
                    <Stack spacing={1} useFlexGap
                           sx={{
                               width: {xs: '100%', sm: '100%'},
                               borderBottom: '3px solid rgba(212, 212, 212, 0.9)'
                           }}>
                        <Typography
                            variant="body-2"
                            sx={{
                                display: 'flex',
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'left',
                            }}
                        >
                            «Об основах охраны здоровья граждан в Российской Федерации»
                        </Typography>
                        <Button
                            className={"App-link"}
                            onClick={() => openPdfInNewTab("/docs/FZ-323.pdf")}>
                            Открыть документ
                        </Button>
                    </Stack>
                    <Stack spacing={1} useFlexGap
                           sx={{
                               width: {xs: '100%', sm: '100%'},
                               borderBottom: '3px solid rgba(212, 212, 212, 0.9)'
                           }}>
                        <Typography
                            variant="body-2"
                            sx={{
                                display: 'flex',
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'left',
                            }}
                        >
                            «Об охране здоровья граждан от воздействия окружающего
                            табачного дыма и последствий потребления табака»
                        </Typography>
                        <Button
                            className={"App-link"}
                            onClick={() => openPdfInNewTab("/docs/FZ-15.pdf")}>
                            Открыть документ
                        </Button>
                    </Stack>
                    <Stack spacing={1} useFlexGap
                           sx={{
                               width: {xs: '100%', sm: '100%'},
                               borderBottom: '3px solid rgba(212, 212, 212, 0.9)'
                           }}>
                        <Typography
                            variant="body-2"
                            sx={{
                                display: 'flex',
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'left',
                            }}
                        >
                            «Об обязательном медицинском страховании в Российской Федерации»
                        </Typography>
                        <Button
                            className={"App-link"}
                            onClick={() => openPdfInNewTab("/docs/FZ-326.pdf")}>
                            Открыть документ
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
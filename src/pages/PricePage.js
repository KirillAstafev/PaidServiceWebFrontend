import {useServices} from "../hooks/price/PricePage.hooks";
import {alpha} from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {PriceTable} from "../components/content/price/PriceTable";
import {Title} from "../components/shared/Title";

export const PricePage = () => {
    const [services, setServices] = useServices();

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
                <Stack spacing={2} useFlexGap sx={{width: {xs: '100%', sm: '80%'}}}>
                    <Title title={'Прейскурант цен на стоматологические услуги'}/>
                    <PriceTable services={services}/>
                </Stack>
            </Container>
        </Box>
    );
}
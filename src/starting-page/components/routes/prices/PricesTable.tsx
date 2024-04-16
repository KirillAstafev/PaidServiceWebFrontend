import Box from "@mui/material/Box";
import {DataGrid} from "@mui/x-data-grid";
import {alpha} from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function PricesTable() {
    const prices = [
        {id: 1, serviceName: 'service1', price: 500},
        {id: 2, serviceName: 'service2', price: 1000},
        {id: 3, serviceName: 'service3', price: 800}
    ];

    const columns = [
        {field: 'serviceName', headerName: 'Мед.услуга', width: 400},
        {field: 'price', headerName: 'Цена (руб.)', width: 100}
    ];

    return (
        <Box
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
                    <Typography
                        component="h3"
                        variant="h3"
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignSelf: 'center',
                            textAlign: 'center',
                        }}
                    >
                        Прейскурант цен на стоматологические услуги
                    </Typography>
                    <DataGrid
                        columns={columns}
                        rows={prices}
                        hideFooterSelectedRowCount={true}
                    />
                </Stack>
            </Container>
        </Box>
    );
}
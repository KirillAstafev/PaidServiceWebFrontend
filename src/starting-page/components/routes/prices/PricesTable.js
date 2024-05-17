import Box from "@mui/material/Box";
import {DataGrid} from "@mui/x-data-grid";
import {alpha} from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useEffect, useState} from "react";

export default function PricesTable() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = () => {
        fetch('http://localhost:8080/paid-services/services')
            .then(response => response.json())
            .then(data => setServices(data));
    };

    const columns = [
        {field: 'name', headerName: 'Мед.услуга', width: 600, headerAlign: 'center', align: 'center'},
        {field: 'price', headerName: 'Цена (руб.)', width: 300, headerAlign: 'center', align: 'center'}
    ];

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
                        rows={services}
                        hideFooter={true}
                    />
                </Stack>
            </Container>
        </Box>
    );
}
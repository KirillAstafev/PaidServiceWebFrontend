import * as React from 'react';
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Autocomplete} from "@mui/material";

export default function AppointmentForm() {
    const [services, setServices] = useState([]);
    const [staffs, setStaffs] = useState([]);

    useEffect(() => {
        loadServices();
        loadStaffs();
    }, []);

    const loadServices = () => {
        fetch('http://localhost:8080/paid-services/services')
            .then(response => response.json())
            .then(data => setServices(data));
    };

    const loadStaffs = () => {
        fetch('http://localhost:8080/paid-services/staffs')
            .then(response => response.json())
            .then(data => setStaffs(data));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    };

    return (
        <Container maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Заполните необходимую информацию
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="Имя"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="middleName"
                                label="Отчество (при наличии)"
                                name="middleName"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Фамилия"
                                name="lastName"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="snils"
                                label="СНИЛС"
                                name="snils"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="phoneNumber"
                                label="Номер телефона"
                                id="phoneNumber"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                disablePortal
                                fullWidth
                                id="medicalService"
                                options={services}
                                getOptionLabel={option => option.name}
                                renderInput={(params) => <TextField {...params} label="Мед.услуга"/>}
                                renderOption={(props, option) => (
                                    <Box component="li" {...props}>
                                        {`${option.name} (${option.price} р.)`}
                                    </Box>
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                disablePortal
                                fullWidth
                                id="staff"
                                options={staffs}
                                getOptionLabel={option => {
                                    return `${option.person.lastName} ${option.person.firstName[0]}.${option.person.middleName[0] ?? ""} (${option.specialities[0].name})`;
                                }}
                                renderInput={(params) => <TextField {...params} label="Врач"/>}
                                renderOption={(props, option) => (
                                    <Box component="li" {...props}>
                                        {`${option.person.lastName} ${option.person.firstName} ${option.person.middleName ?? ""} 
                                        (${option.specialities[0].name})`
                                        }
                                    </Box>
                                )}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Записаться
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
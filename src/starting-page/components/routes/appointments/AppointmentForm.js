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
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import axios from "axios";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

export function AppointmentForm() {
    const [services, setServices] = useState([]);
    const [staffs, setStaffs] = useState([]);

    const [patientFirstName, setPatientFirstName] = useState('');
    const [patientMiddleName, setPatientMiddleName] = useState('');
    const [patientLastName, setPatientLastName] = useState('');
    const [snils, setSnils] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [staff, setStaff] = useState(null);
    const [medicalService, setMedicalService] = useState(null);
    const [dateTime, setDateTime] = useState(null);

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

    async function handleSubmit() {
        const newVisitation = {
            id: 0,
            patient: {
                id: 0,
                firstName: patientFirstName,
                middleName: patientMiddleName,
                lastName: patientLastName,
                snils: snils,
                phoneNumber: phoneNumber
            },
            staff: staff,
            medicalService: medicalService,
            dateTime: dateTime
        };

        try {
            const patientDataResponse = await axios
                .get(`http://localhost:8080/paid-services/persons?snils=${newVisitation.patient.snils}`);

            newVisitation.patient = {...patientDataResponse.data};
            newVisitation.patient.id = patientDataResponse.data.id;
        } catch (error) {
            const newPatientResponse = await axios
                .post('http://localhost:8080/paid-services/persons', newVisitation.patient);

            newVisitation.patient.id = newPatientResponse.data;
        } finally {
            axios.post('http://localhost:8080/paid-services/visitations', newVisitation)
                .then(response => console.log(response.data));
        }
    }

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
                                onChange={(event) => {
                                    setPatientFirstName(event.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="middleName"
                                label="Отчество (при наличии)"
                                name="middleName"
                                onChange={(event) => {
                                    setPatientMiddleName(event.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Фамилия"
                                name="lastName"
                                onChange={(event) => {
                                    setPatientLastName(event.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="snils"
                                label="СНИЛС"
                                name="snils"
                                onChange={(event) => {
                                    setSnils(event.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="phoneNumber"
                                label="Номер телефона"
                                id="phoneNumber"
                                onChange={(event) => {
                                    setPhoneNumber(event.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                disablePortal
                                fullWidth
                                id="medicalService"
                                onChange={(event, value) => {
                                    setMedicalService(value);
                                }}
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
                                onChange={(event, value) => {
                                    setStaff(value);
                                }}
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
                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    label="Дата и время записи"
                                    value={dateTime}
                                    onChange={(value) => {
                                        setDateTime(value);
                                    }}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{mt: 3, mb: 2}}
                    >
                        Записаться
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
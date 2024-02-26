import { useState } from "react";
import { Alert, Avatar, Box, Button, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputLabel, MenuItem, Paper, Select, TextField, Typography, styled } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import NavBar from "../navBar/navBar";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const FlexContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh',
});

const ContentContainer = styled(Box)({
    flex: 1,
    marginLeft: '300px',
    padding: '20px',
});

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', background: 'white', padding: '1%', borderRadius: '15px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Datos generales" {...a11yProps(0)} />
                    <Tab label="Datos representante legal" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <FormDatosGenerales />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <FormDatosRepresentateLegal />
            </CustomTabPanel>
        </Box>
    );
}
function FormDatosGenerales() {
    const [age, setAge] = useState("");

    const handleChange = (event: any) => {
        setAge(event.target.value);
    };
    const categories = [
        "science",
        "sports",
        "business",
        "politics",
        "entertainment",
        "technology",
        "world",
        "all"
    ];
    return (
        <Box sx={{ padding: 5 }}>
            <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
                Datos generales
            </Typography>


            <Grid container spacing={3}>
                <Grid item sm={3}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Nombre o razón social"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                    />
                </Grid>
                <Grid item sm={3}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">Tipo de documento</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Tipo de documento"
                            onChange={handleChange}
                        >
                            <MenuItem value="nit">Nit</MenuItem>
                            <MenuItem value="cc">Cédula de ciudadanía</MenuItem>
                            <MenuItem value="ce">Cédula de extranjería</MenuItem>
                            <MenuItem value="pasaporte">Pasaporte</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item sm={3}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Número de documento"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                    />
                </Grid>
                <Grid item sm={3}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">Tipo de proveedor</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Tipo de proveedor"
                            onChange={handleChange}
                        >
                            <MenuItem value="nit">Persona natural</MenuItem>
                            <MenuItem value="cc">Persona jurídica</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item sm={3}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Dirección"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                    />
                </Grid>
                <Grid item sm={3}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Teléfono"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                    />
                </Grid>
                <Grid item sm={3}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Departamento"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                    />
                </Grid>
                <Grid item sm={3}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Ciudad"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                    />
                </Grid>
                <Grid item sm={3}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">Tamaño empresa</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Tamaño empresa"
                            onChange={handleChange}
                        >
                            <MenuItem value="pequena">Pequeña</MenuItem>
                            <MenuItem value="mediana">Mediana</MenuItem>
                            <MenuItem value="grande">Grande</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item sm={3}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">Condición de pago</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Tamaño empresa"
                            onChange={handleChange}
                        >
                            <MenuItem value="30">Neto 30 días</MenuItem>
                            <MenuItem value="40">Neto 40 días</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item sm={12}>
                    <Box sx={{ width: '50%', margin: 'auto' }}>
                        <Alert severity="info"> Se deberá tramitar una autorización para autorizaciones de pago distintas.</Alert>
                    </Box>
                </Grid>
                <Grid item sm={1} sx={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                    <Box>Tipo:</Box>
                </Grid>
                <Grid item sm={1}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Bien" />
                </Grid>
                <Grid item sm={1}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Servicio" />
                </Grid>
                <Grid item sm={9}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Descripción del bien o servicio"
                        multiline
                        fullWidth
                        rows={1}
                    />
                </Grid>
                <Grid item xs={12} sm={12} sx={{ textAlign: 'right' }}>
                    <Button variant="contained">
                        Save
                    </Button>
                </Grid>
                <Grid item xs={12} sm={5} />
            </Grid>
        </Box>
    );
}

function FormDatosRepresentateLegal() {
    return (
        <Box sx={{ padding: 5 }}>
            <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
                Datos representante legal
            </Typography>


            <Grid container spacing={3}>
                <Grid item sm={3}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Primer apellido"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                    />
                </Grid>
                <Grid item sm={3}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Segundo apellido"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                    />
                </Grid>
                <Grid item sm={3}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Nombres"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                    />
                </Grid>
                <Grid item sm={3}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Email"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                    />
                </Grid>
                <Grid item sm={3}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Confirme email"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                    />
                </Grid>
                <Grid item sm={3}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">Tipo de documento</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Tipo de documento"
                        >
                            <MenuItem value="cc">Cédula de ciudadanía</MenuItem>
                            <MenuItem value="ce">Cédula de extranjería</MenuItem>
                            <MenuItem value="pasaporte">Pasaporte</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item sm={3}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Número de documento"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                    />
                </Grid>
                <Grid item sm={3}>
                    <TextField
                        id="datetime-local"
                        label="fecha-expedición"
                        type="datetime-local"
                        defaultValue="2000-12-01T00:00"
                        fullWidth
                        variant="outlined"
                        autoComplete="off"
                        size="small"/>
                </Grid>
                <Grid item sm={3}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Lugar de expedición"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={12} sx={{ textAlign: 'right' }}>
                    <Button variant="contained">
                        Save
                    </Button>
                </Grid>
                <Grid item xs={12} sm={5} />
            </Grid>
        </Box>
    );
}
function FormComponent() {
    return (
        <FlexContainer>
            <NavBar />
            <ContentContainer sx={{ backgroundColor: '#eef2f6' }}>
                <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                    <IconButton>
                        <Avatar sx={{ bgcolor: '#045cb7' }}>VG</Avatar>
                    </IconButton>
                </Box>
                {/* <Box>
                    <Typography variant="h4" color='primary'>Formulario</Typography>
                </Box> */}
                <Box sx={{ flexGrow: 1, pt: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box style={{ padding: 5, width: '100%' }}>
                                <BasicTabs />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </ContentContainer>
        </FlexContainer>
    );
}
export default FormComponent;
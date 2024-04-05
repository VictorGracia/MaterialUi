import { Avatar, Box, Grid, IconButton, LinearProgress, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import ResumenLibroVentas from "../components/resumenLibroVentas/resumenLibroVentas";
import NavBar from "../components/navBar/navBar";

export default function ResumenLibroVentasView() {
    const [infoResumen, setInfoResumen] = useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        // Simular una carga ficticia con un temporizador
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    // useEffect(() => {
    //     const request = {
    //         nitEmpresa: "860531287",
    //         fechaInicio: "2024-01-01",
    //         fechaFin: "2024-04-30"
    //     };

    //     fetch('https://facturae-core-appservice.azurewebsites.net/api/860531287/emision/libroVentasResumen?code=aERKI8T17IAkULzHlqLizPi4H4qi9SHLcKqVzDRxFTFR2zqAAXwQYg==&clientId=_affinity', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "x-functions-key": "aERKI8T17IAkULzHlqLizPi4H4qi9SHLcKqVzDRxFTFR2zqAAXwQYg=="
    //         },
    //         body: JSON.stringify(request)
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Error en la solicitud');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log('Consumo correcto');
    //         console.log(data);
    //         setInfoResumen(data);
    //     })
    //     .catch(error => {
    //         console.error('Error en el consumo:', error);
    //     });
    // }, []);
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
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                {/* Contenedor interno para la barra de progreso */}
                {loading ? (
                    <Box sx={{ width: '50%', maxWidth: 400 }}> {/* Ancho máximo de 400px */}
                        <LinearProgress />
                    </Box>
                ) : (

                    <FlexContainer>
                        <NavBar />
                        <ContentContainer sx={{ backgroundColor: '#eef2f6' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                                <IconButton>
                                    <Avatar sx={{ bgcolor: '#045cb7' }}>VG</Avatar>
                                </IconButton>
                            </Box>
                            <Box sx={{ flexGrow: 1, pt: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <ResumenLibroVentas />
                                    </Grid>
                                </Grid>
                            </Box>
                        </ContentContainer>
                    </FlexContainer>
                )}
            </Box>
        </>
    );
}

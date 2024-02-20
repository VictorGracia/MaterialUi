import { Box, Button, Container, Typography, Grid, styled, Paper, IconButton, Avatar } from '@mui/material';
import NavBar from '../components/navBar/navBar';
import { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts';
import svgChart from '../media/chart.svg';
import ComponentResumen from '../components/dashboard/resumenComponent';
import '../css-global.css';
function Dashboard() {
    const sample = [10, 20, 10, 10, 10];
    const sampleInvert = [20, 10, 20, 20, 20];
    const FlexContainer = styled(Box)({
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh', // Ajusta la altura al 100% del viewport
    });

    const LeftDrawer = styled(Paper)({
        width: '250px', // Ancho fijo del Drawer
        minHeight: '100%', // Ajusta la altura al 100% del viewport
        position: 'fixed', // Fija el Drawer a la izquierda
        top: 0,
        left: 0,
        zIndex: 1, // Asegura que esté por encima del contenido
    });

    const ContentContainer = styled(Box)({
        flex: 1, // Hace que este contenedor ocupe todo el espacio restante
        marginLeft: '250px', // Mueve el contenido a la derecha del Drawer
        padding: '20px', // Añade un poco de espacio alrededor del contenido
    });
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         if (count < 1000000) {
    //             setCount(prevCount => prevCount + 500000);
    //         }
    //     }, 1); // Cambia el intervalo de tiempo según lo que desees

    //     return () => clearInterval(intervalId);
    // }, [count]);
    return (
        <>
            <FlexContainer>
                <NavBar />
                <ContentContainer sx={{ backgroundColor: '#eef2f6' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <IconButton>
                            <Avatar sx={{ bgcolor: '#045cb7' }}>VG</Avatar>
                        </IconButton>
                    </Box>
                    <Box >
                        <Typography variant="h4" color='primary'>Dashboard facturación electrónica</Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, pt: 2 }} >
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <ComponentResumen evento={'Total documentos emitidos'}></ComponentResumen>
                            </Grid>
                            <Grid item xs={4}>
                                <ComponentResumen evento={'Total documentos recibidos'}></ComponentResumen>
                            </Grid>
                            <Grid item xs={4}>
                                <ComponentResumen evento={'Total documentos electrónicos'}></ComponentResumen>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{
                                    width: '100%',
                                    backgroundColor: 'white',
                                    borderRadius: '25px',
                                    padding: 3
                                }}>
                                    <Typography variant='h6'
                                        sx={{
                                            // color: 'white'
                                        }}>Documentos emitidos del ultimo año</Typography>
                                    <BarChart
                                        series={[{ data: [12, 35, 44, 24, 34, 34, 54, 64, 23, 12, 21, 12], color: '#045cb7' }]}
                                        height={290}
                                        xAxis={[{ data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'], scaleType: 'band' }]}
                                        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                                    /></Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{
                                    width: '100%',
                                    backgroundColor: 'white',
                                    borderRadius: '25px',
                                    padding: 3,
                                    // color: "white"
                                }}>
                                    <Typography variant='h6'
                                    // sx={{ color: 'white' }}
                                    >Documentos recibidos del ultimo año</Typography>
                                    <BarChart
                                        // series={[
                                        //   { data: [12, 35, 44, 24, 34, 34, 54, 64, 23, 12, 21, 12] },
                                        //   color: #222
                                        // ]}
                                        series={[{ data: [12, 35, 44, 24, 34, 34, 54, 64, 23, 12, 21, 12], color: '#045cb7' }]}
                                        height={290}
                                        xAxis={[{ data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'], scaleType: 'band' }]}
                                        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                                        sx={{ fill: 'white' }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={{
                                    width: '100%',
                                    height: 100,
                                    backgroundColor: '#72B7FF',
                                    borderRadius: '25px',
                                    // backgroundImage: `url(${svgChart})`,
                                    backgroundRepeat: 'no-repeat',
                                }}>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: 90,
                                            borderRadius: '25px',
                                            display: 'flex',
                                            textAlign: 'center',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <Typography variant='h6' sx={{padding:5}}>Emisión</Typography>
                                        <LineChart
                                            xAxis={[{ data: sample }]}
                                            yAxis={[
                                                { id: 'linearAxis', scaleType: 'linear' },
                                                { id: 'logAxis', scaleType: 'log' },
                                            ]}
                                            // series={[
                                            //     { yAxisKey: 'linearAxis', data: sample }
                                            //     // { yAxisKey: 'logAxis', data: sample },
                                            // ]}
                                            series={[{ data: sample, color: '#045cb7' }]}
                                            height={150}
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={{
                                    width: '100%',
                                    height: 100,
                                    backgroundColor: '#72B7FF',
                                    borderRadius: '25px',
                                }}>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: 90,
                                            borderRadius: '25px',
                                            display: 'flex',
                                            textAlign: 'center',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <Typography variant='h6' sx={{padding:5}}>Recepción</Typography>
                                        <LineChart
                                            xAxis={[{ data: sampleInvert }]}
                                            yAxis={[
                                                { id: 'linearAxis', scaleType: 'linear' },
                                                { id: 'logAxis', scaleType: 'log' },
                                            ]}
                                            series={[{ data: sampleInvert, color: '#045cb7' }]}
                                            height={150}
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={{
                                    width: '100%',
                                    height: 100,
                                    backgroundColor: '#72B7FF',
                                    borderRadius: '25px',
                                    // backgroundImage: `url(${svgChart})`,
                                    backgroundRepeat: 'no-repeat',
                                }}>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: 90,
                                            borderRadius: '25px',
                                            display: 'flex',
                                            textAlign: 'center',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <Typography variant='h6' sx={{padding:5}}>Proveedores</Typography>
                                        <LineChart
                                            xAxis={[{ data: sample }]}
                                            yAxis={[
                                                { id: 'linearAxis', scaleType: 'linear' },
                                                { id: 'logAxis', scaleType: 'log' },
                                            ]}
                                            // series={[
                                            //     { yAxisKey: 'linearAxis', data: sample }
                                            //     // { yAxisKey: 'logAxis', data: sample },
                                            // ]}
                                            series={[{ data: sample, color: '#045cb7' }]}
                                            height={150}
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </ContentContainer>
            </FlexContainer>
        </>
    );
}

export default Dashboard;

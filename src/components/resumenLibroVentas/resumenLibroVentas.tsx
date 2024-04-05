import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import HardcodedData from './harcoredData';
import { Paper, Box, Typography, Grid, IconButton, Button, Modal, TextField } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import LoupeSharpIcon from '@mui/icons-material/LoupeSharp';
import { BarChart } from '@mui/x-charts';
import { useTheme } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';

const months = [
    { label: 'Enero', value: 'Enero' },
    { label: 'Febrero', value: 'Febrero' },
    { label: 'Marzo', value: 'Marzo' },
    { label: 'Abril', value: 'Abril' },
    { label: 'Mayo', value: 'Mayo' },
    { label: 'Junio', value: 'Junio' },
    { label: 'Julio', value: 'Julio' },
    { label: 'Agosto', value: 'Agosto' },
    { label: 'Septiembre', value: 'Septiembre' },
    { label: 'Octubre', value: 'Octubre' },
    { label: 'Noviembre', value: 'Noviembre' },
    { label: 'Diciembre', value: 'Diciembre' },
];

const ResumenLibroVentas = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const data = HardcodedData().map((item, index) => ({ id: index, ...item }));
    const theme = useTheme();

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleApplyFilter = () => {
        console.log('Mes seleccionado:', selectedMonth);
        console.log('Año seleccionado:', selectedYear);
        handleCloseModal();
        window.location.reload();
    };

    const columns = [
        { field: 'mes', headerName: 'Mes', width: 170 },
        { field: 'cantidad', headerName: '#Facturas', width: 170 },
        { field: 'total', headerName: 'Total', width: 170 },
        {
            field: 'acciones',
            headerName: 'Acciones',
            renderCell: () => (
                <Grid container justifyContent="center">
                    <Grid item>
                        <IconButton size="small" color='primary'>
                            <LoupeSharpIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            )
        },
    ];

    const chartSetting = {
        xAxis: [
            {
                label: 'Total',
            },
        ],
        width: 700,
        height: (580),
    };

    const dataset = HardcodedData().map(item => ({
        month: item.mes,
        total: parseFloat(item.total.replace(/\D/g, ''))
    }));

    const valueFormatter = (value: number | null) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value || 0);

    return (
        <Paper sx={{ display: 'flex', flexDirection: 'column', minWidth: '82vw' }}>
            <Typography variant="h4" pt={7} pl={7} color='primary'>Documentos emitidos año 2023</Typography>
            <Grid container xs={12} sx={{ flexGrow: 1 }}>
                <Grid item xs={6}>
                    <Box p={7} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <DataGrid
                            rowHeight={40}
                            rows={data}
                            columns={columns}
                            checkboxSelection
                            hideFooter
                        />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{
                        width: '100%',
                        borderRadius: '25px',
                        pt: 4
                    }}>
                        <Box sx={{
                            display: 'flex', justifyContent: 'right', pr: 5
                        }}>
                            <Button variant='outlined' onClick={handleOpenModal}>Filtrar</Button>
                        </Box>
                        <BarChart
                            dataset={dataset}
                            sx={{ fill: 'white' }}
                            yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                            series={[{
                                dataKey: 'total', label: 'VENTAS POR MES',
                                valueFormatter,
                                color: '#045cb7'
                            }]}
                            layout="horizontal"
                            {...chartSetting}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        minWidth: 600,
                        borderRadius: '10px'
                    }}
                >
                    <Typography variant="h6" id="modal-title" mb={2}>Filtrar por Mes y Año</Typography>
                    <Grid container xs={12}>
                        <Grid item xs={6} p={1}>
                            <TextField
                                label="Año"
                                variant="outlined"
                                value={selectedYear}
                                fullWidth
                                onChange={(e) => setSelectedYear(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={6} p={1}>
                            <Autocomplete
                                options={months}
                                getOptionLabel={(option) => option.label}
                                value={months.find(month => month.label === selectedMonth) || null}
                                onChange={(event, newValue) => {
                                    setSelectedMonth(newValue?.label || '');
                                }}
                                renderInput={(params) => <TextField {...params} label="Mes" variant="outlined" />}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="outlined" sx={{ mr: 1 }} onClick={handleCloseModal}>Cancelar</Button>
                        <Button variant="contained" color="primary" onClick={handleApplyFilter}>Aplicar</Button>
                    </Box>
                </Box>
            </Modal>
        </Paper >
    );
};

export default ResumenLibroVentas;

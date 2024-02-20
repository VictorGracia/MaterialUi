import React from 'react';
import { Box, Typography, Grid, styled, IconButton, Avatar, Button } from '@mui/material';
import NavBar from '../components/navBar/navBar';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

function Dashboard() {
    const FlexContainer = styled(Box)({
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
    });

    const ContentContainer = styled(Box)({
        flex: 1,
        marginLeft: '250px',
        padding: '20px',
    });

    const columnsTable: GridColDef[] = [
        { field: 'fechaCargue', headerName: 'Fecha Cargue', width: 150 },
        { field: 'noFactura', headerName: '#Factura', width: 150 },
        // { field: 'soportes', headerName: 'Soportes', width: 150 },
        {
            field: 'soportes',
            headerName: 'Soportes',
            sortable: false,
            width: 150,
            renderCell: (params: GridRenderCellParams) => (
                <div style={{ textAlign: 'center' }}>{params.value}</div>
            ),
        },
        { field: 'monto', headerName: 'Monto', width: 150 },
        { field: 'nitProveedor', headerName: 'Nit Proveedor', width: 150 },
        { field: 'proveedor', headerName: 'Proveedor', width: 150 },
        // { field: 'estadoDocumento', headerName: 'Estado documento', width: 150 },
        {
            field: 'estadoDocumento',
            headerName: 'Estado documento',
            sortable: false,
            width: 150,
            renderCell: (params: GridRenderCellParams) => (
                <div style={{ textAlign: 'center' }}>{params.value}</div>
            ),
        },
        // { field: 'estadoSistema', headerName: 'Estado sistema', width: 150 },
        {
            field: 'estadoSistema',
            headerName: 'Estado sistema',
            sortable: false,
            width: 150,
            renderCell: (params: GridRenderCellParams) => (
                <div style={{ textAlign: 'center' }}>{params.value}</div>
            ),
        },
        // { field: 'dian', headerName: 'Dian', width: 150 },
        {
            field: 'dian',
            headerName: 'Dian',
            sortable: false,
            width: 150,
            renderCell: (params: GridRenderCellParams) => (
                <div style={{ textAlign: 'center' }}>{params.value}</div>
            ),
        },
        { field: 'informacion', headerName: 'Acciones', width: 150 },
        {
            field: 'opciones',
            headerName: 'Información',
            sortable: false,
            width: 150,
            renderCell: (params: GridRenderCellParams) => (
                <div style={{ textAlign: 'center' }}>{params.value}</div>
            ),
        }
    ];

    const rowsTable = [
        {
            id: 1,
            fechaCargue: '2024-02-19 21:30',
            noFactura: '#IN328264',
            soportes: <IconButton color='error'><CloseIcon /></IconButton>,
            monto: '$35.000.000',
            nitProveedor: 10001000,
            proveedor: 'Olimpica',
            estadoDocumento: <span>Pendiente</span>,
            estadoSistema: <span>Devuelto</span>,
            dian: <IconButton sx={{ color: '#32cd32' }}><CheckIcon /></IconButton>,
            informacion: 'OC:53303166',
            opciones: <Button variant="contained" color="primary">Click me</Button>
        },
        {
            id: 1,
            fechaCargue: '2024-02-19 21:30',
            noFactura: '#IN328264',
            soportes: <IconButton color='error'><CloseIcon /></IconButton>,
            monto: '$35.000.000',
            nitProveedor: 10001000,
            proveedor: 'Olimpica',
            estadoDocumento: <span>Pendiente</span>,
            estadoSistema: <span>Devuelto</span>,
            dian: <IconButton sx={{ color: '#32cd32' }}><CheckIcon /></IconButton>,
            informacion: 'OC:53303166',
            opciones: <Button variant="contained" color="primary">Click me</Button>
        },
        {
            id: 1,
            fechaCargue: '2024-02-19 21:30',
            noFactura: '#IN328264',
            soportes: <IconButton color='error'><CloseIcon /></IconButton>,
            monto: '$35.000.000',
            nitProveedor: 10001000,
            proveedor: 'Olimpica',
            estadoDocumento: <span>Pendiente</span>,
            estadoSistema: <span>Devuelto</span>,
            dian: <IconButton sx={{ color: '#32cd32' }}><CheckIcon /></IconButton>,
            informacion: 'OC:53303166',
            opciones: <Button variant="contained" color="primary">Click me</Button>
        },
        {
            id: 1,
            fechaCargue: '2024-02-19 21:30',
            noFactura: '#IN328264',
            soportes: <IconButton color='error'><CloseIcon /></IconButton>,
            monto: '$35.000.000',
            nitProveedor: 10001000,
            proveedor: 'Olimpica',
            estadoDocumento: <span>Pendiente</span>,
            estadoSistema: <span>Devuelto</span>,
            dian: <IconButton sx={{ color: '#32cd32' }}><CheckIcon /></IconButton>,
            informacion: 'OC:53303166',
            opciones: <Button variant="contained" color="primary">Click me</Button>
        },
        {
            id: 1,
            fechaCargue: '2024-02-19 21:30',
            noFactura: '#IN328264',
            soportes: <IconButton color='error'><CloseIcon /></IconButton>,
            monto: '$35.000.000',
            nitProveedor: 10001000,
            proveedor: 'Olimpica',
            estadoDocumento: <span>Pendiente</span>,
            estadoSistema: <span>Devuelto</span>,
            dian: <IconButton sx={{ color: '#32cd32' }}><CheckIcon /></IconButton>,
            informacion: 'OC:53303166',
            opciones: <Button variant="contained" color="primary">Click me</Button>
        },
        {
            id: 1,
            fechaCargue: '2024-02-19 21:30',
            noFactura: '#IN328264',
            soportes: <IconButton color='error'><CloseIcon /></IconButton>,
            monto: '$35.000.000',
            nitProveedor: 10001000,
            proveedor: 'Olimpica',
            estadoDocumento: <span>Pendiente</span>,
            estadoSistema: <span>Devuelto</span>,
            dian: <IconButton sx={{ color: '#32cd32' }}><CheckIcon /></IconButton>,
            informacion: 'OC:53303166',
            opciones: <Button variant="contained" color="primary">Click me</Button>
        },
        {
            id: 1,
            fechaCargue: '2024-02-19 21:30',
            noFactura: '#IN328264',
            soportes: <IconButton color='error'><CloseIcon /></IconButton>,
            monto: '$35.000.000',
            nitProveedor: 10001000,
            proveedor: 'Olimpica',
            estadoDocumento: <span>Pendiente</span>,
            estadoSistema: <span>Devuelto</span>,
            dian: <IconButton sx={{ color: '#32cd32' }}><CheckIcon /></IconButton>,
            informacion: 'OC:53303166',
            opciones: <Button variant="contained" color="primary">Click me</Button>
        },
        {
            id: 1,
            fechaCargue: '2024-02-19 21:30',
            noFactura: '#IN328264',
            soportes: <IconButton color='error'><CloseIcon /></IconButton>,
            monto: '$35.000.000',
            nitProveedor: 10001000,
            proveedor: 'Olimpica',
            estadoDocumento: <span>Pendiente</span>,
            estadoSistema: <span>Devuelto</span>,
            dian: <IconButton sx={{ color: '#32cd32' }}><CheckIcon /></IconButton>,
            informacion: 'OC:53303166',
            opciones: <Button variant="contained" color="primary">Click me</Button>
        },
    ];

    return (
        <FlexContainer>
            <NavBar />
            <ContentContainer sx={{ backgroundColor: '#eef2f6' }}>
                <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                    <IconButton>
                        <Avatar sx={{ bgcolor: '#045cb7' }}>VG</Avatar>
                    </IconButton>
                </Box>
                <Box>
                    <Typography variant="h4" color='primary'>Bandeja de recepción</Typography>
                </Box>
                <Box sx={{ flexGrow: 1, pt: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box style={{ padding: 5, width: '100%', backgroundColor: '#fafafa'}}>
                                <DataGrid
                                    sx={{overflowX:'auto'}}
                                    rows={rowsTable}
                                    columns={columnsTable}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                    pagination
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </ContentContainer>
        </FlexContainer>
    );
}

export default Dashboard;

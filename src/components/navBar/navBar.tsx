import React, { useState } from 'react';
import { Box, Button, Typography, Grid, IconButton, Avatar, Switch } from "@mui/material";
import DrawerNavList from './navDrawer';
import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import PersonIcon from '@mui/icons-material/Person';
import '../../css-global.css';
const LeftDrawer = styled(Paper)({
    width: '300px', // Ancho fijo del Drawer
    height: '100%', // Ajusta la altura al 100% del viewport
    position: 'fixed', // Fija el Drawer a la izquierda
    top: 0,
    left: 0,
    zIndex: 1, // Asegura que esté por encima del contenido
});


export default function NavBar() {
    return (
        <>
            <LeftDrawer sx={{boxShadow: '0px 0px 8px #848484'}}>
                <DrawerNavList />
            </LeftDrawer>
        </>
    );
}

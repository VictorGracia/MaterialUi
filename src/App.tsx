import './App.css';
import { Box, Button, Container, Typography, Grid, styled, Paper, IconButton, Avatar } from '@mui/material';
import NavBar from './components/navBar/navBar';
import { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts';
import './css-global.css';
import svg from './media/34239046_4_yutyty_1231.svg';
import Dashboard from './pages/dashboard';
import TableView from './pages/table';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './pages/form';
import Login from './pages/login';
import CardView from './pages/cards';
import ResumenLibroVentasView from './pages/resumenLibroVentas';

function App() {
  const FlexContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh', // Ajusta la altura al 100% del viewport
  });

  const LeftDrawer = styled(Paper)({
    width: '300px', // Ancho fijo del Drawer
    minHeight: '100%', // Ajusta la altura al 100% del viewport
    position: 'fixed', // Fija el Drawer a la izquierda
    top: 0,
    left: 0,
    zIndex: 1, // Asegura que esté por encima del contenido
  });

  const ContentContainer = styled(Box)({
    flex: 1, // Hace que este contenedor ocupe todo el espacio restante
    marginLeft: '300px', // Mueve el contenido a la derecha del Drawer
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 1000000) {
        setCount(prevCount => prevCount + 200000);
      }
    }, 1); // Cambia el intervalo de tiempo según lo que desees

    return () => clearInterval(intervalId);
  }, [count]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Login />} index />
          <Route path="/login" element={<Login />} index />
          <Route path="/dashboard" element={<Dashboard />} index />
          <Route path="/form" element={<Form />} index />
          <Route path="/table" element={<TableView />} index />
          <Route path="/cards" element={<CardView />} index />
          <Route path="/resumen-libro-ventas" element={<ResumenLibroVentasView />} index />
        </Routes>
      </Router>
    </>
  );
}

export default App;

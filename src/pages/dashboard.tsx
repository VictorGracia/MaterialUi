import * as React from 'react';
import { Box, LinearProgress } from '@mui/material';
import NavBar from '../components/navBar/navBar';
import DashboardComponent from '../components/dashboard/dashboard'; // Importa el componente DashboardComponent

function Dashboard() {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        // Simular una carga ficticia con un temporizador
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
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
                <DashboardComponent />
            )}
        </Box>
    );
}

export default Dashboard;

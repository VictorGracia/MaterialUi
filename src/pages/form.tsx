import { Avatar, Box, Button, FormControl, Grid, IconButton, InputLabel, LinearProgress, MenuItem, Paper, Select, TextField, Typography, styled } from "@mui/material";
import NavBar from '../components/navBar/navBar';
import FormComponent from '../components/form/form';
import { useEffect, useState } from "react";

function FormBody() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    >          {loading ? (
      <Box sx={{ width: '50%', maxWidth: 400 }}>
        <LinearProgress />
      </Box>
    ) : (
      <FormComponent />
    )}
    </Box>
  );
}

export default FormBody;

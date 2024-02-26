import { Avatar, Box, Button, FormControl, Grid, IconButton, InputLabel, LinearProgress, MenuItem, Paper, Select, TextField, Typography, styled } from "@mui/material";
import NavBar from '../components/navBar/navBar';
import CardView from '../components/cards/cards-view';
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

        <>
            < CardView />
        </>
    );
}

export default FormBody;

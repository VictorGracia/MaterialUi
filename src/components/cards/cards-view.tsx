import { useState } from "react";
import { Alert, Avatar, Box, Button, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Skeleton, TextField, Typography, styled } from "@mui/material";
import NavBar from "../navBar/navBar";
import FirstCard from './card'
import SecondCard from './second-card'
import SkeletonItem from './skeleton';
import YouTube from "./youtube";

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

function CardComponent() {
    return (
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
                            <Box style={{ padding: 5, width: '100%', display: 'flex', gap: '20px' }}>
                                <Box>
                                    <SkeletonItem />
                                </Box>

                                <Box>
                                    <FirstCard />
                                </Box>
                                <Box>
                                    <SecondCard />
                                </Box>
                                <Box>
                                    <YouTube />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </ContentContainer>
        </FlexContainer>
    );
}
export default CardComponent;
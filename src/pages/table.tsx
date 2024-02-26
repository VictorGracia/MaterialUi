import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, styled, IconButton, Avatar, Button, Paper, LinearProgress } from '@mui/material';
import NavBar from '../components/navBar/navBar';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import Table from '../components/crud/table';

function TableView() {
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
              <Table />
            </Grid>
          </Grid>
        </Box>
      </ContentContainer>
    </FlexContainer>
  );
}
function Body() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      <TableView />
    )}
    </Box>
  );
}

export default TableView;

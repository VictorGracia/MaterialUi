import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TablePagination from '@mui/material/TablePagination';
import { Paper, Typography, Modal, Button, TextField } from '@mui/material';

export default function DataGridDemo() {
    const [presidentsData, setPresidentsData] = React.useState([
        { id: 1, name: 'Simón Bolívar', termStart: '1819', termEnd: '1830', party: 'Liberal' },
        { id: 2, name: 'Rafael Urdaneta', termStart: '1830', termEnd: '1831', party: 'Conservative' },
        { id: 3, name: 'Joaquín Mosquera', termStart: '1830', termEnd: '1830', party: 'Liberal' },
        { id: 4, name: 'Rafael José Urdaneta Vargas', termStart: '1831', termEnd: '1831', party: 'Conservative' },
        { id: 5, name: 'Francisco de Paula Santander', termStart: '1832', termEnd: '1837', party: 'Liberal' },
        { id: 6, name: 'José Ignacio de Márquez', termStart: '1837', termEnd: '1837', party: 'Liberal' },
        { id: 7, name: 'José Ignacio Gutiérrez', termStart: '1837', termEnd: '1837', party: 'Liberal' },
        { id: 8, name: 'Pedro Alcántara Herrán', termStart: '1841', termEnd: '1845', party: 'Conservative' },
        { id: 9, name: 'Tomás Cipriano de Mosquera', termStart: '1845', termEnd: '1849', party: 'Liberal' },
        { id: 10, name: 'José Hilario López', termStart: '1849', termEnd: '1853', party: 'Liberal' },
        { id: 11, name: 'José María Melo', termStart: '1854', termEnd: '1854', party: 'Liberal' },
        { id: 12, name: 'Manuel María Mallarino', termStart: '1855', termEnd: '1857', party: 'Conservative' },
        { id: 13, name: 'Mariano Ospina Rodríguez', termStart: '1857', termEnd: '1861', party: 'Conservative' },
        { id: 14, name: 'Bartolomé Calvo', termStart: '1861', termEnd: '1861', party: 'Conservative' },
        { id: 15, name: 'Tomas Cipriano de Mosquera', termStart: '1861', termEnd: '1864', party: 'Liberal' },
        { id: 16, name: 'Manuel Murillo Toro', termStart: '1864', termEnd: '1866', party: 'Liberal' },
        { id: 17, name: 'Santos Acosta', termStart: '1867', termEnd: '1867', party: 'Conservative' },
        { id: 18, name: 'Manuel Murillo Toro', termStart: '1868', termEnd: '1872', party: 'Liberal' },
        { id: 19, name: 'Santiago Pérez de Manosalbas', termStart: '1872', termEnd: '1874', party: 'Liberal' },
        { id: 20, name: 'Miguel Antonio Caro', termStart: '1874', termEnd: '1876', party: 'Conservative' },
        // Agrega más presidentes según sea necesario
    ]);

    const [selectedPresidentId, setSelectedPresidentId] = React.useState(null);
    const [openConfirmationModal, setOpenConfirmationModal] = React.useState(false);
    const [openAddModal, setOpenAddModal] = React.useState(false);
    const [newPresidentName, setNewPresidentName] = React.useState('');
    const [newTermStart, setNewTermStart] = React.useState('');
    const [newTermEnd, setNewTermEnd] = React.useState('');
    const [newParty, setNewParty] = React.useState('');

    const handleDeletePresident = () => {
        const updatedPresidents = presidentsData.filter(president => president.id !== selectedPresidentId);
        setPresidentsData(updatedPresidents);
        setSelectedPresidentId(null);
        handleCloseConfirmationModal();
    };

    const handleOpenConfirmationModal = (id:any) => {
        setSelectedPresidentId(id);
        setOpenConfirmationModal(true);
    };

    const handleCloseConfirmationModal = () => {
        setSelectedPresidentId(null);
        setOpenConfirmationModal(false);
    };

    const handleOpenAddModal = () => {
        setOpenAddModal(true);
    };

    const handleCloseAddModal = () => {
        setOpenAddModal(false);
    };

    const handleAddPresident = () => {
        const newPresident = {
            id: presidentsData.length + 1,
            name: newPresidentName,
            termStart: newTermStart,
            termEnd: newTermEnd,
            party: newParty
        };
        setPresidentsData([...presidentsData, newPresident]);
        handleCloseAddModal();
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'President Name',
            width: 200,
            editable: true,
        },
        {
            field: 'termStart',
            headerName: 'Term Start',
            width: 150,
            editable: true,
        },
        {
            field: 'termEnd',
            headerName: 'Term End',
            width: 150,
            editable: true,
        },
        {
            field: 'party',
            headerName: 'Political Party',
            width: 150,
            editable: true,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 120,
            renderCell: (params) => (
                <Button variant="contained" color="error" size="small" onClick={() => handleOpenConfirmationModal(params.row.id)}>Delete</Button>
            ),
        },
    ];

    return (
        <Paper elevation={2} sx={{ p: 5 }}>
            <Typography variant="h4" color='primary'>Presidents Information</Typography>
            <Box sx={{ mb: 2, textAlign:'right' }}>
                <Button onClick={handleOpenAddModal} variant="contained" color="primary">Add President</Button>
            </Box>
            <Box sx={{ width: '100%'}}>
            <DataGrid
                    rows={presidentsData}
                    columns={columns}
                    // pagination
                    pageSizeOptions={[5, 10, 25]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
            <Modal
                open={openAddModal}
                onClose={handleCloseAddModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, maxWidth: 400 }}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Add New President
                    </Typography>
                    <TextField
                        id="newPresidentName"
                        label="President Name"
                        variant="outlined"
                        fullWidth
                        value={newPresidentName}
                        onChange={(e) => setNewPresidentName(e.target.value)}
                        sx={{ mt: 2 }}
                    />
                    <TextField
                        id="newTermStart"
                        label="Term Start"
                        variant="outlined"
                        fullWidth
                        value={newTermStart}
                        onChange={(e) => setNewTermStart(e.target.value)}
                        sx={{ mt: 2 }}
                    />
                    <TextField
                        id="newTermEnd"
                        label="Term End"
                        variant="outlined"
                        fullWidth
                        value={newTermEnd}
                        onChange={(e) => setNewTermEnd(e.target.value)}
                        sx={{ mt: 2 }}
                    />
                    <TextField
                        id="newParty"
                        label="Political Party"
                        variant="outlined"
                        fullWidth
                        value={newParty}
                        onChange={(e) => setNewParty(e.target.value)}
                        sx={{ mt: 2 }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button onClick={handleCloseAddModal} variant="outlined" sx={{ mr: 2 }}>
                            Cancel
                        </Button>
                        <Button onClick={handleAddPresident} variant="contained" color="primary">
                            Add
                        </Button>
                    </Box>
                </Box>
            </Modal>
            <Modal
                open={openConfirmationModal}
                onClose={handleCloseConfirmationModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, maxWidth: 400 }}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Confirm Deletion
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to delete this president?
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button onClick={handleCloseConfirmationModal} variant="outlined" sx={{ mr: 2 }}>
                            Cancel
                        </Button>
                        <Button onClick={handleDeletePresident} variant="contained" color="error">
                            Delete
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Paper>
    );
}

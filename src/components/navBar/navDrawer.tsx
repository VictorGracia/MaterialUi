import { Box, Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, styled, useTheme } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import { inherits } from "util";
import { useState } from "react";
import { ExpandLess, GraphicEq, GraphicEqSharp, Person, Timelapse, Timeline } from "@mui/icons-material";
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import AddCardIcon from '@mui/icons-material/AddCard';
export default function Drawer() {
    const theme = useTheme();
    const Img = styled("img")({
        width: 150,
        height: "100%",
        objectFit: "cover",
        objectPosition: "center"

    });
    const [open, setOpen] = useState(false);


    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <Box sx={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            overflowX: 'hidden'
        }} >
            <Box sx={{
                width: 'inherit',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Box sx={{
                    width: 300,
                    height: 300,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{}}>
                        <Img src="https://www.facturae.com.co/app/img/2.jpg" />
                    </Box>
                </Box>
            </Box>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Nested List Items
                    </ListSubheader>
                }
            >
                <ListItemButton>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="Login" onClick={() => window.location.href = './login'}/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        < Timeline/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" onClick={() => window.location.href = './dashboard'}/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <FormatAlignJustifyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Form" onClick={() => window.location.href = './form'}/>
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <TableViewOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tables" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Crud" onClick={() => window.location.href = '/table'}/>
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton>
                    <ListItemIcon>
                        <AddCardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cards" onClick={() => window.location.href = './cards'}/>
                </ListItemButton>
            </List>
            {/* <Divider /> */}
        </Box>
    );
}
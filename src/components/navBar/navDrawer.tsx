import { Box, Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, styled, useTheme } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import { inherits } from "util";
import { useState } from "react";
import { ExpandLess } from "@mui/icons-material";
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


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
            // width: 350,
            // bgcolor: color,
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            overflowX: 'hidden'
        }} >
            <Box sx={{
                width: 'inherit',
                // bgcolor: theme.palette.primary.main,
                textAlign: 'center',
                padding: 5,
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Box sx={{
                    width: 150,
                    height: 150,
                    borderRadius: 50,
                    bgcolor: theme.palette.background.default,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box>
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
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Login" onClick={() => window.location.href = './login'}/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="dashboard" onClick={() => window.location.href = './dashboard'}/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Form" onClick={() => window.location.href = './form'}/>
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Facturación" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Recepción" onClick={() => window.location.href = '/recepcion'}/>
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <Divider />
        </Box>
    );
}
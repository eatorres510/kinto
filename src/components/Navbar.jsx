import React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    styled,
    ListItemButton,
    ListItemText,
    IconButton,
    Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Contact from './Contact';
import Documents from './Documents';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const itemList = [
    {
        text: "Inicio",
        to: "https://www.autonica.com/",
        external: true,
    }
];

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <AppBar
            component="nav"
            position="sticky"
            sx={{
                backgroundColor: 'white',
            }}
            elevation={0}
        >
            <StyledToolbar>
                <img src={logo} alt="Logo" style={{ height: 40 }} />
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                        sx={{ color: '#00708d' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
                <ListMenu>
                    {itemList.map((item) => {
                        const { text } = item;
                        return (
                            <ListItem key={text}>
                                {item.external ? (
                                    <ListItemButton component="a" href={item.to}
                                        sx={{
                                            color: '#00708d',
                                            "&:hover": {
                                                backgroundColor: 'transparent',
                                                color: '#1e2a5a',
                                            },
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                ) : (
                                    <ListItemButton component={Link} to={item.to}
                                        sx={{
                                            color: '#00708d',
                                            "&:hover": {
                                                backgroundColor: 'transparent',
                                                color: '#1e2a5a',
                                            },
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                )}
                            </ListItem>
                        )
                    })}
                    <ListItem>
                        <Documents />
                    </ListItem>
                    <ListItem>
                        <Contact />
                    </ListItem>
                </ListMenu>
            </StyledToolbar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer}
                PaperProps={{
                    sx: { backgroundColor: 'white', color: '#00708d' }
                }}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={(e) => e.stopPropagation()} // Prevent the drawer from closing on click
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="close"
                        sx={{ color: '#00708d', m: 2 }}
                        onClick={toggleDrawer}
                    >
                        <CloseIcon />
                    </IconButton>
                    <List>
                        {itemList.map((item) => {
                            const { text, to } = item;
                            return (
                                <ListItem key={text} disablePadding>
                                    {item.external ? (
                                        <ListItemButton component="a" href={to}
                                            sx={{
                                                color: '#00708d',
                                                "&:hover": {
                                                    backgroundColor: 'transparent',
                                                    color: '#1e2a5a',
                                                },
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    ) : (
                                        <ListItemButton component={Link} to={to}
                                            sx={{
                                                color: '#00708d',
                                                "&:hover": {
                                                    backgroundColor: 'transparent',
                                                    color: '#1e2a5a',
                                                },
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    )}
                                </ListItem>
                            )
                        })}
                        <ListItem disablePadding>
                            <Documents />
                        </ListItem>
                        <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Contact />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    )
}

export default Navbar;

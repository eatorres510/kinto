import React, { useState } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    List,
    ListItem,
    Link,
    ListItemText,
    ListItemButton
} from '@mui/material';

const Documents = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = (event) => {
        event.stopPropagation(); // Prevent the drawer from closing
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <ListItemButton
                onClick={handleClickOpen}
                sx={{
                    color: '#00708d',
                    "&:hover": {
                        backgroundColor: 'transparent',
                        color: '#1e2a5a',
                    },
                    textAlign: 'left',
                    fontWeight: 'normal',
                    textTransform: 'none' // Ensure it's not uppercase
                }}
            >
                <ListItemText 
                    primary="Términos y Condiciones" 
                    sx={{ whiteSpace: 'nowrap' }} // Ensure the text doesn't wrap
                />
            </ListItemButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Términos y Condiciones</DialogTitle>
                <DialogContent>
                    <List>
                        <ListItem>
                            <Link href="/politica-de-privacidad.pdf" target="_blank" rel="noopener noreferrer" sx={{ color: '#00708d' }}>
                                Políticas de Privacidad
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/terminos-y-condiciones.pdf" target="_blank" rel="noopener noreferrer" sx={{ color: '#00708d' }}>
                                Términos y Condiciones
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/terminos-y-condiciones-del-servicio.pdf" target="_blank" rel="noopener noreferrer" sx={{ color: '#00708d' }}>
                                Términos y Condiciones del Servicio
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/FAQs.pdf" target="_blank" rel="noopener noreferrer" sx={{ color: '#00708d' }}>
                                FAQs
                            </Link>
                        </ListItem>
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        sx={{
                            backgroundColor: '#00708d',
                            color: 'white',
                            fontWeight: 'bold',
                            "&:hover": {
                                backgroundColor: '#005f6b',
                            },
                        }}
                    >
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Documents;

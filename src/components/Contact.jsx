import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Box } from '@mui/material';
import { BiSupport } from 'react-icons/bi';

const Contact = ({ sx }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = (event) => {
        event.stopPropagation(); // Prevent the drawer from closing
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={sx}>
            <Button
                variant="contained"
                onClick={handleClickOpen}
                sx={{
                    backgroundColor: '#00708d',
                    color: 'white',
                    fontWeight: 'bold',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    "&:hover": {
                        backgroundColor: '#005f6b',
                    },
                }}
            >
                <BiSupport style={{ marginRight: '8px' }} />
                Soporte
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Soporte</DialogTitle>
                <DialogContent>
                    <p>Telefono: <a href="tel:+50522524100">+505 22524100</a></p>
                    <p>Email: <a href="mailto:supportkinto@autonica.com">supportkinto@autonica.com</a></p>
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
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Contact;

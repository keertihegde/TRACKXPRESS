import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AddCustomersButton = ({ handleOpen, handleClose, handleSave, open,
    name, setName, mobileNumber, setMobileNumber, setLatitude, latitude,
    setLongitude, longitude
}: any) => {


    return (
        <React.Fragment>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Stack spacing={2} direction="row">
                    <Button
                        onClick={handleOpen}
                        style={{ backgroundColor: '#bc7715', fontWeight: '600' }}
                        variant="contained"
                    >
                        Add new customer
                    </Button>
                </Stack>
            </div>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <TextField
                        label="Enter customer name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Enter Mobile Number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <p style={{ fontSize: 20, fontWeight: '500' }}> Location Details :</p>
                    <TextField
                        label="Enter Latitude"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Enter Longitude"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Button onClick={handleSave} variant="contained" color="primary">
                        Save
                    </Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
};

export default AddCustomersButton;

import React from 'react';
import { Component, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter } from 'next/router';

const LogIn = () => {
    const [openOTPBox, setOpenOTPBox] = useState(false);
    const [otpValue, setOtpValue] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const router = useRouter();

    const handleClickOpen = () => {
        setOpenOTPBox(true);
    }

    const handleSubmit = () => {
        if (otpValue === '123456') {
            router.push('/HomePage');
        } else {
            alert('Incorrect OTP. Please try again.');
        }
    };

    const handleOtpChange = (event: any) => {
        setOtpValue(event.target.value);
    };

    const handleMobileNumberInput = (event: any) => {
        const numberPattern = /^[0-9\b]+$/;
        const input = event.target.value;
        if (input === '' || (numberPattern.test(input) && input.length <= 10)) {
            setMobileNumber(input);
        } else {
            alert('Enter valid mobile number');
        }
    }

    return (
        <main style={{
            backgroundColor: '#508bfc', height: '41.7rem', flexDirection: 'column',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-evenly'
        }}>
            <div style={{}}>
                <h1 style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>Welcome To TrackXpress</h1>
            </div>
            <div style={{
                backgroundColor: 'white', width: 300, height: 350, borderRadius: 10
            }}>
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 25,
                    fontWeight: 'bold', color: '#494c52', marginTop: 30
                }}>
                    <h1>Sign in</h1>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 30 }}>
                    <TextField
                        id="outlined-password-input"
                        label="Enter Mobile Number"
                        type="tel"
                        autoComplete="tel"
                        style={{ marginBottom: 20 }}
                        value={mobileNumber}
                        onChange={handleMobileNumberInput}
                        InputLabelProps={{ style: { fontSize: 14, color: 'lightgray', textAlign: 'center' } }}
                    />

                    <Button onClick={handleClickOpen}
                        style={{
                            color: 'white', backgroundColor: '#508bfc',
                            fontWeight: 'bold', marginTop: 50
                        }}> Get OTP</Button>

                    <Dialog open={openOTPBox}>
                        <DialogTitle>Enter OTP</DialogTitle>
                        <DialogActions style={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField
                                id="outlined-password-input"
                                label=""
                                type="email"
                                autoComplete="current-password"
                                style={{ marginBottom: 20 }}
                                value={otpValue}
                                onChange={handleOtpChange}
                            />
                            <Button style={{ backgroundColor: '#508bfc', color: '#f3f6fa' }} onClick={handleSubmit}>Submit</Button>
                        </DialogActions>
                    </Dialog>

                </div>
            </div>

        </main>
    )
};

export default LogIn;

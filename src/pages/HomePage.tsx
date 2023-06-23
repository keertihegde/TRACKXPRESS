import React, { useEffect, useRef, useState } from 'react';
import Map from '../components/index';
import CustomersData from '../../public/CustomersData.json';
import CustomerDetails from '@/components/CustomerDetails';
import AddCustomersButton from '@/components/AddCustomersButton';
import { Button } from '@mui/material';
import { Fleur_De_Leah } from 'next/font/google';

const Homepage = () => {

    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [customerData, setCustomerData] = useState<
        { name: string; mobileNumber: string; latitude: string; longitude: string }[]
    >([]);
    const [open, setOpen] = useState(false);
    const [startTracking, setStartTracking] = useState(false);


    useEffect(() => {
        setCustomerData;
        //console.log('customerData', customerData);
    }, []);


    const handleOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        const newCustomer = { name, mobileNumber, latitude, longitude };
        setCustomerData([...customerData, newCustomer]);
        //console.log('Saving customer:', name, mobileNumber, latitude, longitude);
        handleClose();
    };

    const onClickStart = () => {
        setStartTracking(true);
        //console.log('tracking started', startTracking);
    };

    const onClickStop = () => {
        setStartTracking(!startTracking);
    };



    return (
        <main style={{ width: '100vw' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                    <Map
                        customerData={customerData}
                        startTracking={startTracking}
                    />
                </div>
                <div style={{}}>
                    {customerData.length === 0 ? (
                        <p style={{
                            fontSize: 20, color: 'red', fontWeight: '500', marginTop: 100,
                            marginBottom: 50
                        }}>
                            No visit for the day..! Add your visits..</p>
                    ) : (
                        <>
                            <CustomerDetails
                                customerData={customerData}
                            />
                        </>
                    )}
                    <AddCustomersButton
                        handleOpen={handleOpen}
                        handleClose={handleClose}
                        handleSave={handleSave}
                        open={open}
                        setName={setName}
                        name={name}
                        setMobileNumber={setMobileNumber}
                        mobileNumber={mobileNumber}
                        setLatitude={setLatitude}
                        latitude={latitude}
                        setLongitude={setLongitude}
                        longitude={longitude}
                        customerData={customerData}
                        setCustomerData={setCustomerData}
                    />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                        <Button style={{ backgroundColor: '#bc7715', color: 'white', margin: 5 }} onClick={() => onClickStart()}>
                            <p>Start Visit</p>
                        </Button>
                        <Button style={{ backgroundColor: '#bc7715', color: 'white', margin: 5 }} onClick={() => onClickStop()}>
                            <p>Stop Visit</p>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
};


export default Homepage;



import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type CustomerCardProps = {
    name: string;
    mobileNumber: string;
};


const CustomerCard = ({ name, mobileNumber }: CustomerCardProps) => {

    useEffect(() => {
        // Update the card when the props change
        console.log('Selected customer:', name, mobileNumber);
    }, [name, mobileNumber]);

    return (
        <React.Fragment>
            <Card style={{ borderRadius: 18, borderColor: 'grey', height: 200, width: 300 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Name: {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Mobile Number: {mobileNumber}
                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    );
};

export default CustomerCard;


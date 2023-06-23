import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CustomersDataCard = ({ customer }: any) => {

    return (
        customer && (
            <React.Fragment>
                <Card style={{
                    marginBottom: 10, borderWidth: 1, borderColor: 'lightgray',
                    backgroundColor: '#faf9fa', height: 150
                }}>
                    <CardContent>
                        <Typography gutterBottom style={{}}>
                            <span style={{ color: '#ed7562', fontWeight: '500' }}> Name: </span> {customer.name}
                        </Typography>
                        <Typography >
                            <span style={{ color: '#ed7562', fontWeight: '500' }}>Mobile Number:</span> {customer.mobileNumber}
                        </Typography>
                    </CardContent>
                </Card>
            </React.Fragment>
        )
    );
};

export default CustomersDataCard;



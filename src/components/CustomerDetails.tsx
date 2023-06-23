import React from 'react';
import CustomersData from '../../public/CustomersData.json';
import CustomersDataCard from './CustomersDataCard';


const CustomerDetails = ({ customerData }: any) => {

    //console.log('Cus Data', customerData);

    return (
        <main>
            <div style={{ margin: 10 }}>
                <p style={{ fontSize: 20, fontWeight: '500', textAlign: 'center' }}>Your visit for the day</p>
            </div>
            <div style={{
                overflowY: 'scroll', scrollbarWidth: 'thin', maxHeight: 500,
                scrollbarColor: '#888 #f1f1f1',
                maxWidth: 335
            }}>
                {customerData?.map((customer: any, index: number) => (
                    <div key={index} style={{ margin: '0 10px' }}>
                        <CustomersDataCard
                            key={index}
                            customer={customer}
                        />
                    </div>
                ))

                }
            </div>
        </main>
    );
};

export default CustomerDetails;



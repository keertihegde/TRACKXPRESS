import React from 'react';
import dynamic from 'next/dynamic';


const Map = dynamic(() => import('./Map'), {
    ssr: false
});

export default Map;

import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker as LeafletMarker, Popup, TileLayer, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Marker } from 'leaflet';
import L from 'leaflet';
import MapInfo from '../components/MapInfo';
import { Button } from '@mui/material';

const Map = ({ customerData, startTracking }: { customerData: any[], startTracking: any }) => {

    // console.log('tracking started', startTracking);

    const [currentLocation, setCurrentLocation] = useState<[number, number] | null>(null);
    const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
    const [lineCoordinates, setLineCoordinates] = useState<[number, number] | null>(null);
    const [mapData, setMapData] = useState(null);

    const markerRef = useRef<Marker | null>(null);

    //console.log('CusData', selectedCustomer);

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation([latitude, longitude]);
            },
            (error) => {
                console.error('Error retrieving current location:', error);
            },
            {
                enableHighAccuracy: true,
            }
        );

        function calculateDistance({ lat1, lon1, lat2, lon2 }: any) {
            const R = 6371e3; // Earth's radius in meters
            const φ1 = (lat1 * Math.PI) / 180;
            const φ2 = (lat2 * Math.PI) / 180;
            const Δφ = ((lat2 - lat1) * Math.PI) / 180;
            const Δλ = ((lon2 - lon1) * Math.PI) / 180;

            const a =
                Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            const distance = R * c;
            return distance;
        }

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    const position = currentLocation || [12.953546992628835, 77.50460350594342];

    const handleMarkerClick = (customer: any) => {
        setSelectedCustomer(customer);
        setLineCoordinates(position);
    };



    return (
        <div style={{ marginRight: 10 }}>
            <MapContainer
                center={[12.953546992628835, 77.50460350594342]}
                zoom={13}
                style={{ height: '100vh', width: '1000px' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                />

                {currentLocation && (
                    <LeafletMarker position={position} ref={markerRef}>
                        <Popup>You are here!</Popup>
                    </LeafletMarker>
                )}

                {customerData?.map((client: any, index: number) => (
                    <LeafletMarker
                        key={index}
                        position={[client.latitude, client.longitude]}
                        eventHandlers={{
                            click: () => handleMarkerClick(client),
                        }}
                    >
                        <Popup>Today's duty - {client.name}</Popup>
                    </LeafletMarker>
                ))}

                {customerData?.map((client: any, index: number) => (
                    <MapInfo selectedCustomer={selectedCustomer}
                        client={client}
                        key={index}
                        currentLocation={currentLocation}
                        startTracking={startTracking}
                    />
                ))}

            </MapContainer>
        </div>
    );
};

export default Map;

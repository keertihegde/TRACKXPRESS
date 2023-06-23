import React, { useEffect, useRef, useState } from 'react';
import { useMap } from 'react-leaflet';
import 'leaflet-routing-machine';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const MapInfo = ({ selectedCustomer, currentLocation, startTracking, onDataReceived }: any) => {
    const map = useMap();
    const [routingControl, setRoutingControl] = useState<L.Routing.Control | null>(null);
    const currentLocationMarkerRef = useRef<L.CircleMarker | null>(null);

    //console.log('tracking startedddd', startTracking);

    useEffect(() => {
        const start = L.latLng(currentLocation);
        const end = selectedCustomer ? L.latLng(selectedCustomer.latitude, selectedCustomer.longitude) : null;

        if (currentLocationMarkerRef.current) {
            currentLocationMarkerRef.current.setLatLng(start);
        }

        if (routingControl) {
            routingControl.getPlan().setWaypoints([]);
            routingControl.remove();
        }

        if (end) {
            const control = L.Routing.control({
                waypoints: [start, end],
                routeWhileDragging: false,
                show: true,
                createMarker: function () {
                    return null;
                },
                lineOptions: {
                    styles: [{ color: 'red', opacity: 0.6, weight: 4 }],
                },
                summaryTemplate: function (data: any) {
                    const panelWidth = '100px';
                    const panelHeight = '100px';

                    return `
            <div style="width: ${panelWidth}; height: ${panelHeight};">
              <p>Total Distance: ${data.summary.totalDistance} meters</p>
              <button onclick="cancelRoute()">Cancel Root</button>
            </div> 
          `;
                },
            }).addTo(map);

            setRoutingControl(control);

            (window as any).cancelRoute = function () {
                if (routingControl) {
                    control.getPlan().setWaypoints([]);
                }
            };
        }
    }, [selectedCustomer, map]);

    useEffect(() => {
        if (startTracking) {
            const timer = setInterval(() => {
                const latitude = currentLocation[0];
                const longitude = currentLocation[1];
                console.log('Latitudeee:', latitude);
                console.log('Longitudeee:', longitude);
            }, 10000);

            return () => {
                clearInterval(timer);
                if (routingControl) {
                    routingControl.getPlan().setWaypoints([]);
                }
            };
        }
    }, [startTracking, currentLocation, routingControl]);



    return null;
};

export default MapInfo;

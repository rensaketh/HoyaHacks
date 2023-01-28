import React, { useState, useEffect } from 'react';
import L from 'leaflet';

const LeafletMap = () => {
    const [map, setMap] = useState(null);

    useEffect(() => {
        setMap(
            L.map('map').setView([51.505, -0.09], 13)
        );
    }, []);

    return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default LeafletMap;
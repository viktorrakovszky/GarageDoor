// src/ControllerPage.js
import React, { useState, useEffect } from 'react';
import './ControllerPage.css';

const ControllerPage = () => {
    const [doorStatus, setDoorStatus] = useState('closed'); // Initial status

    const handleFullOpen = () => {
        console.log('Teljes Nyitás clicked');
        setDoorStatus('open'); // Set status to open
    };

    const handlePedestrianOpen = () => {
        console.log('Gyalogos nyitás clicked');
        setDoorStatus('open'); // Set status to open
    };

    const handleClose = () => {
        console.log('Zárás clicked');
        setDoorStatus('closed'); // Set status to closed
    };

    const [location, setLocation] = useState({ lat: null, lng: null });

    useEffect(() => {
        // Fetch the user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error("Error fetching location:", error);
                }
            );
        }
    }, []);

    return (
        <div className="controller-container">
            <h2>Controller Page</h2>
            <div className="button-container">
                <button onClick={handleFullOpen}>Teljes Nyitás</button>
                <button onClick={handlePedestrianOpen}>Gyalogos nyitás</button>
                <button onClick={handleClose}>Zárás</button>
            </div>
            <div className={`status-indicator ${doorStatus === 'open' ? 'green' : 'red'}`}>
                {doorStatus === 'open' ? 'Garage Door is Open' : 'Garage Door is Closed'}
            </div>
            <div className="map">
                {/* Placeholder map (replace with actual map integration later) */}
                {location.lat && location.lng ? (
                    <iframe
                        title="user-location"
                        src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
                        width="100%"
                        height="300px"
                    ></iframe>
                ) : (
                    <p>Loading map...</p>
                )}
            </div>
        </div>
    );
};

export default ControllerPage;

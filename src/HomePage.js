import carlogo from './assets/carlogo.png';
import doorlogo from './assets/doorlogo.jpg';
import React, { useEffect, useState } from "react";
import './HomePage.css';
import HamburgerMenu from './Hamburgermenu';

const HomePage = () => {

    const [reset, setReset] = useState(false); // State to toggle and trigger animation reset

    // Toggle the reset state when "Home" is clicked
    const resetAnimation = () => {
        setReset(prev => !prev);
        closeSidebar(); // Close the sidebar when resetting
    };

    // Close the sidebar
    const closeSidebar = () => {
        const sidebar = document.getElementById('sidebar');
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    };

    useEffect(() => {
        const car = document.querySelector('.car');
        const door = document.querySelector('.door');

        if (car && door) {
            // Remove previous animation classes to reset them
            car.classList.remove('move-up', 'move-upper');
            door.classList.remove('open', 'close');

            // Start the animation sequence with new delays
            setTimeout(() => {
                car.classList.add('move-up');
            }, 1000);

            setTimeout(() => {
                door.classList.add('open');
            }, 2000);

            setTimeout(() => {
                car.classList.add('move-upper');
            }, 3500);

            setTimeout(() => {
                door.classList.add('close');
            }, 4500);
        }
    }, [reset]);

    const toggleSidebar = () => {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('active');
    };       


    return (
        <div>
            <HamburgerMenu />
            <h1> Üdvözöllek a NextGen GarageDoor alkalmazásban!</h1>
            <div className="blue-circle"></div>
            <img src={doorlogo} className="door" alt="door" />
            <img src={carlogo} className="car" alt="car" />  
        </div>
        
    );
};
export default HomePage;
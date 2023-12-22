import React, { useState, useEffect } from "react";
import { IoContrast, IoContrastOutline } from "react-icons/io5";
import './toggleThemeBtn.css';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkMode);
    }, [isDarkMode]);

    const ToggleIcon = isDarkMode ? IoContrast : IoContrastOutline;

    return (
        <div className="theme-toggle-container">
            <button 
                id='theme-toggle-btn'
                onClick={toggleTheme}>
                <ToggleIcon size={24} />
            </button>
        </div>
    );
}
 
export default ThemeToggle;
import React, { useState } from 'react';
import './Themes.scss';
import config from '../../utils/config';

function ToggleThemes() {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || config.defaultTheme);

    document.querySelector('body').className = theme;

    function toggleOn() {
        const style = setTheme(theme === 'dark' ? 'light' : 'dark');
        const currentTheme = document.querySelector('body').className === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', JSON.stringify(currentTheme));
        return style;
    }

    return (
        <button className='toggleButton' onClick={ () => toggleOn() }>
            {theme}
        </button>
    );
}

export default ToggleThemes;

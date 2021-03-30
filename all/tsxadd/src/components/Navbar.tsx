import React from 'react';

export const Navbar:React.FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper purple darken-2 px1">
                <a href="/" className="brand-logo">React + TS</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="sass.html">Список дел</a></li>
                    <li><a href="badges.html">Информация</a></li>
                    
                </ul>
            </div>
        </nav>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <div>
            <nav>
                <ul>
                <li><Link to="#">UI Design</Link></li>
                <li><Link to="#">Front-end</Link></li>
                <li><Link to="#">Back-end</Link></li>
                <li><Link to="#">Lainnya</Link></li>
                </ul>
            </nav>
        </div>
    );
};
export default Navigation;
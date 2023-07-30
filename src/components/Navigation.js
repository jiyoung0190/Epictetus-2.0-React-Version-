import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <nav>
            <ul>
              <li><Link to="#">UI Design</Link></li>
              <li><Link to="#">Front-end</Link></li>
              <li><Link to="#">Back-end</Link></li>
              <li><Link to="#">Lainnya</Link></li>
            </ul>
        </nav>
    );
};
export default Navigation;
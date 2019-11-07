import React from 'react';
import './Sidebar.css';

class Sidebar extends React.Component {
    render() {
        return(
            <div className='sidebar'>
            <ul id="menu">
                <li className="ui-state-disabled">
                    <div>Помощь</div>
                </li>
                <li>
                    <div>Аллергия</div>
                </li>
                <li>
                    <div>Корм</div>
                </li>
                <li>
                    <div>Советы по уходу</div>
                </li>
            </ul>
            </div>
        )
    }
}

export default Sidebar;
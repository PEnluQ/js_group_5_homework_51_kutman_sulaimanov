import React from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import './Sidebar.css';

class Sidebar extends React.Component {
    render() {
        return(
            <div>
                <ListGroup className='sidebar'>
                    <ListGroupItem color='warning' active tag="a" href="#" action>Помощь</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Поликлиника</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Аллергия</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Еда</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default Sidebar;
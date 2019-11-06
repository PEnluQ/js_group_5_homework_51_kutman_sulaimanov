import React from 'react';
import {Button, Card, CardBody, CardImg, CardText} from "reactstrap";
import './Content.css';


class Content extends React.Component {
    render(){
            return (
                <div className='card-animals'>
                    <Card>
                        <CardImg top width="100%" src={this.props.img} alt="animal"/>
                        <CardBody className='card-body'>
                            <h3>{this.props.name}</h3>
                            <CardText>{this.props.text}</CardText>
                            <Button color='success'>Купить</Button>
                        </CardBody>
                    </Card>
                </div>
            )
        }
}

export default Content;
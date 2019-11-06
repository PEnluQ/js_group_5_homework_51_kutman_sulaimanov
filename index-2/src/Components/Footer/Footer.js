import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return(
            <div className='footer'>
                <h6>PetShop@</h6>
                <p>Все права защищены 2019</p>
                <p className='number'>+996700064466</p>
            </div>
        )
    }
}

export default Footer;
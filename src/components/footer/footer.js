import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';
import telegram from '../../assets/img/telegram.png';

import  './footer.css';

class Footer extends Component {
    state = {
    };

    render() {

        return <footer className="footer d-flex w-100 index-footer" style={this.props.page === 'index' ? {background: 'transporent'} : {background: '#000'} }>
            <p className="coords">Pokrovka, 2/1-1, Moscow</p>
            <Link to="https://t.me/tacosytragos" target="_blank">
                <img src={telegram} alt="telegram" />
            </Link>
            <Link to="https://www.instagram.com/veladora.moscu/" target="_blank">
                <img src={instagram} alt="instagram" />
            </Link>
            <Link to="https://www.facebook.com/veladora.moscu/" target="_blank">
                <img src={facebook} alt="facebook" />
            </Link>
        </footer>
    }

}

export default Footer;

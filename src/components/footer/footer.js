import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import facebook from '../../assets/img/facebook.svg';
import instagram from '../../assets/img/instagram.svg';
import telegram from '../../assets/img/telegram.svg';

import  './footer.css';

class Footer extends Component {
    state = {
        page: this.props.page
    };

    render() {

        return <footer className={"footer d-flex w-100 " + this.state.page}>
            <p className="coords" >Pokrovka, 2/1-1, Moscow</p>
            <Link to="https://t.me/tacosytragos" target="_blank" className="firstLink">
                <img src={telegram} alt="telegram" />
            </Link>
            <Link to="https://www.instagram.com/veladora.moscu/" target="_blank">
                <img src={instagram} alt="instagram" />
            </Link>
            <Link to="https://www.facebook.com/veladora.moscu/" target="_blank" className="lastLink">
                <img src={facebook} alt="facebook" />
            </Link>
        </footer>
    }

}

export default Footer;

import React, { Component } from 'react';
import {Row} from 'react-bootstrap';

import  './map.css';


class Map extends Component {
    state = {
    };

    render() {
        return <Row className="screen">
                <div className="map w-100" id="map">
                    <iframe width='100%' height='100%' style={{ minHeight:'700px' }} frameBorder='0' src='https://api.mapbox.com/styles/v1/alantemiraevson/cjosq0kem2w1q2ro4nc2qyykq.html?fresh=true&title=true&access_token=pk.eyJ1IjoiYWxhbnRlbWlyYWV2c29uIiwiYSI6ImNqMWRsbzNkOTAwMXQyeHFqZnI0b3RvcWsifQ.1YnvfdRHPlonbD1Fp-54wQ#16.09/55.757274/37.633557/1' title="mapBox"></iframe>
                    <div className="map-label">
                        <p className="label">location</p>
                        <p className="h1">Pokrovka, 2/1-1, Moscow</p>
                        <p className="desktop">Follow the green snake</p>
                        <p className="mobile directions">Entrance through the arch in Starosadsky Lane, z – to the left until the end of the yard</p>
                    </div>
                </div>
            </Row>
    }
}

export default Map;

import React, { Component } from 'react';
import ReactMapboxGl, { Marker, ZoomControl } from "react-mapbox-gl";
import { Row } from 'react-bootstrap';

import  './map.css';

import image from '../../assets/img/mapPinter.svg';

const cw = window.innerWidth;
const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZ3JpZ2lyaXkiLCJhIjoiY2p0N2Fudzd6MHB6aDN5cXoybzBhdTNiMCJ9.ZM_816Y272AQA0g8anxpyw",
  scrollZoom: false,
});


class MapBlock extends Component {
    state = {
        mobile: cw < 1024 ? true : false
    };


    render() {
        let style="mapbox://styles/mapbox/dark-v9";
        let height = !this.state.mobile ? '85vh' : '30vh';
        let zoom = !this.state.mobile ? [17] : [15];

        return <Row>
                <div className="map w-100" id="map">
                    <Map
                      style={ style }
                      center={[37.6383, 55.7582]}
                      zoom={ zoom }
                      containerStyle={{
                        height: height,
                        width: "100vw",
                        marginLeft: "15px"
                      }}
                      >
                        <Marker
                          coordinates={[37.64, 55.7581]}
                          anchor="bottom">
                          <img src={image} alt="veladora" />
                        </Marker>
                        <ZoomControl />
                    </Map>
                    <div className="map-label" id={height}>
                        <p className="label">location</p>
                        <p className="h1">Pokrovka, 2/1-1, Moscow</p>
                        <p className="desktop">Follow the green snake</p>
                        <p className="mobile directions">Entrance through the arch in Starosadsky Lane, z – to the left until the end of the yard</p>
                    </div>
                </div>
            </Row>
    }
}

export default MapBlock;

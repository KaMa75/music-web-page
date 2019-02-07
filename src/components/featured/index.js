import React, { Component } from 'react';
import Carrousel from './Carrousel';

class Featured extends Component {
    render() {
        return (
            <div style={{position: 'relative'}}>

                <Carrousel/>

                <div className="artist_name">
                    <div className="wrapper">
                        Ariana Grande
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;
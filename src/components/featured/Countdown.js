import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends Component {

    state = {

    }

    render() {
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event starts in
                    </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                14
                            </div>
                            <div className="countdown_tag">
                                Days
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                5
                            </div>
                            <div className="countdown_tag">
                                Hrs
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                34
                            </div>
                            <div className="countdown_tag">
                                Mins
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                55
                            </div>
                            <div className="countdown_tag">
                                Secs
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Slide>
        );
    }
}

export default Countdown;
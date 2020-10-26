import React, { Component } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import Img1 from '../../images/mainpage1.jpg';
export default class banner extends Component {
    render() {
        return (
            <section className="slider" id="home">
                <ul className="slides">
                    <li>
                        <img src={Img1} alt="vacation"/>
                        <div className="caption right-align">
                            <h2></h2>
                        </div>
                    </li>
                </ul>
                
            </section>
        )
    }
}

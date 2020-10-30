import React, { Component } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import Img1 from '../../images/consulting_pic1.jpg';
import Img2 from '../../images/consulting_pic2.jpg';
import { Link } from "react-router-dom"
import './banner.css';


export default class banner extends Component {
    render() {
        return (
            <section className="slider" id="home">
                <ul className="slides">
                    <li>
                        <img src={Img1} alt="vacation"/>
                        <div className="caption right-align">
                            <h2 className="black-text text-darken-2">효율적인 절세 방법</h2>
                            <h2>우리에게 맡기세요!</h2>
                            <Link to="#" className="btn btn-large pink">눌러보기</Link>
                        </div>
                    </li>
                    <li>
                        <img src={Img2} alt="vacation"/>
                        <div className="caption left-align">
                            <h2>효율적인 절세 방법</h2>
                            <h2>우리에게 맡기세요!</h2>
                            <Link to="#" className="btn btn-large green">눌러보기</Link>
                        </div>
                    </li>
                    
                </ul>
                
            </section>
        )
    }
}

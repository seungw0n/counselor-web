
import React, {Component} from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';




const  SmoothScroll = () => {
    return(
        <section>
            <div className="navbar-fixed">
                <nav className="grey darken-3">
                    <div className="container">
                        <div className="nav-wrapper">
                            <AnchorLink href="!#" className="brand-logo">COUNSEOLOR</AnchorLink>
                            <AnchorLink href="!#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></AnchorLink>
                            <ul className="right hide-on-med-and-down">
                                <li><AnchorLink href="/home">HOME</AnchorLink></li>
                                <li><AnchorLink href="/AIConsulting">AI Consulting</AnchorLink></li>
                                <li><AnchorLink href="/Blog">Blog</AnchorLink></li>
                                <li><AnchorLink href="/Reference">Customer</AnchorLink></li>
                                <li><AnchorLink href="/Contact">About us</AnchorLink></li>
                                <li><AnchorLink className="waves-effect waves-light btn-large" href="/login">Login</AnchorLink></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <ul className="sidenav" id="mobile-demo">
                <li><AnchorLink href="/home">HOME</AnchorLink></li>
                <li><AnchorLink href="/AIConsulting">AI Consulting</AnchorLink></li>
                <li><AnchorLink href="/Blog">Blog</AnchorLink></li>
                <li><AnchorLink href="/Reference">Customer</AnchorLink></li>
                <li><AnchorLink href="/Contact">About us</AnchorLink></li>
                <li><AnchorLink className="waves-effect waves-light btn-large" href="/login">Login</AnchorLink></li>
                                
            </ul>
        </section>
    )
}







export default class Navbar extends Component{
   render() {
       return(
           <div>
               <SmoothScroll/>
           </div>
       )
   }
}



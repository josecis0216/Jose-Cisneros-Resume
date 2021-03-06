import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-fixed-top">
                <Link className="navbar-brand" to="/" >JFC</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#experience">Experience </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">
                        Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Me <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin">Admin<span className="sr-only">(current)</span></Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

  
export default Nav;

import React from 'react';
import './index.css';
import { NavLink  } from 'react-router-dom';
import Drawer from 'rc-drawer';
import {
    BrowserView,
    MobileView,
} from "react-device-detect";

const Menu = () => {

    return(
        <div>
            <BrowserView>
        <div className="main-menu" id="main-menu">
			<ul className="main-menu-list">
                <li>
                    <NavLink to="/cv" className="link-home" exact activeClassName="menuActive"> Home</NavLink>
                </li>
                <li>
                    <NavLink to="/cv/resume" className="link-page" exact  activeClassName="menuActive">Resume</NavLink>
                </li>
                <li>
                    <NavLink to="/cv/skills" className="link-page" exact  activeClassName="menuActive">Skills</NavLink>
                </li>
                <li>
                    <NavLink to="/cv/portfolio" className="link-page" exact  activeClassName="menuActive">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/cv/contact" className="link-page" exact  activeClassName="menuActive">Contact</NavLink>
                </li>
			</ul>
		</div>
        </BrowserView>
        <MobileView>
            <Drawer width="50vw" placement="right" >
                <ul style={{listStyle: 'none', padding: '0px'}}>
                    <li className="nav-link" >
                        <NavLink to="/cv" classNameName="link-home" exact activeclassNameName="menuActive"> Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-link" >
                        <NavLink to="/cv/resume" classNameName="link-page" exact  activeclassNameName="menuActive">Resume</NavLink>
                    </li>
                    <li className="nav-link" >
                        <NavLink to="/cv/skills" classNameName="link-page" exact  activeclassNameName="menuActive">Skills</NavLink>
                    </li>
                    <li className="nav-link" >
                        <NavLink to="/cv/portfolio" classNameName="link-page" exact  activeclassNameName="menuActive">Portfolio</NavLink>
                    </li>
                    <li className="nav-link" >
                        <NavLink to="/cv/contact" classNameName="link-page" exact  activeclassNameName="menuActive">Contact</NavLink>
                    </li>
                </ul>
            </Drawer>
        </MobileView>
        </div>
        
    );
}

export default Menu;
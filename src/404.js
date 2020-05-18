import React from 'react';
import { NavLink  } from 'react-router-dom';
import './404.css';

const PageNotFound = () => {

    return(
        <div>
            <div className="c">
                <div className="_404">404</div>
                <hr />
                <div className="_1">THE PAGE</div>
                <div className="_2">WAS NOT FOUND</div>
                    <NavLink to="/cv" className="golink-home" exact activeClassName="menuActive"> GO BACK HOME</NavLink>
            </div>
        </div>
    )

}

export default PageNotFound;
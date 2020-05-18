import React, { useState, useEffect  } from 'react';
import './index.css';

const Loader = () => {
    const [loader, setLoader] = useState({
        fade : 'fadeIn',
        loaderName : '',
        loaderJob : '',
        loaderAnimation : '',
        loading : true,
    });

    const { fade, loaderName, loaderJob, loaderAnimation, loading } = loader;

    useEffect(() => {
        setTimeout(() => {
            setLoader({
                fade : '',
                loaderName : 'loader-left',
                loaderJob : 'loader-right',
                loaderAnimation : 'loader-hide',
                loading: false,
            })
          }, 1000);
    },[loader])

    return(

        <div className={"loader-container " + fade}  id="page-loader" style={{display: loading ? '' : 'none'}}> 
            <div className="loading-wrapper">
                <div className={"loader-animation " + loaderAnimation} id="loader-animation">
                    <span className="loader"><span className="loader-inner"></span></span>
                </div>    
                <div className={"loader-name " + loaderName} id="loader-name">
                    Serjo <strong>Lio</strong>
                </div>
                <p className={"loader-job " + loaderJob} id="loader-job">Web Developer</p>
            </div>   
        </div>
    );
}

export default Loader;
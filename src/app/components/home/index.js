import React, { useState } from 'react';
import grad_pic from '../../../assets/img/grad_pic.jpg';
import pic from '../../../assets/img/pic.jpg';
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiOutlineGithub, AiFillTwitterCircle, AiTwotoneMail, AiFillPhone } from "react-icons/ai";
import Typewriter from 'typewriter-effect';
import './index.css'

const Home = () => {

    const [ section, setSection ] = useState('');

    setTimeout(() => {
        setSection('section-page-active')
    }, 100);

    return(
        <div className={"section-vcardbody text-home section-page " + section} id="section-home">
			<div className="vcard-profile-pic">
				<img src={grad_pic} id="profile2"  alt=""/>
				<img src={pic} id="profile1" className="profileActive" alt=""/>
			</div>
			<div className="vcard-profile-description">
				<h1 className="profile-title">Hey, I'm <span className="color1">Serjo!</span></h1>
				<h2 className="profile-subtitle">
                <Typewriter
                    options={{
                        strings: ['Web Developer', 'Freelancer' ,'Fun and ...', 'Loving!'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </h2>

				<div className="vcard-footer">
                    {/* <i style="color: black;font-weight: 300;font-size: 12px">Manila Philippines</i> */}
                    <div className="footer-social-icons">
                        <a href="https://www.instagram.com/your__reaper/?hl=en"><AiFillInstagram /></a>
                        <a href="https://www.facebook.com/serjo.lio?ref=tn_tnmn"><AiFillFacebook /></a>
                        <a href="https://twitter.com/your_Reap3r"><AiFillTwitterCircle /></a>
                        <a href="https://www.linkedin.com/in/sergio-lio-b99586107/"><AiFillLinkedin /></a>
                        <a href="https://github.com/skitband"><AiOutlineGithub /></a>
                    </div>
                </div>
			</div>
            <div>
				<hr className="hr1" />
				<div className="vcard-profile-description-feature">
					<div className="vcard-profile-description-ft-item">
						<p>
                        <AiTwotoneMail /> <a href="mailto:sergiomanuellio@gmail.com?Subject=Hello%20Serjo" target="_top" style={{color: '#fff', textDecoration: 'underline'}}>sergiomanuellio@gmail.com</a> 
                        <br /> 
                        <AiFillPhone /> +639279420308
                        </p>
					</div>
				</div>
				<div className="vcard-profile-description-text">
					<p>A professional Web Developer. With atleast 5+ years of experience in the field of web development. </p>
					<p>Looking for a interesting projects to apply my knowledge and skills while building up and growing your business.</p>
					<p>Give me a call... <AiFillPhone /></p>
				</div>
		    </div>
        </div>
    )
}

export default Home;
import React, { useState } from 'react';
import styles from './contact.module.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import ContactForm from './contactForm.js';

const Contact = () => {

    const [ section, setSection ] = useState('');

    setTimeout(() => {
        setSection('section-page-active')
    }, 100);

    return(
        <div className={"section-vcardbody text-contact section-page " + section} id="page-contact">
            <div className="section-contact">
                {/* <div className="map">
                    <div className="map-overlay"></div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3678211349943!2d121.02021211484!3d14.57810478981684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9b0a6412981%3A0xc053819ec37a9789!2sM.+Aleataz%2C+Mandaluyong%2C+Metro+Manila!5e0!3m2!1sen!2sph!4v1533818661362" 
                        height="250" 
                        className={styles.gmap} 
                        allowfullscreen>
                    </iframe>
                </div>               */}
                <div className="contact-infos">
                    <h4 className="contact-subtitle-1"> <FaMapMarkerAlt /> Address</h4>
                    <p>447 M.Alcaraz St. Brgy Vergara Mandaluyong City Philippines 1551</p>
                    <h4 className="contact-subtitle-1"> <FaRegEnvelope /> Email & Contact No.</h4>
                    <p><a href="mailto:sergiomanuellio@gmail.com?Subject=Hello%20Serjo" target="_top" className={styles.emailText}>sergiomanuellio@gmail.com</a> | +639279420308</p>
                </div>
                <h4 className="contact-subtitle-1"> <FiSend /> Send Me a Message</h4>
                <ContactForm />
                <p className="footer-quote text-center"><strong>"Move fast and break things. Unless you are breaking stuff, you are not moving fast enough."</strong> <br/><br/><i style={{float: 'right'}}>- Mark Zuckerberg</i></p>
            </div>			
        </div>
        
    )
}

export default Contact;
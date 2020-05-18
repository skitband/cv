import React, { useState } from 'react';
import './index.css';
import { AiOutlineCloudDownload } from "react-icons/ai";

const Resume = () => {
    
    const [ section, setSection ] = useState('');

    setTimeout(() => {
        setSection('section-page-active')
    }, 100);

    return (

        <div className={"section-vcardbody section-page text-resume " + section} id="section-resume">
			<div className="section-education">
	            <div className="resume-buttons header-page-buttons">
					<a href="CV2020-new.pdf" className="btn btn-default btn-default2" download><AiOutlineCloudDownload />&nbsp; Download my resume</a>
	            </div>
				<h2 className="section-title2"><i className="fa fa-university"></i>&nbsp; Education & Trainings</h2>

				<div className="resume-item">
                  	<h3 className="section-item-title-1">Jose Rizal University</h3>
                  	<h4 className="graduation-time">Bachelor of Science in Information Technology</h4>
                  	<div className="graduation-description">
                        <ul className="timeline">
                            <li>
                                <b>2019 - September</b>
                                <br />
                                <b>Basic & Fundamentals of Python</b>
                                <p>Basic of python programming.</p>
                            </li>
                            <li>
                                <b>2018 - February</b>
                                <br />
                                <b>Web Development with Laravel</b>
                                <p>Intro to Laravel framework for artisan.</p>
                            </li>
                            <li>
                                <b>2017 - March</b>
                                <br />
                                <b>Basic and Advance PHP</b>
                                <p>From basic to advance PHP programming.</p>
                            </li>
                            <li>
                                <b>2013 - March</b>
                                <br />
                                Training on Leadership
                            </li>
                            <li>
                                <b>2013 - June</b>
                                <br />
                                Data Security
                            </li>
                            <li>
                                <b>2012 - January</b>
                                <br />
                                I.T Infrastructure
                            </li>
                            <li>
                                <b>2012 - February</b>
                                <br />
                                Network Infrastructure in a BPO Company
                            </li>
                        </ul>
                  	</div>
				</div>
			</div>
			<div className="section-education">

	            <h2 className="section-title2"><i className="fa fa-flag"></i>&nbsp; Work Experiences</h2>
				<div className="resume-item">
                  	<h3 className="section-item-title-1">TraxionTech</h3>
                  	<h4 className="job">Web Developer - <span className="job-date">2018 - Present</span></h4>
                  	<div className="graduation-description">
                  	  <p>- Enhanced backend module services and improve existing API.</p>
                  	  <p>- Maintain code versioning using SSH, and GIT version control.</p>
                  	  <p>- Send and review daily scrum report. For day to day task. JIRA reporting.</p>
                  	  <p>- Improve frontend structure and module according to project manager request.</p>
                  	  <p>- Create support documentation for all new applications.</p>
                  	  <p>- Create prototyping or mockup for the each system module.</p>
                  	  <p>- Evaluate code to ensure that it is valid, is properly aligned and compatible with different browsers, devices, or operating systems. And meets industry standards.</p>
                  	</div>
				</div>
				<div className="resume-item">
                  	<h3 className="section-item-title-1">MAA General Assurance Phils., Inc.</h3>
                  	<h4 className="job">Programmer - <span className="job-date">Sep 2015 - Aug 2018</span></h4>
                  	<div className="graduation-description">
                  	    <p>- Building PHP web applications using CI/Laravel based frameworks.</p>
						<p>- Planning and conducting cross-browser usability testing against W3C.</p>
						<p>- Provide technical support for software reconfigurations to aid in function
						customization.</p>
						<p>- Developing advanced database driven websites & systems including in-house applications.</p>
						<p>- Testing and validating work produced as part of the development process.</p>
						<p>- Create support documentation for all new applications.</p>
						<p>- Back end development and maintenance of websites using PHP and MySQL.</p>
                  	</div>
				</div>
				<div className="resume-item">
                  	<h3 className="section-item-title-1">DG3 Idocs</h3>
                  	<h4 className="job">EDGAR Specialist - <span className="job-date">Dec 2014 - Apr 2015</span></h4>
                  	<div className="graduation-description">
                  	    <p>- PDF to HTML conversion.</p>
						<p>- HTML web styling.</p>
						<p>- Uploading of documents converted to EDGAR system.</p>
						<p>- XML and HTML.</p>
                  	</div>
				</div>
				<div className="resume-item">
                  	<h3 className="section-item-title-1">Pinoy Glass Blowing Inc.</h3>
                  	<h4 className="job">Junior Programmer - <span className="job-date">Jun 2013 - Dec 2014</span></h4>
                  	<div className="graduation-description">
                  	  <p>- Interact with the senior software developers and clients to understand the exact nature of programs required for the software Updating and archiving of hardware and software inventory.</p>
                  	  <p>- Adding, Updating and Removing of Users on system web application.</p>
                  	  <p>- Developing advanced database driven websites & systems including in-house applications.</p>
                  	  <p>- Code the program within the systems and conduct test runs. Validate if the tests results match with the expected ones.</p>
                  	  <p>- Maintaining and updating of in-house system applications according to user and senior developer wants.</p>
                  	</div>
				</div>
			</div>

			{/* <h2 className="section-title2"><i className="fa fa-commenting"></i>&nbsp; Testimonials</h2> */}

			{/* <div className="testimonials">
				<div className="testimonial-slides" id="testimonial-carousel">
					<div className="testimonial-item">
						<div className="testimonial-content">
							<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing leo. Aenean eget."</p>
						</div>						
						<div className="testimonial-credits">
							<div className="testimonial-picture">
								<img src="img/team2.jpg" alt=""/>
							</div>						
							<p className="testimonial-author">Melissa Alvarez</p>
							<p className="testimonial-firm">Trexus Co.</p>
						</div>							
					</div>
					<div className="testimonial-item">
						<div className="testimonial-content">
							<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing leo. Aenean eget."</p>
						</div>						
						<div className="testimonial-credits">
							<div className="testimonial-picture">
								<img src="img/team1.jpg" alt=""/>
							</div>						
							<p className="testimonial-author">John Rex</p>
							<p className="testimonial-firm">DotRex Co.</p>
						</div>							
					</div>
					<div className="testimonial-item">
						<div className="testimonial-content">
							<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing leo. Aenean eget."</p>
						</div>						
						<div className="testimonial-credits">
							<div className="testimonial-picture">
								<img src="img/team3.jpg" alt=""/>
							</div>					
							<p className="testimonial-author">Jhonathan Smith</p>
							<p className="testimonial-firm">RedWings Co.</p>
						</div>								
					</div>
				</div>
			</div> */}
				
			<div className="page-footer">
	            <div className="resume-buttons">
                <a href="CV2020-new.pdf" className="btn btn-default btn-default2" download><AiOutlineCloudDownload />&nbsp; Download my resume</a>
					{/* <a href="#page-contact" className="btn btn-default btn-default2 link-page"><i className="fa fa-download"></i>&nbsp;  Get in Touch</a> */}
	            </div>
	            <p className="footer-quote text-center"><strong>"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."</strong> <br/><i>- Martin Fowler</i></p>
			</div>			
			 
		</div>
    )
}

export default Resume;
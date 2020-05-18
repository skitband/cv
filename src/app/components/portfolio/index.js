import React, { useState } from 'react';
import './index.css';
import gava from '../../../assets/img/portfolio/gava.png';
import dbtk from '../../../assets/img/portfolio/dbtk.png';
import traxion from '../../../assets/img/portfolio/traxion.png';

const Portfolio = () => {

    const [ section, setSection ] = useState('');

    setTimeout(() => {
        setSection('section-page-active')
    }, 100);

    return(
        
        <div className={"section-vcardbody section-page text-portfolio " + section} id="page-portfolio">
			<div className="section-portfolio">
				<div className="projects-list">
					<div className="project-item">
						<a href="https://www.gavagives.tech/" target="_blank" rel="noopener noreferrer" className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{backgroundImage: `url(${gava})`}}>
							<div className="project-description-wrapper">
								<div className="project-description">
									<h2 className="project-title">GavaGives</h2>
									<span className="see-more">No. 1 Crowdfunding Platform in the Philippines</span>
								</div>
							</div>
						</a>
					</div>
					<div className="project-item">
						<a href="https://dbtkco.com/" target="_blank" rel="noopener noreferrer" className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{backgroundImage: `url(${dbtk})`}}>
							<div className="project-description-wrapper">
								<div className="project-description">
									<h2 className="project-title">DBTK</h2>
									<span className="see-more">Dont Blame The Kids Apparel</span>
								</div>
							</div>
						</a>
					</div>			
					<br />
					<div className="project-item">
						<a href="https://traxiontech.net/" target="_blank" rel="noopener noreferrer" className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{backgroundImage: `url(${traxion})`}}>
							<div className="project-description-wrapper">
								<div className="project-description">
									<h2 className="project-title">Traxion</h2>
									<span className="see-more">Transforming Transaction Management with Blockcahin Technology</span>
								</div>
							</div>
						</a>
					</div>			
					<br />
				</div>
			</div>			
		</div>
    )
}

export default Portfolio;
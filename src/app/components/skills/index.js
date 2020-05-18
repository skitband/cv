import React, { useState } from 'react';
import './index.css';
import { FaReact, FaSass, FaLinux, FaAws, FaVuejs, FaPython, FaAngular, FaGitAlt, FaWordpress, FaNode } from "react-icons/fa";
import { DiJqueryLogo, DiPhotoshop } from "react-icons/di";
import SkillBar from 'react-skills-bars';

const Skills = () => {

    const [ section, setSection ] = useState('');

    const mySkills = [
        {
            "type": "PHP",
            "level": 70,
            "color": {
              "bar": "#1c5e80",
              "title": {
                "text": "#ffffff",
                "background": "#111111"
              }
            }
        },
        {
            "type": "Python",
            "level": 50,
            "color": {
              "bar": "#397f95",
              "title": {
                "text": "#ffffff",
                "background": "#111111"
              }
            }
        },
        {
            "type": "Javascript",
            "level": 60,
            "color": {
              "bar": "#62aeb2",
              "title": {
                "text": "#ffffff",
                "background": "#111111"
              }
            }
        },
        {
            "type": "HTML5",
            "level": 80,
            "color": {
              "bar": "#1c5e80",
              "title": {
                "text": "#ffffff",
                "background": "#111111"
              }
            }
        },
        {
            "type": "MySQL",
            "level": 70,
            "color": {
              "bar": "#397f95",
              "title": {
                "text": "#ffffff",
                "background": "#111111"
              }
            }
        },
        {
            "type": "API / JSON",
            "level": 60,
            "color": {
              "bar": "#62aeb2",
              "title": {
                "text": "#ffffff",
                "background": "#111111"
              }
            }
        },
    ]

    setTimeout(() => {
        setSection('section-page-active')
    }, 100);

    return(
        <div className={"section-vcardbody section-page text-skills " + section} id="page-skills">
			      <div className="section-skills" style={{marginTop: '-10px'}}>
                <ul className="experiences">
                    <li>Proficient in UI design, developed Front End using <b>JavaScript, ReactJs and VueJS</b> with knowledge in <b>NodeJS</b>.</li>
                    <li>Hands on experiences with MVC frameworks: <b>Laravel and Django</b>.</li>
                    <li>Experience in Test Driven Development (TDD) .</li>
                    <li>Experience in using bug/issue tracking, project Tracking and Management tool <b>JIRA</b>.</li>
                    <li>Proficient working on <b>WebService & REST API</b>.</li>
                    <li>Strong experience with data modeling, relational database, and database administration and queries. Specifically, experience utilizing <b>MySQL</b> and with experience in <b>NoSQL / MongoDB</b>.</li>
                    <li>Strong understanding with source control tools such as <b>Github/Bitbucket</b>.</li>
                    <li>Ability working with <b>Agile</b> technology.</li>
                    <li>Experience on deploying web application on <b>AWS, RDS</b>.</li>
                </ul>
                  <SkillBar skills={mySkills}></SkillBar>
                  <p><strong>Others:</strong> <br /><FaLinux /> | <FaPython/> | <FaAws /> | <FaReact /> |<FaNode /> |<FaVuejs /> | <FaAngular /> | <DiJqueryLogo /> | <FaSass /> | <FaGitAlt /> | <FaWordpress /> | <DiPhotoshop /></p>  
            </div>			
		    </div>
    )
}

export default Skills;
import React, { useRef, useState } from "react";
import CustomHook from "./CustomHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3, faJs, faAngular, faBootstrap } from '@fortawesome/free-brands-svg-icons';
const Skills = ()=>{
    const [listSkills] = useState([{
        name: 'HTML',
        des: 'HTML (HyperText Markup Language) is the standard language for creating and structuring content on the web. It uses a system of tags and attributes to define elements like headings, paragraphs, links, and images. HTML forms the backbone of web pages, enabling browsers to render and display content.',
        icon: faHtml5
    },
    {
        name: 'REACT',
        des: 'React is a JavaScript library for building user interfaces, particularly single-page applications with dynamic content. Developed by Facebook, it allows developers to create reusable UI components and manage application state efficiently. React uses a virtual DOM to optimize rendering and improve performance by only updating parts of the UI that have changed.',
        icon: faReact
    },
    {
        name: 'CSS',
        des: 'CSS3 is the latest version of the Cascading Style Sheets language, used for designing and styling web pages. It introduces advanced features such as animations, transitions, flexbox, and grid layouts, which enhance the presentation and responsiveness of web content. CSS3 allows for more sophisticated designs and better control over layout and visual effects compared to its predecessors.',
        icon: faCss3
    },
    {
        name: 'JAVA SCRIPT',
        des: 'JavaScript (JS) is a versatile, high-level programming language primarily used to create interactive and dynamic elements on web pages. It enables developers to manipulate HTML and CSS, handle events, and perform asynchronous operations. JavaScript is essential for front-end development, but it’s also used on the server side with environments like Node.js.',
        icon: faJs
    },
    {
        name: 'ANGULAR',
        des: 'Angular is a robust, open-source web application framework developed by Google for building dynamic, single-page applications (SPAs). It uses TypeScript and provides a comprehensive suite of tools and features, including two-way data binding, dependency injection, and a modular architecture. Angular helps developers create scalable, maintainable, and high-performance web applications with a strong emphasis on testability and code structure.',
        icon: faAngular
    },
    {
        name: 'BOOTSTRAP',
        des: 'Bootstrap is a popular, open-source front-end framework for designing responsive and visually appealing web pages. Developed by Twitter, it provides a collection of pre-designed components, such as buttons, forms, and navigation bars, as well as a grid system and utilities for layout and styling. Bootstrap streamlines development by offering a consistent design and adaptable layout across various devices and screen sizes.',
        icon: faBootstrap
    }
])
const refTab = useRef();
const refDivs = useRef([]);
CustomHook(refTab, refDivs);
    return(
        <section className="skills" ref={refTab}>
                <div className="title" ref={(el) => el && refDivs.current.push(el)}>
                    This is my Skills
                </div>
                <div className="des" ref={(el) => el && refDivs.current.push(el)}>
                A skilled web developer with expertise in front-end technologies like Angular and React, and strong back-end proficiency in SpringBoot. Adept at building dynamic, responsive websites and web applications with a focus on user experience and performance. Experienced in both RESTful API development and database management. Committed to writing clean, efficient code and delivering high-quality solutions.
                </div>
                <div className="list" ref={(el) => el && refDivs.current.push(el)}>
                    {
                        listSkills.map((value, key)=>(
                            <div key={key} className="item" ref={(el) => el && refDivs.current.push(el)}>
                                <FontAwesomeIcon icon={value.icon} />
                                <h3>{value.name}</h3>
                                <div className="des">{value.des}</div>
                            </div>
                        ))
                    }
                </div>
        </section>
    )
}

export default Skills;
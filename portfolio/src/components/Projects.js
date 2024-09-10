import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCircleQuestion, faEarthAfrica } from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";
const Projects = ()=>{
    const [listProjects] = useState([
        {
            name:'Project',
            des: 'This project aims to build a responsive e-commerce website with a sleek interface and essential features like product search, filtering, and secure checkout. The focus is on delivering an intuitive and engaging shopping experience across all devices',
            mission: 'Web developer',
            language: 'HTML5, CSS3, Angular, SpringBoot,...',
            image: '/project1.jpg'
        },
        {
            name:'Project',
            des: 'This project aims to build a responsive e-commerce website with a sleek interface and essential features like product search, filtering, and secure checkout. The focus is on delivering an intuitive and engaging shopping experience across all devices',
            mission: 'Web developer',
            language: 'HTML5, CSS3, Angular, SpringBoot,...',
            image: '/project1.jpg'
        },
        {
            name:'Project',
            des: 'This project aims to build a responsive e-commerce website with a sleek interface and essential features like product search, filtering, and secure checkout. The focus is on delivering an intuitive and engaging shopping experience across all devices',
            mission: 'Web developer',
            language: 'HTML5, CSS3, Angular, SpringBoot,...',
            image: '/project1.jpg'
        }
    ]);
const refTab = useRef();
const refDivs = useRef([]);
CustomHook(refTab, refDivs);
    return(
        <section className="projects" ref={refTab}>
            <div className="title" ref={(el) => el && refDivs.current.push(el)}>
                This is my Projects
            </div>
            <div className="des" ref={(el) => el && refDivs.current.push(el)}>
                "Lorem ipsum" is a placeholder text commonly used in the design and publishing industry to fill in content areas and demonstrate how a finished product will look. It originates from a scrambled passage of Latin text from Cicero's writings, and it helps designers focus on visual elements without the distraction of meaningful content. The most famous version starts with "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="list" ref={(el) => el && refDivs.current.push(el)}>
                {
                    listProjects.map((value, key)=>(
                        <div key={key} className="item" ref={(el) => el && refDivs.current.push(el)}>
                            <div className="image">
                                <img src={value.image} />
                            </div>
                            <div className="content">
                                <h3>{value.name}</h3>
                                <div className="des">{value.des}</div>
                                <div className="mission">
                                    <div>
                                        <FontAwesomeIcon icon={faPersonCircleQuestion}/>
                                    </div>
                                    <div>
                                        <h4>Mission</h4>
                                        <div className="de">{value.mission}</div>
                                    </div>
                                </div>
                                <div className="mission">
                                    <div>
                                        <FontAwesomeIcon icon={faEarthAfrica}/>
                                    </div>
                                    <div>
                                        <h4>Languages</h4>
                                        <div className="de">{value.language}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects;
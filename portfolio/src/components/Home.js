import React, { useRef } from "react";
import CustomHook from "./CustomHook";
const Home = ()=>{
    const refTab = useRef();
    CustomHook(refTab);
    return(
        <section className="home" ref={refTab}>
            <div className="content">
                <div className="name">
                    MY NAME IS <span>AYMAN CHERIF</span>
                </div>
                <div className="desc">
                Hello! I’m Ayman Cherif, a dedicated and results-driven Full-stack web Developer with a passion for creating exceptional user experiences. Here’s what I bring to the table:

                ✅ 3 years of hands-on experience crafting dynamic, user-friendly front-end solutions using Angular and React 🖥️
                ✅ 2 years of building scalable, robust back-ends with Spring Boot and Java 🔧

                Core Skills:
                🔸 JavaScript & TypeScript for crafting interactive and responsive interfaces
                🔸 HTML & CSS for clean, accessible, and visually appealing designs
                🔸 CRUD API development for seamless data management
                🔸 JWT Security for robust and secure authentication
                🔸 Object-Oriented Programming for efficient, maintainable code
                🔸 Responsive Design to ensure a consistent experience across all devices

                </div>
                <a href="/democv.pdf" target="_blank" rel="noopener
                noreferrer">Download My CV</a>
            </div>
            <div className="avatar">
                <div className="card">
                    <img src="/avatar.jpg"/>
                    <div className="info">
                        <div>Developer</div>
                        <div>Tunisia</div>
                        <div>02/03</div>
                        <div>Male</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
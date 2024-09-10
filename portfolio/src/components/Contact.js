import React, { useRef, useState } from "react";
import CustomHook from "./CustomHook";
const Contact = ()=>{
    const [listContacts] = useState([
        {
            title: 'Phone Number',
            value: '+84123123'
        },
        {
            title:'Email',
            value:'ayman.cheriif@gmail.com'
        },
        {
            title:'Youtube',
            value:'@aymancherif'
        }
    ])

    const refTab = useRef();
    const divs = useRef([]);
    CustomHook(refTab, divs);
    return(
        <section className="contacts" ref={refTab}>
            <div className="title" ref={(el)=> el && divs.current.push(el)}>
                This is my Contacts
            </div>
            <div className="des" ref={(el)=> el && divs.current.push(el)}>
            "Lorem ipsum" is a placeholder text commonly used in the design and publishing industry to fill in content areas and demonstrate how a finished product will look. It originates from a scrambled passage of Latin text from Cicero's writings, and it helps designers focus on visual elements without the distraction of meaningful content. The most famous version starts with "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="list" ref={(el)=> el && divs.current.push(el)}>
                {
                    listContacts.map((value, key)=>(
                        <div key={key} className="item">
                            <h3>{value.title}</h3>
                            <div>{value.value}</div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Contact;
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
            Ayman is easily reachable and values clear, timely communication. You can contact him via email, phone, or professional platforms like LinkedIn or Upwork. He's quick to respond to inquiries and open to discussing potential collaborations or project opportunities. Always happy to provide support or advice regarding web development and software solutions.
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
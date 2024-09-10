import React, { useState } from "react";

const Navbar = ()=>{
    const [ListNav] = useState(['home', 'skills', 'projects',
        'contacts']);
    return(
        <header>
            <div className="logo">
                <img src="/logo.png" />
            </div>
            <nav>
                {
                    ListNav.map((value, key) => (
                        <span className="active" key={key}>{value}</span>
                    ))
                }
            </nav>
        </header>
    )
}

export default Navbar;
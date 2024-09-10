import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import {changeTabActive} from '../redux/action';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = ({activeTab})=>{
    const [ListNav] = useState(['home', 'skills', 'projects',
        'contacts']);
    const dispath = useDispatch();
    const changeTab = (value) => {
        dispath(changeTabActive(value));
        toggleNavBar();
    }

    const [statusNav, setStatusNav] = useState('active');
    const toggleNavBar = ()=>{
        setStatusNav(statusNav === 'active' ? null : 'active')
    }
    return(
        <header>
            <div className="logo">
                <img src="/logo.png" />
            </div>
            <nav className={statusNav}>
                {
                    ListNav.map((value, key) => (
                        <span className={activeTab === value ? 'active': ''} key={key}
                        onClick={()=>changeTab(value)}>{value}</span>
                    ))
                }
            </nav>
            <div className="icon-bar" onClick={toggleNavBar}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    )
}

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
})
export default connect(mapStateToProps, {changeTabActive})(Navbar);
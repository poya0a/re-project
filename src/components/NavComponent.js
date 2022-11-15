import React from 'react';
import './NavComponent.css';

const NavComponent = (isShow) => {
    return (
        <div id='nav' className={isShow.isShowNav === false ? "" : "on"} >
            <ul>
                <li>
                    <a href="#!" className='btn-item main-btn'><span>BR-IT</span></a>
                    <div className="sub">
                        <ul>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#!" className='btn-item main-btn'><span>COMPANY</span></a>
                    <div className="sub">
                        <ul>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#!" className='btn-item main-btn'><span>BUSINESS</span></a>
                    <div className="sub">
                        <ul>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#!" className='btn-item main-btn'><span>NEWS</span></a>
                    <div className="sub">
                        <ul>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#!" className='btn-item main-btn'><span>CONTACT</span></a>
                    <div className="sub">
                        <ul>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                            <li><a href="#!" className='btn-item sub-btn'><span>SUB MENU</span></a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default NavComponent;
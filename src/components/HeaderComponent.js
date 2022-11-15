import React, { useState } from 'react';
import './HeaderComponent.css';
import Nav from './NavComponent.js';

const HeaderComponent = () => {

    const [isShow, setIsShow] = useState ({navBtnOn: false, isShowNav: false});
  
    const onClickNavBtn=(e)=>{
        e.preventDefault();
        if(isShow.navBtnOn){
            setIsShow({...isShow, navBtnOn: false, isShowNav: false});
        }
        else if(isShow.navBtnOn === false){
            setIsShow({...isShow, navBtnOn: true, isShowNav: true});
        }
        
    }

    return (
        <div id="header">
           <div className="container">
            <div className="wrap">
                <div className="gap">
                    <div className="nav-btn-wrap">
                        <button className={isShow.navBtnOn === false ? "nav-btn" : "nav-btn on"} onClick={onClickNavBtn}>
                            <i></i>
                            <i></i>
                            <i></i>
                        </button>
                    </div>
                    <Nav isShow={isShow} isShowNav={isShow.isShowNav}/>
                </div>
            </div>
           </div>
        </div>
    );
};

export default HeaderComponent;
import React from 'react'
import UserLoginCss from './UserLogin.module.css';
import img from './img.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const UserLogin = () => {
    return (
        <div className={UserLoginCss.Container}>
            <div className={UserLoginCss.box}>

                <div className={UserLoginCss.wrapper}>
                    <div className={UserLoginCss.vectorSvg}>
    
                    <i class="fa-regular fa-user"></i>
                    </div>
                    <div className={UserLoginCss.textInfo}>
                        <p>Hi there!</p>
                        <h2>Lets Get Started</h2>
                    </div>
                    <div className={UserLoginCss.formGroup}>
                        <div className={UserLoginCss.inputField}>
                        <span className="icon"><i class="fa-regular fa-user"></i></span>
                        <input type="text" placeholder="Username" /> 
                        </div>
                        <div className={UserLoginCss.inputField}>
                                <span className={UserLoginCss.icon}>
                                <i class="fa-regular fa-lock"></i>
                                </span>

                            <input type="text" placeholder="Password" /> 
                        </div>
                        <button className={UserLoginCss.btn}>Log In</button>
                        <div className={UserLoginCss.divident}>
                            <span className={UserLoginCss.drop}>---------------------</span> Or <span className={UserLoginCss.drop}>---------------------</span>                        </div>
                        <button className={UserLoginCss.btn}>
                            <i class="fa-brands fa-microsoft"></i>
                            &nbsp;Sign in with Microsoft
                        </button>
                    </div>
                </div>

            </div>






        </div>
    )
}

export default UserLogin
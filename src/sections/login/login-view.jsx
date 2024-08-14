import React from 'react'
import { Link } from 'react-router-dom'

import './Login.css'
 
export default function Login() {
    return (
        <div className='main-div'>
            <div className='image-div'>
                <img src='https://cdn.prod.website-files.com/618165faab94901955064900/618165faab9490c71e064b45_ACP-Blog-document-management-101-compressed.jpg'
                    alt='' />
            </div>
            <div className='side-div'>
                <div>
                    <img src='https://contractnerds.com/wp-content/uploads/2022/10/3-1024x260.png' alt='' />
                </div>
 
                <div style={{width: '74%'}} >
                    <div className='form-container'>
                    <span className='label'>email</span>
                        <input type='email' placeholder='example@gmail.com' className='email' id='email' required/>
                        <hr className='horizontal'/>
                    </div>
 
                    <div className='form-container'>
                        <span className='label'>password</span>
                        <input type='password' placeholder='password' className='password'
                        id='password' maxLength={12} required/>
                        <hr className='horizontal'/>
                    </div>
 
                    <div className='button'>
                        <Link to='/'><button className='button-1' type='button'>sign in</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
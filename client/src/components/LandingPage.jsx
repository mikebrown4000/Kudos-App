// component will show login/signup screen
// - if logged in reroute right to piggie page?
import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return(
    <div className='landing-page'>
        <div className='landing-splash'>
            <div>
                <h2 className='register-title'>Join Kudos Today!</h2>
            </div>
            <Link className="reg-button" to="/register">Sign Up</Link>
            <Link className="reg-button" to="/login">Login</Link> 
        </div>
        <div className='big-splash'>
            <img src="https://i.imgur.com/P58T5Vz.png" alt=""/>
        </div>
    </div>
    )
}

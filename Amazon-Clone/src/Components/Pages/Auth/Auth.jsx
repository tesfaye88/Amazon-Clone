import React from 'react'
import './SignUp.module.css'
import { Link } from 'react-router-dom'
import classes from "./SignUp.module.css"

function Auth() {
  return (
    
      <section className={classes.login}>
        <Link>
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
        
        </Link>
        <div className={classes.login_container}>
          <h1>Sign In</h1>
          <form action="">
            <div>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
            </div>
            <button className={classes.login_signInButton}>Sign In</button>
          </form>
          <p>
            By signin-in you agree to the AMAZON FAKE CLONE conditions of use & sale.Please see our privacy Notice,our Cookies Notice and our Interest-Based Ads Notice.
          </p>
          <button className={classes.login_registerButton}>Create Your Amazon Account</button>
        </div>
        
      </section>
    



  )
}

export default Auth

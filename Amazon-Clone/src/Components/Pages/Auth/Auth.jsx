import React ,{useState,useContext} from 'react'
import './SignUp.module.css'
import { Link } from 'react-router-dom'
import classes from "./SignUp.module.css"
import { auth } from '../../Utility/firebase'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import {DataContext} from '../../DataProvider/DataProvider'
import { type } from '../../Utility/action.type'
function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  console.log(email,password)
  const[{user},dispatch]=useContext(DataContext)
  console.log(user)
  const authHandler=async(e)=>{
    e.preventDefault();
    console.log(e.target.name)
    if(e.target.name=="signin"){
//fire authorization 
signInWithEmailAndPassword(auth,email,password)
.then ((userInfo)=>{
  // console.log(userInfo);
  dispatch({
    TYPE:type.SET_USER,
    user:userInfo.user
  })
})
.catch((err)=>{console.log(err)})

    }
    else {
      createUserWithEmailAndPassword(auth,email,password).then ((userInfo)=>{
        // console.log(userInfo)
        dispatch({
          TYPE:type.SET_USER,
          user:userInfo.user
        })
      })
      .catch((err)=>{console.log(err)})

    }
  }
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
              <input value={email}  onChange={(e)=>setEmail(e.target.value)}
              type='email' id='email' />
            </div>
            <div>
            <label htmlFor='password'>Password</label>
            <input value={password}  onChange={(e)=>setPassword(e.target.value)}type='password' id='password' />
            </div>
            <button type='submit' onClick={authHandler} name='sign in' className={classes.login_signInButton}>Sign In</button>
          </form>
          <p>
            By signin-in you agree to the AMAZON FAKE CLONE conditions of use & sale.Please see our privacy Notice,our Cookies Notice and our Interest-Based Ads Notice.
          </p>
          <button  type='submit' onClick={authHandler}  name='signup' className={classes.login_registerButton}>Create Your Amazon Account</button>
        </div>
        
      </section>
    



  )
}

export default Auth

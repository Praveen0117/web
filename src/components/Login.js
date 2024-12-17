import React, { useRef, useState } from 'react'
import Header from './Header'
import { bgImg } from './utils/constants'
import { checkValidData } from './utils/validates'
// import { auth } from './utils/firebase'
// import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"




const Login = () => {

    const email = useRef(null)
    const password = useRef(null)

    const[isSignIn,setIsSignIn] = useState(true)
    const [errorMessage,setErrorMessage] = useState(null)

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn)
    }

    const handelButton = () => {
        const message = checkValidData(email.current.value,password.current.value)
        console.log(email.current.value)
        console.log(password.current.value)
        setErrorMessage(message)

        if(message) return;

        // if(!isSignIn) {
        //     //SignUp logic
        //     createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        //     .then((userCredential) => {
        //         const user = userCredential.user;
        //         console.log(user)
        //       })
        //       .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         setErrorMessage(errorCode + " " + errorMessage)
        //       });
        //   } else{
        //     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        //       .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
                
        //         // ...
        //       })
        //       .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         setErrorMessage(errorCode + "-" + errorMessage)
        //       });
        //   }
    }


    

  return (
    <div className='absolute  h-screen w-screen'>
        <img src={bgImg} alt='bg' className='absolute w-screen h-screen'/>
        <Header/>
        <form onSubmit={(e)=>e.preventDefault()} className='flex flex-col w-3/12 absolute mt-48 mx-auto right-0 left-0 bg-gradient-to-b from-black rounded-xl '>
            <h1 className='text-white text-3xl font-bold ml-10 mt-5 mb-5'>{isSignIn ? "SignIn" : "SignUp"}</h1>
            {!isSignIn && <input placeholder='Fullname' type='text' className='p-2 ml-10 m-2 w-72 rounded-lg' />}
            <input placeholder='Email' ref={email} type='email' className='p-2 m-2 ml-10 w-72 rounded-lg' />
            <input placeholder='Password' type='password' ref={password} className='p-2 ml-10 m-2 w-72 rounded-lg' />
            <p className='text-red-700 ml-10 font-bold'>{errorMessage}</p>
            <button className='m-2 font-bold p-3 w-72 bg-red-600 ml-10 rounded-lg ' onClick={handelButton} >{isSignIn ? "SignIn" : "SignUp"}</button>
            
            <p className='text-black text-xl cursor-pointer ml-10 mb-5' onClick={toggleSignInForm}>{isSignIn ? "New User? SignUP now" : "Already registered? SignIn now"}</p>
        </form>
    </div>
  )
}

export default Login

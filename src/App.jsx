
import React from 'react'
import Home from './Routes/Home'
import {Route} from "wouter";
import Courses from './Routes/Courses';
import LogInForm from './Routes/LogIn';
import Signup from './Routes/SingIn';
import LearnToPlay from './Routes/LearnToPlay';

function App(){
  return(
    <>
      <Route path="/" component={Home} />
      <Route path="/Courses" component={Courses} />
      <Route path="/Login" component={LogInForm}/>
      <Route path='/Signup' component={Signup} />
      <Route path='/Courses/Learn-To-Play' component={LearnToPlay} />
    </>
  )
}

export default App;
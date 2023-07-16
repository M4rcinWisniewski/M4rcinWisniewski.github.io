
import React from 'react'
import Home from './Routes/Home'
import {Route} from "wouter";
import Courses from './Routes/Courses';
import LogInForm from './Routes/LogIn';

function App(){
  return(
    <>
      <Route path="/" component={Home} />
      <Route path="/Courses" component={Courses} />
      <Route path="/Login" component={LogInForm}/>
    </>
  )
}

export default App;
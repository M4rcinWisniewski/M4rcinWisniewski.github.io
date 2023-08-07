import React from 'react'
import Home from './Routes/Home'
import {Route} from "wouter";
import Courses from './Routes/Courses';
import LogInForm from './Routes/LogIn';
import LearnToPlay from './Routes/LearnToPlay';
import './style/style.css'
import Analysis from './Routes/Analysis';
import Blog from './Routes/Blog';

function App(){
  return(
    <>
      <Route path="/" component={Home} />
      <Route path="/Courses" component={Courses} />
      <Route path="/Login" component={LogInForm}/>
      <Route path='/Courses/Learn-To-Play' component={LearnToPlay} />
      <Route path="/Analysis" component={Analysis} />
      <Route path="/Blog" component={Blog} />
    </>
  )
}

export default App;
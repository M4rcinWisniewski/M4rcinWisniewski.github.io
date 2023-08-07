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
      <Route path="/chess/" component={Home} />
      <Route path="/chess/Courses" component={Courses} />
      <Route path="/chess/Login" component={LogInForm}/>
      <Route path='/chess/Courses/Learn-To-Play' component={LearnToPlay} />
      <Route path="/chess/Analysis" component={Analysis} />
      <Route path="/chess/Blog" component={Blog} />
    </>
  )
}

export default App;
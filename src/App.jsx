
import React from 'react'
import Home from './Routes/Home'
import {Route} from "wouter";
import Courses from './Routes/Courses';

function App(){
  return(
    <>
      <Route path="/" component={Home} />
      <Route path="/Courses" component={Courses} />
    </>
  )
}

export default App;
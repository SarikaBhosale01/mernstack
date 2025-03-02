import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Component1 from './componenets/component1'
import Component2 from './componenets/component2'
import PostMovie from './componenets/PostMovie'
import GetMovie from './componenets/GetMovie'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
 {/* <Component1></Component1> */}
 {/* <Component2></Component2> */}
 <PostMovie></PostMovie>
 <GetMovie></GetMovie>
 
  </StrictMode>,
)

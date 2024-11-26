import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'


 const Element1 = (
  <div>
    <a href="https://google.com">Click me to google</a>
  </div>
 )

 const aelement=React.createElement(
  'h1',
  {},
  'This is react element'
 )

createRoot(document.getElementById('root')).render(
  
    aelement

)

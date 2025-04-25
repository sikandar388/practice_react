import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// function App() {
//   return (
//     <>
//     <h1>Hello Friend!!!</h1>
//     </>                            //<></> is used to show that we are returning a single element
//   )
// }

const ReactElement = {
  type : 'a',
  props : {
      href : 'https://google.com',
      target :'_blank'
  },
  Children : 'Google'
}

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const thirdElement = React.createElement(
  'a',
  {href:'https://google.com',
    target:'_blank'
  },
  'Go to Google!!'
)


createRoot(document.getElementById('root')).render(
   
  <App />

  
)

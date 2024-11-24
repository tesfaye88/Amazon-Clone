import React ,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './Components/DataProvider/DataProvider.jsx'
import { reducer,initialState } from './Components/Utility/reducer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   <BrowserRouter>
    <DataProvider  reducer={reducer} initialState={initialState}>
      <App/>
   </DataProvider> 
   
   </BrowserRouter>
   

 </StrictMode>,
)

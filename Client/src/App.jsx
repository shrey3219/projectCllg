import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import {BrowserRouter,Routes,Route}from'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute copy'
import Foot from './components/Foot'
import PrivateRoute from './components/PrivateRoute'
import Upload from './pages/Upload'

import FileList from './pages/FileList'
export default function App() {
  
  return (
    
  
  <BrowserRouter>
  <Header/>
  
   <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      
      
      <Route path="/login" element={<Login/>}/>
      <Route path="/upload" element={<Upload/>}/>
      
      <Route path="/filelist" element={<FileList />}/>
      
     
      <Route element={<PrivateRoute/>}>
      <Route path='/dashboard' element={<Dashboard />} />
      </Route>
      <Route element={<OnlyAdminPrivateRoute/>}>
      <Route path="/upload" element={<Upload/>}/>
      
      </Route>
      
   </Routes>
   <Foot/>
  </BrowserRouter>
  )
}

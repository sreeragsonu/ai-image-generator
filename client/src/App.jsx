import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import{logo} from'./assets';
import {Home,CreatePost} from './pages';
import Footer from'./components/Footer';

function App() {
  return (
    <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-[#e6ebf4]">
    <Link to="/">
      <div className='flex'>
      <img src='https://www.freeiconspng.com/thumbs/art-icon/is-there-an--2.png' 
      className='w-28 h-12 object-contain'/>
      <h1 className='font-extrabold text-[#222328] text-[32px] '>Funcilz-AI Art</h1>
      </div>
    </Link>

    
    </header>
    <main className='sm:p-8 px-4 py-8 w-f bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/create-post" element={<CreatePost/>}/>
      
    </Routes>
    <Footer/>
    </main>
    </BrowserRouter>
  )
}

export default App
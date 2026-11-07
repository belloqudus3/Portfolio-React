import React from 'react'
import { useState } from 'react'
import {Menu, X} from 'lucide-react'

 const PortfolioHeader = () => {
  const [isOpen, setIsOpen] = useState(false)

  
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4">
      <nav className="hidden md:flex items-center bg-white/5 backdrop-blur-xl border border-white/10 justify-between py-2 px-6 rounded-2xl ">
        <div>
          <img className='h-10 w-10' src="" alt="Logo"/>
        </div>
        <ul className="hidden md:flex text-white gap-x-14 text-md text-center font-medium font-inter pointer-events-auto"> 
          <li><a href="/" className="hover:text-cyan-600 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-600 transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-600 transition-colors">Projects</a></li>
          
        </ul>
        <div className="hidden md:flex">
          <a href="#contact" className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition duration-300">Hire Me</a>
        </div>
        
      </nav>
        
      <nav className="md:hidden flex items-center  bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl justify-between relative py-2 px-3">
        
        <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} color='cyan'/> : <Menu size={24} color="cyan" />}
        </button>
        
        <div className={` absolute top-14 left-0 w-1/4 bg-transparent backdrop-blur-xl text-white transition-transform duration-90 items-center justify-right ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          
         {isOpen && ( <ul className="flex flex-col  justify-left  gap-y-4 py-4 pl-4">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Hire Me</a></li>
          </ul> )}
          
        </div>
         <div>
          <img className='h-10 w-10' src="" alt="Logo"/>
        </div>

      </nav>

    </header>
  )
}

export default PortfolioHeader
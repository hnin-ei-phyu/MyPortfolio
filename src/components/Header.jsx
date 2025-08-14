import { Menu, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Header = () => {

    //State Variables 
    const [isMenuOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50 )
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    /*Scrolls to specific section with a smooth animaiton using
    built -in DOM APIs: document.qyerySelector & ScrollIntoView */
    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth"})
        }
        // Close the menu after scrolling
        setIsOpen(false)
    }

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" }
    ]

  return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled
          ? "bg-slate-950 backdrop-blur-lg shadow-lg border-b border-slate-800"
          : 'bg-transparent'
        }
      `}>
          <div className='w-full mx-auto px-6 py-4 max-w-7xl'>
              <div className='flex items-center justify-between'>
                  <div className='text-2xl font-bold'>
                      <span className='text-primary'>HNINEI</span>
                      <span className='text-white'>PHYU</span>
                      <span className='text-primary'>.</span>
                  </div> 
                  
                  {/* Desktop Menu */}
                  <nav className='hidden md:flex space-x-8'>
                      {/* Login will be used here */}
                      {navItems.map((item, index) => {
                          return (
                              <button key={index} onClick={() => scrollToSection(item.href)}
                                className='text-gray-300 hover:text-accent transition-all duration-300
                                font-medium relative group'
                                  style={{animationDelay: `${index * 0.1}s`}}
                              >
                                  {item.name}
                                  <span className='absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full'></span>
                              </button>
                          )
                      })}
                      
                  </nav>
                  <button className='hidden md:flex items-center gap-2 bg-prDark text-textLight px-6
                  py-2.5 rounded-lg hover:bg-accent transition-all duration-300 font-medium
                  shadow-lg hover:shadow-xl hover:scale-105'>
                      Download CV
                  </button>

                  {/* Moblie Menu Button */}
                  <button className='text-white md:hidden' onClick={() => setIsOpen(!isMenuOpen)}>
                      {
                          isMenuOpen
                              ? <X size={24} />
                              : <Menu size={24} />
                      }
                  </button>
              </div>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                  <nav className='md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 bg-slate-800 rounded-lg shadow-lg'>
                      {/* Logic will be here */}
                      {
                          navItems.map((item) => {
                              return <button key={item} onClick={() =>scrollToSection(item.href)} className='block w-full text-left py-3 px-4 text-gray-300 hover:text-accent hover:bg-slate-700 transition-all duration-300 rounded-lg'>
                                        {item.name}
                                    </button>
                            })
                      }

                  <button className='mt-4 w-full flex items-center justify-center gap-2 bg-prDark text-white
                  px-6 py-2.5 rounded-lg hover:bg-accent transition-all duration-300'>
                      Download CV
                  </button>   
              </nav>
              )}

          </div>
          
      </header>
  )
}

export default Header

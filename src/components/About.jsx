import React, { useEffect, useState } from 'react'
import { assets } from '../assets/asset'

const About = () => {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
            }
        },
            {threshold: 0.3 }
        )
        const element = document.getElementById("about")
        if (element) observer.observe(element)
        return () => observer.disconnect()
    },[])

  return (
      <section id='about' className='py-24 bg-slate-950 relative overflow-hidden'>
         {/* Animated background Elemets */}
          <div className='absolute inset-0'>
              <div className='absolute top-20 left-10 w-72 bg-blue-600/10 founded-full blur-3xl'></div>
                <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-blue-600/5 to-transparent'></div>
          </div>

          <div className="container mx-auto px-6 py-4">
              <div className='container px-6 relative z-10'>
                  <div className='grid lg:grid-cols-2 gap-16 items-space'>
                      {/* Left Image */}
                      <div className={`relative transition-all duration-1000
                        ${isVisible 
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-10"}
                         `}>
                          <div className='relative group'>
                              <div className='w-full max-w-md mx-auto'>
                                  <div className='relative border-4 border-prDark rounded-2xl p-2 group-hover:border-accent transition-all duration-300'>
                                      <img src={assets.profile_pic} className='w-full rounded-xl transition-all duration-500 group-hover:scale-105' alt="" />
                                      <div className='absolute inset-2 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500'></div>

                                      {/* Floating Decoration */}
                                      <div className='absolute -top-6 -right-6 w-12 h-12 bg-red-600/20 rounded-full'></div>
                                      <div className='absolute -bottom-6 -left-6 w-8 h-8 bg-blue-600/20 rounded-full'></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/* Right Content */}
                      <div className={`space-y-8 transition-all duration-1000 delay-300`}>
                          <div className='space-y-4'>
                              <p className='text-primary font-semibold text-lg'>About Us</p>
                              <h2 className='text-4xl md:text-5xl text-white font-bold animate-slide-up'>
                                  Why hier me for your <br />
                                  <span className=''>next project?</span>
                              </h2>
                              <p className='text-primary font-semibold delay-200'>
                                  UI / UX Designer & Web Developer
                              </p>
                          </div>   
                          <div className='space-y-6 text-gray-300 leading-relaxed'>
                              <p className={`text-lg transition-all duration-100 delay-500
                                ${isVisible 
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-10"}
                                `}>
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident officiis
                                  fugiat cupiditate temporibus placeat molestiae veniam harum qui dolorem odio
                                  unde, ullam tempore, hic et dolore nulla accusamus amet laboriosam distinctio
                                  voluptates ut dolorum corporis exercitationem. Totam veritatis natus sapiente
                                  vitae rem nisi aliquam. Suscipit non fugit laudantium ratione illum.
                              </p>
                              <p className={`transition-all duration-1000 delay-700
                                ${isVisible 
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-10"}
                                `}>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo expedita
                                  ducimus? Ratione officia libero dignissimos rem cumque maxime beatae.
                              </p>
                          </div>
                          <div className={`grid grid-cols-2 gap-8 py-6 transition-all duration-1000 delay-500
                              ${isVisible 
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-10"}
                            `}>
                              <div className='group'>
                                  <p  className='text-white font-semibold group-hover:text-primary transition-all duration-300'>Name</p>
                                  <p className='text-gray-300'> Hnin Ei Phyu</p>
                              </div>
                              <div className='group'>
                                  <p  className='text-white font-semibold group-hover:text-primary transition-all duration-300'>Location</p>
                                  <p className='text-gray-300'> Asakan Place, Srinakarin, Suan Luang District ,Bangkok</p>
                              </div>
                              <div className='group'>
                                  <p  className='text-white font-semibold group-hover:text-primary transition-all duration-300'>Birthday:</p>
                                  <p className='text-gray-300'> 8 August, 2001</p>
                              </div>
                              <div className='group'>
                                  <p  className='text-white font-semibold group-hover:text-primary transition-all duration-300'>Email:</p>
                                  <p className='text-gray-300'> nanghnineiphyu7@gmail.com</p>
                              </div>
                          </div>

                          <div className='flex flex-wrap gap-4 transition-all duration-1000 delay-1100'>
                              <button className='bg-prDark text-white px-8 py-3 rounded-lg hover:bg-accent transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105'>
                                  Download
                              </button>
                              <button className='border-2 border-slate-600 text-white px-8 py-3 rounded-l hover:border-accent hover:text-accent transition-all duration-300 font-medium hover:scale-105'>
                                  LEARN MORE
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
    </section>
  )
}

export default About

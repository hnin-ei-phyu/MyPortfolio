import { ExternalLink, Github, Key } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Projects = () => {

  const [isVisible, setIsVisible] = useState(false)
  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio) {
          setIsVisible(true)
        }
      }, { threshold: 0.3}
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)
    return () => observer.disconnect()

  }, [])

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React, Node.Js and Stript intergration. Features include user authentication, product management, and secure payments.",
      image: "https://codeastro.com/wp-content/uploads/2023/12/CodeAstro-Thumbnail_Ecommerce-Website-PHP-Laravel.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A modern e-commerce platform built with React, Node.Js and Stript intergration. Features include user authentication, product management, and secure payments.",
      image: "https://www.mintmedia.in/wp-content/uploads/2022/04/How-Ecommerce-Website-Development-Can-Boost-Your-Business-Online.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern e-commerce platform built with React, Node.Js and Stript intergration. Features include user authentication, product management, and secure payments.",
      image: "https://pixel77.com/wp-content/uploads/2024/06/ecommerce-website-designs-1-1024x768.webp",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      featured: true,
    },
    {
      id: 4,
      title: "Weather Display App",
      description: "A modern e-commerce platform built with React, Node.Js and Stript intergration. Features include user authentication, product management, and secure payments.",
      image: "https://fiveriversmarketing.com/wp-content/uploads/2022/11/Ecommerce-Website-Design-in-Dayton-Ohio.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      featured: true,
    },
    {
      id: 5,
      title: "Hospital Booking App",
      description: "A modern e-commerce platform built with React, Node.Js and Stript intergration. Features include user authentication, product management, and secure payments.",
      image: "https://embed-ssl.wistia.com/deliveries/0ffc788087fec9464a28e6299b2f5ff1.webp?image_crop_resized=1280x720",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      featured: true,
    },
    {
      id: 6,
      title: "Condo Rental App",
      description: "A modern e-commerce platform built with React, Node.Js and Stript intergration. Features include user authentication, product management, and secure payments.",
      image: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2025/08/electronics-website-template.jpg?fit=800%2C500&ssl=1",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      featured: true,
    }
  ]

  return (
    <section id='projects' className='py-24 bg-slate-950 relative overflow-hidden' >

      
       {/* Animated background Elemets */}
        <div className='absolute inset-0'>
            <div className='absolute top-20 left-10 w-72 bg-blue-600/10 founded-full blur-3xl'></div>
            <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-blue-600/5 to-transparent'></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000
          ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"}
          `}>
          <p className='text-primary font-semibold text-lg mb-4'>Portfolio</p>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>Featured Projects</h2>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
              Here are some of my recent projects that showcase my skills and expertise
          </p>
        </div>

        <div className='grid md:grid:cols-2 lg:grid-cols-3 gap-16'>
          {/* Logic to display the dynamic content */}
          {projects.map((project, index) => {
            return <div className={`group bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-1000 delay-600 overflow-hidden border border-slate-700 hover:border-cyan-500 hover:scale-105
                      ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"}
                    `}
                    style={{ transitionDelay: `${(index + 3) * 150} ms`}}>
                        <div className='relative overflow-hidden'>
                            <img src={project.image} alt={project.image} className='w-full h-70 object-cover group-hover:scale-105 transition-all duration-300' />
                          
                            <div className='absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                              <button className='w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300'>
                                <Github className='w-4 h-4 text-gray-700' />
                              </button>
                              <button className='w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300'>
                                <ExternalLink className='w-4 h-4 text-gray-700' />
                              </button>
                            </div>
                        </div>
              
                        <div className='p-6'>
                          <div className='flex items-center justify-between mb-3'>
                            <span className='bg-slate-800 text-gray-300 px-2 py-1 rounded-full text-xs font-medium '>
                              {project.category}
                            </span>
                          </div>
                          <h4 className='text-lg font-bold text-white mb-2 group-hover:text-accent transition-all duration-300'>
                            {project.title}
                          </h4>
                          <p className='text-gray-300 text-sm leading-relaxed'>
                            {/* add particular characters */}
                            {project.description.substring(0, 95)}... 
                          </p>
                          <div className='flex flex-wrap gap-1 mb-4'>
                            {project.technologies.map((tech, techIndex) => {
                              return <span className='bg-cyan-600 text-white px-2 py-1 rounded-full text-xs font-medium' key={techIndex}>
                                          {tech}
                                      </span>
                            })}
                          </div>
                        </div>

                  </div>
          })}
        </div>

        <div className={`text-center transition-all duration-1000 delay-1000 mt-5`}>
          <button className='bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-accent transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105'>
            View All Projects
            </button>
        </div>

      </div>
      
    </section>
  )
}

export default Projects

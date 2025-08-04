import React, { useEffect, useState } from 'react'

const Skills = () => {

    const [isVisible, setIsVisible] = useState(false)
    const [animatedSkills, setAnimatedSkills] = useState({})

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
                skills.forEach((skill, index) => {
                    setTimeout(() => {
                        setAnimatedSkills((prev) => ({
                            ...prev,
                            [skill.name]: skill.level,
                        }))
                    }, index * 200)
                })
            }
        }, {threshold: 0.3})

        const element = document.getElementById("skills")
        if (element) observer.observe(element)
        return () => observer.disconnect()   
    }, [])

    const skills = [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 65 },
        { name: "React JS", level: 65 },
        { name: "PHP/Laravel", level: 40 },
        { name: "Node Js", level:70 },
        { name: "MongoDB", level: 75 },
        
    ]

    const education = [
        {
            year: "2017-2020",
            title: "Bachelor of Arts (English)",
            institution: "Yenanchaung University (Magway, Myanmar)",
            description: "The Regional College of Yenangyaung was founded on 23 May 1977. It was promoted to the Yenangyaung College in 1980, to Yenangyaung Degree College on 26 June 2002 and to Yenangyaung University on 31, August, 2020."
        },
        {
            year: "2024-now",
            title: "Computer Science",
            institution: "Stamford International University, Bangkok",
            description: "STIU offers undergraduate and postgraduate degrees in International, Bilingual, and Thai programs, covering fields of study including business, hospitality management, communication arts, creative media design, information technology and public administration."
        }
    ]

  return (
      <section id='skills' className='py-24 bg-slate-900 relative overflow-hidden'>
         {/* Animated background Elemets */}
          <div className='absolute inset-0'>
              <div className='absolute top-20 left-10 w-72 bg-blue-600/10 founded-full blur-3xl'></div>
                <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-blue-600/5 to-transparent'></div>
          </div>  

          <div className="container mx-auto max-w-7xl px-6 relative z-10">
              <div className='grid lg:grid-cols-2 gap-16'>
                  {/* Left Education */}
                  <div className={`transition-all duration-1000
                        ${ isVisible 
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-10"
                        }
                    `}>
                      <div className='mb-12'>
                          <p className='text-primary font-semibold text-lg mb-4]'> Qualification</p>
                          <p className='text-primary text-4xl font-bold mb-8'>Education</p>
                      </div>
                      <div className='space-y-8'>
                          {/* Logic will be here */}
                          {education.map((edu, index) => {
                              return <div key={index} className={`border-l-2 border-accent pl-6 relative group transition-all duration-1000`}>
                                        <div className='absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full group-hover:scale-125 transition-all duration-300'></div>
                                        <div className='text-textLight text-sm font-semibold mb-2 group-hover:text-accent transition-all duration-300'>{edu.year}</div>
                                        <h3 className='text-xl font-black text-white mb-2'>{edu.title}</h3>
                                        <p className='text-gray-400 mb-2 group-hover:text-gray-300 transition-all duration-300'>{edu.institution}</p>
                                        <p className='text-gray-300 text-sm leading-relaxed group-hover:text-white transition-all duratoin-300'>{edu.description}</p>
                                    </div>
                            })}
                      </div>
                  </div>
                  {/* Right Education */}
                  <div className={`transition-all duration-1000 delay-300
                        ${ isVisible 
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-10"
                        }
                    `}>
                      <div className='mb-12'>
                          <p className='text-primary font-semibold text-lg mb-4'>Expert</p>
                          <p className='text-4xl font-black text-white mb-8'>My Skills</p>
                      </div>

                      {/* Logic will be here */}
                      <div className='space-y-6'>
                          {skills.map((skill, index) => {
                              return <div key={index} className={`space-y-2 transition-all duration-1000`} style={{transitionDelay: `${index * 150}ms`}}>
                                        <div className='flex justify-between items-center'>
                                            <span className='text-white font-medium group-hover:text-primary tansition-all duration-300'> {skill.name}</span>
                                            <span className='text-primary font-semibold'>{skill.level}%</span>
                                        </div>
                                        <div className='w-full bg-slate-700 rounded-full h-2 overflow-hidden relative'>
                                      <div className='bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full transition-all duration-1500 ease-out ralative'
                                      style={{width: `${animatedSkills[skill.name] || 0}%`}}>
                                               <div className='absolute inset-0 bg-white/20'></div>
                                            </div>
                                        </div>
                                     </div>
                          })}
                      </div>

                  </div>
              </div>
          </div>
    </section>
  )
}

export default Skills

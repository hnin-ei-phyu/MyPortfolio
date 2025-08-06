import { Award, Briefcase, Calendar, MapPin } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Experience = () => {

  const [visibleItems, setVisibleItems] = useState([])
  const [timelineVisible, setTimelineVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("timeline-item")) {
              setTimelineVisible(true)
            } else {
              const index = parseInt(entry.target.dataset.index)
              setVisibleItems((prev) => [...new Set([...prev, index])])
            }
          }
        })
    }, { threshold: 0.3 })
    
    const timelineElement = document.querySelector(".timeline-item")
    const experienceItems = document.querySelectorAll(".experience-item")

    if (timelineElement) observer.observe(timelineElement)
    experienceItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  },[])

  const experiences = [
    {
      company: "Baby Ancestor IOT Company",
      position: "Junior Developer",
      period: "March 2023 - December 2023",
      description: "Building company website using HTML, CSS, JavaScript, Assisted senior developers in testing and debugging applications, Helped in Developing web tools to support IOT product management and Used git for version control participated in weekly code reviews",
      achievements: [
        "Increased application performance by 40%",
        "Maintained the company software",
        "Designed the UI for the project"
      ],
      skills: ["React", "Node.js", "AWS", "TypeScript", "GraphQL"],
      location: "North Dagon, Yangon, Myanmar"
    },
    {
      company: "EasyWeb IT Company",
      position: "Intern",
      period: "June 2023 - February 2024",
      description: "Developed responsive web templates using HTML, CSS, Bootstrap and Tailwind. Focused on user-friendly templates optimized for various screen sizes and Collaborated with team using GitHub and Trello",
      achievements: [
        "Build 15+ responsive web applications",
        "Reduced bundle size by 30%",
        "Improved accessibility scores to 95+"
      ],
      skills: ["React", "Vue.js", "Bootstrap", "Figma", "Tailwind"],
      location: "Thinkangyon, Yangon, Myanmar"
    },
    {
      company: "Northern City",
      position: "Trainee",
      period: "January 2022 - February 2023",
      description: "Started my career building web applications and learning modern development practices, Contributed to both frontend and backend development in an agile enviroment.",
      achievements: [
        "Delivered 20+ features on time",
        "Improved code coverage to 85%",
        "Participated in code reviews"
      ],
      skills: ["PHP", "Laravel", "MySQL", "HTML", "CSS"],
      location: "Hledan, Yangon, Myanmar"
    },

  ]

  return (
      <section id='experience' className='py-24 bg-slate-900 relative overflow-hidden'>

          {/* Animated background Elemets */}
          <div className='absolute inset-0'>
              <div className='absolute top-20 left-10 w-72 bg-blue-600/10 rounded-full blur-3xl'></div>
              <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl'></div>
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-blue-600/5 to-transparent'></div>
          </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className='text-accent font-semibold text-lg mb-4'>
            All Company
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            My Experience
          </h2>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto delay-300'>
              My professional journey and the experience that shaped my expertise
          </p>
        </div>

        <div className='max-w-5xl mx-auto'>
          <div className='relative'>
            {/* Animate Timeline */}
            <div className='timeline-line absolute left-8 md:left-1/2 transform md:translate-x-1/2 w-1 h-full bg-slate-700 rounded-full overflow-hidden'>
              <div className={`w-full bg-gradient-to-b from-cyan-500 via-cyan-400 to-cyan-300 rounded-full transition-all duration-2000 ease-out`}>
                <div className='absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cyan-300 to-transparent'>
                  
                </div>
              </div>
            </div>

            {experiences.map((exp, index) => {
              return (
                <div
                  key={index}
                  className={`experience-item relative flex items-center mb-20 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                    transition-all duration-1000 ${visibleItems.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"}`}
                  data-index={index}
                  style={{
                    transitionDelay: `${index * 300 + 800}ms`,
                    transform: visibleItems.includes(index)
                      ? "translateY(0)"
                      : index % 2 === 0
                        ? "translateX(-50px) translateY(20px)"
                        : "translateX(50px) translateY(20px)",
                  }}
                >
                  {/* Animated Timelie Dots */}
                  <div className={`absolute left-8 md:left-1/2 transform md:translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-900 shadow-lg z-10
                    ${visibleItems.includes(index)
                      ? "scale-110" : "scale-0"} `}
                    style={{transitionDelay: `${index * 300 + 1200}ms`}}
                  >
                    <div className='absolute inset-0 bg-cyan-500 rounded-full'></div>
                    <div className='absolute inset-0 bg-cyan-400 rounded-full'></div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className={`bg-slate-800 p-8 rounded-xl shadow-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-500 transform hover:scale-105 hover:shadow-red-500/20 group`}>
                      <div className='flex items-center gap-3 group-hover:transform group-hover:scale-0-105 transition-all duration-300'>
                        <div className='w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300 group-hover:rotate-6'>
                          <Briefcase className='w-6 h-6 text-white' />
                        </div>
                        <div>
                          <h3 className='text-xl font-black text-white group-hover:text-cyan-400 transition-colors duration-300'>
                            {exp.company}
                          </h3>
                          <div className='flex items-center gap-2 text-cyan-400 text-sm'>
                            <Calendar className='w-4 h-4' />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                      
                      {/* Position */}
                      <div className='mb-4'>
                        <h4 className='text-lg font-semibold text-cyan-400 mb-2 group-hover:text-white transition-colors duration-300'>
                          {exp.position}
                        </h4>
                        <div className='flex items-center gap-2 text-cyan-400 text-sm'>
                            <MapPin className='w-4 h-4' />
                            {exp.location}
                          </div>
                      </div>

                      {/* Description */}
                      <div className='text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-all duration-300'>
                        {exp.description}
                      </div>

                      {/* Achievements */}
                      <div className='mb-6'>
                        <h5 className='font-semibold text-white mb-3 flex items-center gap-2 group-hover:text-cyan-400 transition-all duration-300'>
                          <Award className='w-4 h-4 text-cyan-400' />
                          Key Achievements
                        </h5>
                        <ul className='space-y-2'>
                          {exp.achievements.map((achv, achindex) => {
                            return <li key={achindex} className={`text-gray-300 text-sm flex items-start gap-3 group-hover:text-white transition-all duration-300`}
                                      style={{animationDelay: `${index * 300 + achindex * 200 + 1500}ms`,}}
                                    >
                                    <span className='w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0'></span>
                                    {achv}
                                     </li>
                            })}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className='flex flex-wrap gap-2'>
                        {exp.skills.map((skill, skillIndex) => {
                          return (
                              <span
                                key={skillIndex}
                                className='bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 hover:bg-accent'
                              style={{
                                animationDelay: `${index * 300 + skillIndex * 100 + 18000}ms`,
                                  }}
                              >
                                {skill}
                              </span>
                            )
                        })}
                      </div>

                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience

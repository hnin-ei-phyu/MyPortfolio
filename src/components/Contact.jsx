import { Github, Icon, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Contact = () => {

  const socialLinks = [
    { icon: Github, url: "https://github.com/hnin-ei-phyu" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/hnin-ei-phyu-029647254/" },
    { icon: Instagram, url: "https://www.instagram.com/elisapanei?igsh=MWk5N3BwOTUzcGFuZg%3D%3D&utm_source=qr" }
  ]

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio) {
          setIsVisible(true)
        }
      }, {threshold: 0.3}
    )
    const element = document.getElementById("contact")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  },[])

  return (
      <section id='contact' className='py-24 bg-slate-800 relative overflow-hidden'>
          
          {/* Animated background Elemets */}
          <div className='absolute inset-0'>
              <div className='absolute top-20 left-10 w-72 bg-blue-600/10 founded-full blur-3xl'></div>
                <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-blue-600/5 to-transparent'></div>
          </div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}>
          <p className='text-accent font-semibold text-lg mb-4'>Get in Touch</p>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>Let's Work Together</h2>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16'>
          <div className={`space-y-8 transition-all duration-1000
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}>
            <h3 className='text-2xl font-bold text-white mb-6'>Contact Information</h3>
            <p className='text-gray-300 leading-relaxed mb-8'>
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className='space-y-4'>
                {[
                    {
                      icon: Mail,
                      title: "Email",
                      info: "nanghnineiphyu7@gmail.com"
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      info: "+66 670392094"
                    },
                    {
                      icon: MapPin,
                      title: "Location",
                      info: "Asakan Place Srinakarin, Suan Luang, Bangkok"
                    },
                  ].map((contact, index) => {
                    return (
                      <div className={`flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-accent group cursor-pointer transform hover:scale-105
                                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                                     `}
                            style={{ animationDelay: `${index * 200 + 300}ms` }}
                          >
                            <div className='w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center group-hover:bg-accent transition-all duration-300 group-hover:rotate-6'>
                              <contact.icon className='w-6 h-6 text-white' />
                            </div>
                            <div>
                              <p className='font-semibold text-white group-hover:text-gray-400 transition-all duration-300'>
                                {contact.title}
                              </p>
                              <p className='text-gray-300 group-hover:text-gray-200 transition-all duration-300'>
                                {contact.info} {" "}
                              </p>
                            </div>
                          </div>
                        )
                 })}
            </div>

            <div className={`pt-8 transition-all duration-1000 delay-900
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}>
              <h4 className='text-lg font-semibold text-white mb-4'>Follow me</h4>
              <div className='flex gap-4'>
                {
                  socialLinks.map(({icon: Icon, url}, index) => (
                    <a
                      key={{ index }}
                      href={url} target='_blank'
                      rel='noopener noreferrer'
                       className="w-12 h-12 bg-slate-900 text-accent rounded-lg flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all duration-300 group border border-slate-700 hover:border-accent hover:scale-110 hover:rotate-6"
                    >
                      <Icon className='w-5 h-5' />
                    </a>
                  ))
                 }
              </div>
            </div>

          </div>

          {/* Contact */}
          <div className={`transition-all duration-1000 delay-300
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}>
            <div className='bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300'>
              <h3 className='text-2xl font-bold text-white mb-6'>
                Send Message
              </h3>

              <form className="">
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='group'>
                    <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-accent transition-all duration-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id='name'
                      name='name'
                      className='w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-cyan-500/50'
                      placeholder='your name'
                      required
                    />
                  </div>
                  <div className='group'>
                    <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-accent transition-all duration-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id='name'
                      name='name'
                      className='w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-cyan-500/50'
                      placeholder='email'
                      required
                    />
                  </div>
                </div>
                <div className='group mt-5'>
                    <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-accent transition-all duration-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id='name'
                      name='name'
                      className='w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-cyan-500/50'
                      placeholder='project discussion'
                      required
                    />
                </div>
                <div className='group mt-5'>
                    <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-accent transition-all duration-300">
                      Message
                    </label>
                    <textarea
                      type="text"
                      id='name'
                      name='name'
                      className='w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-cyan-500/50'
                      placeholder='tell me about your project'
                      required
                    />
                </div>
                <button className='mt--5 w-full bg-cyan-600 text-white py-4 rounded-lg hover:bg-cyan-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 group'>
                  Send Message
                  <Send className='w-5 h-5 transition-all group-hover:translate-x-1 group-hover:translate-y-1' />
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Contact

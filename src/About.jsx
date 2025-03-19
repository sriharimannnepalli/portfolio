import React from 'react'
import './About.css'
import photo from './assets/photo.jpg'
const About = () => {
  return (

    <div className = 'push' id = 'push'>
          <div className='img'> 
                  <img src={photo}/>
             </div>
            <div>
                <h1 className = 'c1'>About Me</h1>
                <p className = 'c2'>Motivated Full-Stack developer with expertise in Java, React and MySQL, possessing
                  hands-on experience in developing scalable web applications. Adept at problem solving, debugging 
                  and working in agile environments with a passion for building efficient and user-friendly software solutions.</p>
                <p className = 'c3'> Currently advancing my skills in Advanced Java and Hibernate. I'm exploring  
                    other core concepts to strengthen my backend development expertise. I enjoy solving problems through clean and efficient 
                    code and continuously learning new technologies.</p>  
                <p className = 'c4'><span>Email ID:</span> sriharimannepalli48@gmail.com</p>  
                <p className = 'c5'> <span>Location:</span> Bangalore</p>
             </div>
            
             </div>  
  )
} 

export default About
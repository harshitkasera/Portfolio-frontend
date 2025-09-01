import React, { useEffect } from 'react'
// import './Style/MyPortfolio.css'
import Action from './Redux/Action'
import { useDispatch, useSelector } from 'react-redux'
import { FaLinkedinIn, } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const MyPortfolio = () => {
  const { Data } = useSelector(state => state.items)
  console.log(Data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Action())
  }, [dispatch])

  const heading = {
    backgroundImage: "url('/Images/chex.png')"
  }

  const about = {
    backgroundImage: "url('/Images/aboutImage.jpeg')"
  }

  return (
    <div className='wrapper_outer'>

      {/* Home Section */}
      <div id="1" className='paralla_Section'>
        <div className='paralex-bg' style={heading}></div>
        <div className='dp'>
          <img className='my_dp' src='./Images/harshu.jpg' alt="profile" />
        </div>
        <div className='myname'>
          <h1 className='full-h1'>Hi, I'm Harshit Kasera</h1>
        </div>
        <div className='prof'>
          <h4>Creative Designer & Developer</h4>
        </div>
        <div className='fullbtn'>
          <a href='#4'><button className='dpbtn'>View My Work</button></a>
        </div>
      </div>

      {/* About Section */}
      <div  id="2" className='parallax_Section'>
        <div className='paralex-bg' style={about}></div>
        <h2 className='abou-h'>About Me</h2>
        <div className='abo-box'>
          <div>
            <img src='./Images/aboutImage.jpeg' alt="about" />
          </div>

          <div >
            
            <p  className='about-text'>My name is Harshit Kasera, currently I live in Indore and I belong to Shajapur.
              Currently I'm doing an Internship at Indvibe Infotech Pvt Ltd.
              Recently I have completed my B-Tech in Computer Science and Engineering 
              from Mathuradevi Institute of Technology, and my class 10th is percentage 72.9 from Sandeepani Gyanpeeth School Shajapur,and my class 12th is percentage 72.2 from We Care Higher Secondary School Shajapur, I have gained valuable skill HTML CSS JavaScript and React, and the other backend is MongoDB, Express.js, Node.js, and I'm talking about my goal, So short term goal is to become FullStack Developer, and Long term goal is to work reputed companies,
              and My Strength is quick learner and passionate about frontend technologies, and my hobby  is trading and market Analysis, so thats all about me Thankyou
            </p>

          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div   id='3' >
      <div  className='parallax_Section'>
        {/* <div className='paralex-bgt'></div> */}
        <div className='box'>
        <h2 className='sk'>Skills</h2>
        <div className="skills-container">
      <a className='x' href='https://www.geeksforgeeks.org/mongodb/what-is-mongodb-working-and-features/'>
          <div className='s-img'><img src='./Images/mongo.png' className='img' alt="mongo"/>MongoDB</div>
        </a>
      <a className='x' href='https://expressjs.com/'>
          <div className='s-img'><img src='./Images/express.png' className='img' alt="express"/>Express</div></a>
      <a className='x' href='https://react.dev/'>
          <div className='s-img'><img src='./Images/react.png' className='img' alt="react"/>React</div></a>
      <a className='x' href='https://nodejs.org/en/learn/getting-started/introduction-to-nodejs'>
          <div className='s-img'><img src='./Images/node.png' className='img' alt="node"/>Node.js</div></a>
        </div>
      </div>
      </div>
</div>
      {/* Projects Section */}
      <div id='4' className='parallax_Section'>
        {/* <div className='paralex-bgf'></div> */}
        <h2 className='this' >Projects</h2>
        <div className="projects-container">
          {Data?.map((items, index) => (
            <div className='cart' key={index}>
              <img className='image' src={`http://localhost:1234/${items.img}`} alt={items.name} />

              <h4>{items.name}</h4>
              <p>{items.desc}</p>
              <a href='https://employeeprojec.netlify.app/'><button className='buton'>Check Project</button></a>
            </div>
            
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className='foot'>
        <h2 id='5'>Contact</h2>
        <p>+91-9302252353</p>
        <div className='full-fot'>
       <div className='icon-fot'>  <FaLinkedinIn className='icon'/>
         <a className='fot' href='https://www.linkedin.com/in/harshit-kasera-75b220263/'>Harshit Kasera</a></div>
       <div className='icon-fot'>  <FaInstagram className='icon'/>
         <a className='fot' href='https://www.instagram.com/'>kasera_353_</a>
        <div className='icon-fot'>
        <i className="fa-solid fa-envelope"></i>
         <a className='fot' href='https://mail.google.com/mail/u/0/#inbox'>harshitkasera01@gmail.com</a></div>
         </div>
</div>

      </footer>
    </div>
  )
}

export default MyPortfolio

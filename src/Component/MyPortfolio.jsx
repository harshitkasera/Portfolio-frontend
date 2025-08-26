import React, { useEffect } from 'react'
import '../../Style/MyPortfolio.css'
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
    backgroundImage: "url('/Images/A.avif')"
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
      <div className='parallax_Section'>
        <div className='paralex-bg' style={about}></div>
        <h2 className='abou-h' id="2">About Me</h2>
        <div className='abo-box'>
          <div>
            <img src='./Images/aboutImage.jpeg' alt="about" />
          </div>
          <div className='abo-text'>
            <p>My name is <b>Harshit Kasera</b>, currently I live in Indore and I belong to Shajapur.
              Currently I'm doing an <i>Internship</i> at <b>Indvibe Infotech Pvt Ltd</b>.  
              Recently I have completed my B-Tech in Computer Science and Engineering 
              from <b>Mathuradevi Institute of Technology</b>.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className='parallax_Section'>
        <div className='paralex-bgt'></div>
        <h2 id='3'>Skills</h2>
        <div className="skills-container">
          <div className='s-img'><img src='./Images/mongo.png' className='img' alt="mongo"/>MongoDB</div>
          <div className='s-img'><img src='./Images/express.png' className='img' alt="express"/>Express</div>
          <div className='s-img'><img src='./Images/react.png' className='img' alt="react"/>React</div>
          <div className='s-img'><img src='./Images/node.png' className='img' alt="node"/>Node.js</div>
        </div>
      </div>

      {/* Projects Section */}
      <div className='parallax_Section'>
        <div className='paralex-bgf'></div>
        <h2 id='4'>Projects</h2>
        <div className="projects-container">
          {Data?.map((items, index) => (
            <div className='cart' key={index}>
              <img className='image' src={`https://portfolio-1-62b3.onrender.com/${items.img}`} alt={items.name} />
              <h4>{items.name}</h4>
              <p>{items.desc}</p>
              <a href='./Images'><button className='buton'>Check Project</button></a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className='foot'>
        <h2 id='5'>Contact</h2>
        <i className="fa-solid fa-envelope"></i>
         <a href='#'>harshitkasera01@gmail.com</a>
         <FaLinkedinIn/>
         <a href='#'>Harshit Kasera</a>
         <FaInstagram/>
         <a href='#'>kasera_353_</a>
         


      </footer>
    </div>
  )
}

export default MyPortfolio

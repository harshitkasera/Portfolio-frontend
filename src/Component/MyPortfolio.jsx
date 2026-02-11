import React, { useEffect } from 'react'
import { FaLinkedinIn, } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const MyPortfolio = () => {

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
          <img className='my_dp' src='./Images/photo.jpeg' alt="profile" />
        </div>
        <div className='myname'>
          <h1 className='full-h1'>Hi, I'm Harshit Kasera</h1>
        </div>
        <div className='prof'>
          <h4>MERN STACK DEVELOPER</h4>
        </div>
        <div className='fullbtn'>
          <a href='#4'><button className='dpbtn'>View My Work</button></a>
        </div>
      </div>

      {/* About Section */}
      <div id="2" className='parallax_Section'>
        <div className='paralex-bg' style={about}></div>
        
        <h2 className='abou-h'>About Me</h2>
        <div className='abo-box'>
            <p className='about-text'>My name is Harshit Kasera, currently I live in Indore and I belong to Shajapur.
              Currently I'm doing an Internship at Indvibe Infotech Pvt Ltd.
              Recently I have completed my B-Tech in Computer Science and Engineering
              from Mathuradevi Institute of Technology, and my class 10th is percentage 72.9 from Sandeepani Gyanpeeth School Shajapur,and my class 12th is percentage 72.2 from We Care Higher Secondary School Shajapur, I have gained valuable skill HTML CSS JavaScript and React, and the other backend is MongoDB, Express.js, Node.js, and I'm talking about my goal, So short term goal is to become FullStack Developer, and Long term goal is to work reputed companies,
              and My Strength is quick learner and passionate about frontend technologies, and my hobby  is trading and market Analysis, so thats all about me Thankyou
            </p>

         
        </div>
      </div>

      {/* Skills Section */}
      <div id='3' >
        <div className='parallax_Section'>
          {/* <div className='paralex-bgt'></div> */}
          <div className='box'>
            <h2 className='sk'>Skills</h2>
            <div className="skills-container">
              <a className='x' href='https://www.w3schools.com/html/'>
                <div className='s-img'><img src='./Images/html.png' className='img' alt="node" />HTML</div></a>
              <a className='x' href='https://www.w3schools.com/css/'>
                <div className='s-img'><img src='./Images/css.jpg' className='img' alt="node" />CSS</div></a>
              <a className='x' href='https://www.w3schools.com/js/DEFAULT.asp'>
                <div className='s-img'><img src='./Images/js.png' className='img' alt="node" height="61px" />JavaScript</div></a>
              <a className='x' href='https://react.dev/'>
                <div className='s-img'><img src='./Images/react.png' className='img' alt="react" />React</div></a>
              <a className='x' href='https://www.geeksforgeeks.org/mongodb/what-is-mongodb-working-and-features/'>
                <div className='s-img'><img src='./Images/mongo.png' className='img' alt="mongo" />MongoDB</div>
              </a>
              <a className='x' href='https://expressjs.com/'>
                <div className='s-img'><img src='./Images/express.png' className='img' alt="express" />Express</div></a>
              <a className='x' href='https://nodejs.org/en/learn/getting-started/introduction-to-nodejs'>
                <div className='s-img'><img src='./Images/node.png' className='img' alt="node" />Node.js</div></a>
            </div>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div id='4' className='parallax_Section'>
        {/* <div className='paralex-bgf'></div> */}
        <h2 className='this' >Projects</h2>
        <div className="projects-container">
          {/* 1st project--------------- */}

          <div className='cart' >
            <img className='image' src='./Uploads/Aptitute-Test.webp' />

            <h4>Aptitude Tracker</h4>
            <p>This is my First Project 'Aptitude Tracker System'</p>
            <a href='https://github.com/harshitkasera/Apptitude-.git'><button className='buton'>Code</button></a>
            <a href='http://apptitudetracker.netlify.app'><button className='buton'>Live</button></a>
          </div>

          {/* {/------------------------------------------------2nd project-*  */}
          <div className='cart' >
            <img className='image' src='./Uploads/crud.jpeg' />

            <h4>Employe Managment</h4>
            <p>This is my Second Project 'Employee-Managment System'</p>
            <a href='https://github.com/harshitkasera/Employeefont.git'><button className='buton'>Code</button></a>
            <a href='https://employeeprojec.netlify.app/'><button className='buton'>Live</button></a>
          </div>

          {/* ------third projectt */}

          <div className='cart' >
            <img className='image' src='./Uploads/Ecommerce.jpeg' />

            <h4>Ecommerce Website</h4>
            <p>This is my third Project 'Ecommerce - Website '</p>
            <a href='https://github.com/harshitkasera/EShoppingfrontend.git'><button className='buton'>Code</button></a>
            <a href='https://shopppin.netlify.app/'><button className='buton'>Live</button></a>
          </div>

          <div className='cart' >
            <img className='image' src='./Images/food.jpg' />

            <h4> Restaurant Website</h4>
            <p>This is my React Project 'Restaurant - Website '</p>
            <a href='https://github.com/harshitkasera/EShoppingfrontend.git'><button className='buton'>Code</button></a>
            <a href='https://nileshrestaurent.netlify.app/'><button className='buton'>Live</button></a>
          </div>

         

          <div className='cart' >
            <img className='image' src='./Images/image.jpg' />

            <h4> Theater Website</h4>
            <p>This is my Booking Project 'Shopping - Website '</p>
            <a href='https://github.com/harshitkasera/EShoppingfrontend.git'><button className='buton'>Code</button></a>
            <a href='https://fabulous-eclair-cf6e4b.netlify.app/'><button className='buton'>Live</button></a>
          </div>
          <div className='cart' >
            <img className='image' src='./Images/shop.jpg' />

            <h4> My Local Website</h4>
            <p>This is my Local Project 'Shopping - Website '</p>
            <a href='https://github.com/harshitkasera/my-website.git'><button className='buton'>Code</button></a>
            <a href='https://websitesme.netlify.app/'><button className='buton'>Live</button></a>
          </div>

        </div>
      </div>




      {/* Footer */}
      <footer className='foot'>
        <h2 id='5'>Connect</h2>
        <p>+91-9302252353</p>
        <div className='full-fot'>
          <div className='icon-fot'>  <FaLinkedinIn className='icon' />
            <a className='fot' href='https://www.linkedin.com/in/harshit-kasera-75b220263/'>Harshit Kasera</a></div>
          <div className='icon-fot'>  <FaInstagram className='icon' />
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

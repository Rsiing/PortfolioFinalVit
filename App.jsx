import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaJs, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3, FaPython, FaBootstrap, FaGit} from 'react-icons/fa';
import { SlideData } from './assets/SlideData';
import { projectPicsLeft, projectPicsRight } from './assets/Projectimages'
import './App.css'

function Navbar({ togglePage }) {

  const [rotateIcon, setRotateIcon] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const rotate = rotateIcon ? 'rotate(180deg)' : 'rotate(0)';

  const toggleNav = () => {
    setOpenNav(!openNav);
    setRotateIcon(!rotateIcon);
  }

  return (
    <>
    <div className="nav" style={{ maxWidth: openNav ? '100%' : '0', overflow: 'hidden', transition: 'all 0.3s linear' }}>
    <button className='home' onClick={() => togglePage('Hero')}>Home</button>
      <button className='about' onClick={() => togglePage('About')}>About</button>
      <button className='projects' onClick={() => togglePage('Projects')}>Projects</button>
      <button className='contact'onClick={() => togglePage('Contact')}>Contact</button>
    </div>
    <div className="navBtn" >
    <FaBars 
    style={{ transform: rotate, transition: 'all 0.2s linear' }}
    onClick={toggleNav}/>
    </div>
    </>
  )
}

function SlideShow({ SlideData, autoPlay = true, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const totalSlides = SlideData.length;

  const nextSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      setIsVisible(true);
    }, 700);
    
  };
  useEffect(() => {
    if (!autoPlay) return;
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [currentIndex, autoPlay, interval]);

  return (
    <div className="slideshow">
      <img src={SlideData[currentIndex]} 
      alt={`slide ${currentIndex + 1}`} 
      className={`slideshowImg ${isVisible ? "active" : ""}`}/>
    </div>
  )
}


function Hero() {

  const[contactPopupOpen, setContactPopupOpen] = useState(false);
  const[cvPopupOpen, setCvPopupOpen] = useState(false);

  const toggleContactPopup = () => {
    setContactPopupOpen(!contactPopupOpen);
  };

  const toggleCvPopup = () => {
    setCvPopupOpen(!cvPopupOpen);
  };

  return (
    <>
    <div className="hero">
      <div className="title">
        <h1 className='titleTxt'> 
          <span className='name'>Ryan singleton</span> <br/>junior software engineer</h1>
      </div>
      <div className="description">
        <p className='heroText'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
          praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
           excepturi sint occaecati cupiditate non provident, similique sunt in culpa 
           qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum 
           quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta 
           nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat 
           facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
           autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut 
           et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic 
           tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur. 
        </p>
      </div>
      <div className="heroPic">
      <SlideShow SlideData={SlideData}/>
      </div>
      <div className="contactBtns">
        <button className='cv' onClick={toggleCvPopup}>View my CV</button>
        <button className='contactLink' onClick={toggleContactPopup}>Contact Me</button>
      </div>
      {contactPopupOpen && (
      <div className="popup">
        <FaTimes className='popupCloseBtn' onClick={toggleContactPopup}/>
      <div className="popuplinks">
        <a href="mailto: singletonrcc@gmail.com">
          <FaEnvelope className='emailIcon' href=''/>
        </a>
        <a href="tel:+44777331102">
          <FaPhoneAlt className='phoneIcon'/>
        </a>
        <a href="https://www.linkedin.com/in/ryan-singleton-676196325/">
          <FaLinkedin className='LinkedinIcon'/>
        </a>
        <a href="https://github.com/Rsiing">
          <FaGithub className='GithubIcon'/>
        </a>
      </div>
      </div>
      )}
      {cvPopupOpen && (
        <div className="cvPopup">
          <FaTimes className='cvPopupCloseBtn' onClick={toggleCvPopup}/>
          <div className="cvMain">

            <h2 className='cvTitle'>Ryan Singleton</h2>

            <div className="cvContactTitle">
              <h2>Contact details-</h2>
            </div>
            <div className="cvContactDetails">
              <a href="tel:+44777331102">
                <FaPhoneAlt className='cvIcons'/>
                07712331102
              </a>
              <a href="mailto: singletonrcc@gmail.com">
                <FaEnvelope className='cvIcons'/>
                singletonrcc@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/ryan-singleton-676196325/">
                <FaLinkedin className='cvIcons'/>
                https://www.linkedin.com/in/ryan-singleton-676196325/
              </a>
            </div>
            
            <div className="cvEducationTitle">
              <h2>Education-</h2>
            </div>
            <div className="cvEducationSubHeading">
              <h3>Longridge High School <br/> September 2008 - July 2013</h3>
            </div>
            <div className="cvEducationDetails">
              <p>
                GCSE's- English- C, Mathematics- C, Triple Science- C, Information Technology- C, Graphics- C, Art- B
              </p>
            </div>
            <div className="cvEducationSubHeading">
              <h3>Preston College  <br/> September 2013 - June 2015</h3>
            </div>
            <div className="cvEducationDetails">
              <p>
                BTEC- level 3 Extended Diploma in Sport and Coaching
              </p>
            </div>
            <div className="cvEducationSubHeading">
              <h3>The Open University <br/> April 2024 - Present (expected completion April 2027)</h3>
            </div>
            <div className="cvEducationDetailsB">
              <p>
                BSc computing and IT (software focus)
              Current achieved grade- First-Class Honours
              </p>
            </div>

            <div className="cvTechSkillsTitle">
              <h2>Technical skills-</h2>
            </div>
            <div className="cvTechSkillsSubHeading">
              <h3>Languages:</h3>
            </div>
            <div className="cvTechSkillDetails">
              <p>
                • JavaScript
                • Python
                • SQL
                • HTML5
                • CSS
              </p>
            </div>
            <div className="cvTechSkillsSubHeading">
              <h3>Developer tools:</h3>
            </div>
            <div className="cvTechSkillDetails">
              <p>
                • Git
                • Github
                • Visual studio code
              </p>
            </div>
            <div className="cvTechSkillsSubHeading">
              <h3>Libraries/Frameworks:</h3>
            </div>
            <div className="cvTechSkillDetailsB">
              <p>
                • React.JS
                • Node.js
                • Tailwind CSS
                • Bootstrap
              </p>
            </div>

            <div className="projectsTitle">
              <h2>Projects/Stretch Assignments-</h2>
            </div>
            <div className="projectSubHeading">
              <h3>Smartlift-</h3>
            </div>
            <div className="projectDetails">
              <p>
                • Contributed toward integration of smartlift technology installed onto material handling machinery.
                • Aim of improving operational efficiency with material handling machinery company wide.
                • Contributed to the collection of the data and expert feedback on the installed systems.
                • Had a lasting impact on future supply chain operation within the plant and companywide.
              </p>
            </div>
            <div className="projectSubHeading">
              <h3>Keg sorting operation-</h3>
            </div>
            <div className="projectDetailsB">
              <p>
              • Assigned the task of improving operational efficiency of keg sorting operations within the plant.
              • Consulted with supply chain professionals on an initial decomposition for the assigned task.
              • Planned the design of the area and equipment that would be utilised for said operation.
              • Oversaw the entirety of the project and its integration into daily operations.
              </p>
            </div>

            <div className="employmentTitle">
              <h2>Employment-</h2>
            </div>
            <div className="employmentSubHeading">
              <h3>
              AB-InBev 
              <br/>
              December 2021- Present 
              <br/> 
              Job Title - Warehouse Operator/Supply Chain Operator
              </h3>
            </div>
            <div className="employmentDetails">
              <p>
              Key Roles and Responsibilities:
                • Key KPI and project implementation improving overall plant optimisation.
                • Lead and work alongside experienced supply chain professionals.
                • Expert knowledge of Prism, DDMS and WMS systems whilst servicing supply chain operations.
                • Ensuring documentation accuracy throughout a myriad of processes within daily operations.
                • Strong understanding of capital expenditure and project budgets to maximise project success.
                • Extensive analytical problem-solving abilities utilised within a highly competitive FMCG sector.
              </p>
            </div>
            <div className="employmentSubHeading">
              <h3>
              AB-InBev (On behalf of Acorn recruitment) 
              <br/> 
              April 2021 - December 2021
              <br/>
              Job Title - Warehouse Operator
              </h3>
            </div>
            <div className="employmentDetails">
              <p>
              Key Roles and Responsibilities:
                • Servicing supply lines with raw materials and removal of finished product.
                • Loading and unloading vehicles whilst operating WMS.
                • Ensuring documentation accuracy through select processes in use within daily operations.
                • Working within a team environment ensuring all tasks are completed to the highest standard.
                • Dedicated focus on maintaining all Departmental and Company KPIs.
                • Ability to deal with minor issues as they occur, Maintaining Safety and high working standards.
              </p>
            </div>
            <div className="employmentSubHeading">
              <h3>
              KENLEY Warehouse & Distribution LTD 
              <br/>
              September 2020 - April 2021
              <br/>
              Job Title - Forklift truck driver
              </h3>
            </div>
            <div className="employmentDetailsB">
              <p>
              Key Roles and Responsibilities:
                • Preforming stock control and documenting space within the warehouse.
                • Assembling loads in preparation for outbound deliveries alongside loading and unloading vehicles.
                • Updating digital WMS for the stock clerks, managers and customer reference.
                • Complying to health and safety rules, RTITB FLT standards and time constraints.
              </p>
            </div>
            
          </div>
        </div>
      )}
      
    </div>
    </>
  );
}

function About() {

  const[cvPopupOpen, setCvPopupOpen] = useState(false);
  
  const toggleCvPopup = () => {
    setCvPopupOpen(!cvPopupOpen);
  };

  return (
    <>
    <div className="aboutHero">
      <div className="personalProfile">
        <h2 className='ppTitle'>
          A bit about <span className='TitleHighlights'>Me</span>
        </h2>
        <p className='ppText'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
          praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
           excepturi sint occaecati cupiditate non provident, similique sunt in culpa 
           qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum 
           quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta 
           nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat 
           facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
           autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut 
           et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic 
           tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur.
        </p>
      </div>
      <div className="codeBase">
        <h2 className='codeBaseTitle'>
          My <span className='TitleHighlights'>code base </span> and <span className='TitleHighlights'> Frameworks</span>
        </h2>
        <p className='codeText'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
          praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
           excepturi sint occaecati cupiditate non provident, similique sunt in culpa 
           qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum 
           quidem rerum facilis est et expedita distinctio.</p>
        <div className="languageIcons">
          <p>Languages</p>
          <div className="icons">
          <FaJs className='jsIcon'/>
          <FaNodeJs className='NodeJsIcon'/>
          <FaDatabase className='sqlIcon'/>
          <FaHtml5 className='htmlIcon'/>
          <FaCss3 className='cssIcon'/>
          <FaPython className='pythonIcon'/>
          </div>
        </div>
        <div className="frameworkIcons">
          <p>Frameworks</p>
          <div className="icons">
          <FaReact className='reactIcon'/>
          <FaBootstrap className='bootstrapIcon'/>
          </div>
        </div>
        <div className="devTools">
          <p>Dev tools</p>
          <div className="icons">
            <FaGit className='gitIcon'/>
            <FaGithub className='githubIcon'/>
          </div>
        </div>
      </div>
      <div className="cvBtns">
        <button className=' viewCvBtn' onClick={toggleCvPopup}>View my CV</button>
        <a className="downloadCvBtn" href="/RyanSingletonCV_25.pdf" download>Download my CV</a>
      </div>
      <div className="workHistory">
        <h2 className='workTitle'>My <span className='TitleHighlights'>work</span> experience</h2>
        <p className='workText'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
          praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
           excepturi sint occaecati cupiditate non provident. atque corrupti quos dolores et quas molestias
           excepturi sint occaecati cupiditate non provident.</p>
      </div>
      {cvPopupOpen && (
        <div className="cvPopup">
          <FaTimes className='cvPopupCloseBtn' onClick={toggleCvPopup}/>
          <div className="cvMain">

            <h2 className='cvTitle'>Ryan Singleton</h2>

            <div className="cvContactTitle">
              <h2>Contact details-</h2>
            </div>
            <div className="cvContactDetails">
              <a href="tel:+44777331102">
                <FaPhoneAlt className='cvIcons'/>
                07712331102
              </a>
              <a href="mailto: singletonrcc@gmail.com">
                <FaEnvelope className='cvIcons'/>
                singletonrcc@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/ryan-singleton-676196325/">
                <FaLinkedin className='cvIcons'/>
                https://www.linkedin.com/in/ryan-singleton-676196325/
              </a>
            </div>
            
            <div className="cvEducationTitle">
              <h2>Education-</h2>
            </div>
            <div className="cvEducationSubHeading">
              <h3>Longridge High School <br/> September 2008 - July 2013</h3>
            </div>
            <div className="cvEducationDetails">
              <p>
                GCSE's- English- C, Mathematics- C, Triple Science- C, Information Technology- C, Graphics- C, Art- B
              </p>
            </div>
            <div className="cvEducationSubHeading">
              <h3>Preston College  <br/> September 2013 - June 2015</h3>
            </div>
            <div className="cvEducationDetails">
              <p>
                BTEC- level 3 Extended Diploma in Sport and Coaching
              </p>
            </div>
            <div className="cvEducationSubHeading">
              <h3>The Open University <br/> April 2024 - Present (expected completion April 2027)</h3>
            </div>
            <div className="cvEducationDetailsB">
              <p>
                BSc computing and IT (software focus)
              Current achieved grade- First-Class Honours
              </p>
            </div>

            <div className="cvTechSkillsTitle">
              <h2>Technical skills-</h2>
            </div>
            <div className="cvTechSkillsSubHeading">
              <h3>Languages:</h3>
            </div>
            <div className="cvTechSkillDetails">
              <p>
                • JavaScript
                • Python
                • SQL
                • HTML5
                • CSS
              </p>
            </div>
            <div className="cvTechSkillsSubHeading">
              <h3>Developer tools:</h3>
            </div>
            <div className="cvTechSkillDetails">
              <p>
                • Git
                • Github
                • Visual studio code
              </p>
            </div>
            <div className="cvTechSkillsSubHeading">
              <h3>Libraries/Frameworks:</h3>
            </div>
            <div className="cvTechSkillDetailsB">
              <p>
                • React.JS
                • Node.js
                • Tailwind CSS
                • Bootstrap
              </p>
            </div>

            <div className="projectsTitle">
              <h2>Projects/Stretch Assignments-</h2>
            </div>
            <div className="projectSubHeading">
              <h3>Smartlift-</h3>
            </div>
            <div className="projectDetails">
              <p>
                • Contributed toward integration of smartlift technology installed onto material handling machinery.
                • Aim of improving operational efficiency with material handling machinery company wide.
                • Contributed to the collection of the data and expert feedback on the installed systems.
                • Had a lasting impact on future supply chain operation within the plant and companywide.
              </p>
            </div>
            <div className="projectSubHeading">
              <h3>Keg sorting operation-</h3>
            </div>
            <div className="projectDetailsB">
              <p>
              • Assigned the task of improving operational efficiency of keg sorting operations within the plant.
              • Consulted with supply chain professionals on an initial decomposition for the assigned task.
              • Planned the design of the area and equipment that would be utilised for said operation.
              • Oversaw the entirety of the project and its integration into daily operations.
              </p>
            </div>

            <div className="employmentTitle">
              <h2>Employment-</h2>
            </div>
            <div className="employmentSubHeading">
              <h3>
              AB-InBev 
              <br/>
              December 2021- Present 
              <br/> 
              Job Title - Warehouse Operator/Supply Chain Operator
              </h3>
            </div>
            <div className="employmentDetails">
              <p>
              Key Roles and Responsibilities:
                • Key KPI and project implementation improving overall plant optimisation.
                • Lead and work alongside experienced supply chain professionals.
                • Expert knowledge of Prism, DDMS and WMS systems whilst servicing supply chain operations.
                • Ensuring documentation accuracy throughout a myriad of processes within daily operations.
                • Strong understanding of capital expenditure and project budgets to maximise project success.
                • Extensive analytical problem-solving abilities utilised within a highly competitive FMCG sector.
              </p>
            </div>
            <div className="employmentSubHeading">
              <h3>
              AB-InBev (On behalf of Acorn recruitment) 
              <br/> 
              April 2021 - December 2021
              <br/>
              Job Title - Warehouse Operator
              </h3>
            </div>
            <div className="employmentDetails">
              <p>
              Key Roles and Responsibilities:
                • Servicing supply lines with raw materials and removal of finished product.
                • Loading and unloading vehicles whilst operating WMS.
                • Ensuring documentation accuracy through select processes in use within daily operations.
                • Working within a team environment ensuring all tasks are completed to the highest standard.
                • Dedicated focus on maintaining all Departmental and Company KPIs.
                • Ability to deal with minor issues as they occur, Maintaining Safety and high working standards.
              </p>
            </div>
            <div className="employmentSubHeading">
              <h3>
              KENLEY Warehouse & Distribution LTD 
              <br/>
              September 2020 - April 2021
              <br/>
              Job Title - Forklift truck driver
              </h3>
            </div>
            <div className="employmentDetailsB">
              <p>
              Key Roles and Responsibilities:
                • Preforming stock control and documenting space within the warehouse.
                • Assembling loads in preparation for outbound deliveries alongside loading and unloading vehicles.
                • Updating digital WMS for the stock clerks, managers and customer reference.
                • Complying to health and safety rules, RTITB FLT standards and time constraints.
              </p>
            </div>
            
          </div>
        </div>
      )}
    </div>
    </>
  )
}

function Projects() {
  return (
    <div className="projectsHero">
      <div className="projectimgbody">
      <div className="projectsImagesLeft">
        {projectPicsLeft.map((pic, index) => (
          <img key={index} src={pic} alt={`project-${index}`} className='projectimg' />
        ))}
      </div>
      <div className="projectsCenter">
        <h2 className='projectHeroTitle'>A few of my <span className='TitleHighlights'>Projects</span></h2>
        <h3 className='projectHeroText'>you can find more of my work and the code base for my projects through the link below</h3>
        <a href="https://github.com/Rsiing">
        <FaGithub className='projectGithubIcon'/>
        </a>
      </div>
      <div className="projectsImagesRight">
        {projectPicsRight.map((pic, index) => (
          <img key={index} src={pic} alt={`project-${index}`} className='projectimg' />
        ))}
      </div>
      </div>
    </div>
  );
}

function Contact() {
  return(
    <>
      <div className="contactHero">
        <div className="contactLeft">
        
        <div className="contactText">
        <h2 className='contactTitle'>How to <span className='TitleHighlights'>Contact</span> me</h2>
          <h3 className='liContact'>Find my Linkedin profile here</h3>
          <h3 className='eContact'> You can email me from</h3>
          <h3 className='mContact'>Contact my mobile from </h3>
          <h3 className='ghContact'>View my Github profile</h3>
        </div>
        </div>
        <div className="contactRight">
          <div className="contactIcons">
          <a href="mailto: singletonrcc@gmail.com">
          <FaEnvelope className='emailIconContact' href=''/>
        </a>
        <a href="tel:+44777331102">
          <FaPhoneAlt className='phoneIconContact'/>
        </a>
        <a href="https://www.linkedin.com/in/ryan-singleton-676196325/">
          <FaLinkedin className='LinkedinIconContact'/>
        </a>
        <a href="https://github.com/Rsiing">
          <FaGithub className='GithubIconContact'/>
        </a>
          </div>
        </div>
        
      </div>
    </>
  )
}
function App() {
  const [activePage, setActivePage] = useState('Hero');
  const togglePage = (currentPage) => {
    setActivePage(currentPage);
  }
  return (
    <>
      <Navbar togglePage={togglePage}/>
      {activePage === 'Hero' && <Hero/>}
      {activePage === 'About' && <About/>}
      {activePage === 'Projects' && <Projects/>}
      {activePage === 'Contact' && <Contact/>}
    </>
  )
}

export default App

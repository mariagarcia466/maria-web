import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import edgeImage from './Edge16.jpg'; // import the image
import westernengineering from './westernengineering.png'; // import the image
import image from './image.png'; // import the image
import scotia from './scotia.png'; // import the image
import whitenights from './whitenights.png'; // import the image
import twilight from './twilight.png'; // import the image
import notes from './notes.png'; // import the image
import belljar from './belljar.png'; // import the image
import beingandnothingness from './beingandnothingness.png'; // import the image
import ethics from './ethics.png'; // import the image


function App() {
  return (
    <Router basename="/maria-web">
      <div className="App">
        <nav className="navbar">
          <div className="navbar-left">
            Bits & Being
          </div>
          <div className="navbar-links">
            <Link to="/" className="nav-button">Home</Link>
            <Link to="/about" className="nav-button">About Me</Link>
            <Link to="/projects" className="nav-button">Technical Projects</Link>
            <Link to="/passions" className="nav-button">Passions</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/passions" element={<Passions />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <img src={edgeImage} alt="Maria Paula Garcia Beltran" className="home-image" />
        <div className="home-text">
          <h1 className="home-title">Hello World, I'm Maria Paula.</h1>
          <p className="home-subtitle">Engineer | Reader | Meaning-Maker</p>
          <p className="home-description">
            Welcome to my personal website, Bits & Being! 
          </p>
            <p className="home-description"> I am a passionate engineer with a love for reading and creating meaning in everything I do. Explore my projects, passions, and learn more about me. I work at the intersection of infrastructure, security, and systems thinking — building things that are reliable, scalable, and meaningful. 
            I’m also someone who finds clarity in philosophy, complexity in literature, and joy in asking better questions. Whether I’m writing code or reading Fanon, I care about how things work — and why they matter. 
            </p>
            <p className="home-description">Welcome to my space: part portfolio, part personal archive. I’m glad you’re here.</p>
          <div className="home-buttons">
        <Link to="/about" className="home-button">About Me</Link>
        <Link to="/projects" className="home-button">My Projects</Link>
        <Link to="/passions" className="home-button">My Passions</Link>
        
      </div>
        </div>
      </div>
      
    </div>
    
  );
}

function About() {
  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <h2 className="about-subtitle">Education</h2>
        <div className="about-image-container">
        <div>
        <p className="about-description">
          I recently earned my Bachelor of Engineering from Western University, 
          where I was consistently recognized on the Dean’s Honour List and awarded the Western Scholarship of Excellence. 
          My academic journey included intensive coursework in courses such as:
        </p>
        <ul className="about-list">
          <li>Data Structures and Algorithms</li>
          <li>Digital Logic Systems</li>
          <li>Database Management Systems</li>
          <li>Computer Networking</li>
          <li>Cloud Computing</li>
          <li>Machine Learning</li>
          <li>Artificial Intelligence 1 & 2</li>
        </ul>
        </div>
        <img src={image} alt="Maria Paula Garcia Beltran" className='eng'/>
  
        </div>

        <h2 className="about-subtitle">Work Experience</h2>
        <div>
        <p className="about-work-description">
            Professionally, I’ve worked across industries and tech stacks to create powerful, real-time solutions. Most recently, I served as a Data Engineer with Scotiabank’s AIML International Banking team, where I developed and optimized machine learning models for various business lines across South America. My work led to a 15% improvement in model performance, contributing to significant projected profit gains. I also designed and implemented a comprehensive model monitoring tracker to detect drift and evaluate performance across all analytics models — a tool that has since been adopted by the entire international banking division.
          </p>
          <p className="about-work-description">
            In a previous internship with Scotiabank’s Customer Insights and Data Analytics (CIDA) group, I supported strategic initiatives by gathering insights from large-scale datasets using SQL and Excel. These insights played a role in guiding upper management on key business strategies. I also led social engagement across the Scotiabank Velocity intern cohort as Co-Chair of the Velocity Social Committee, organizing summer events and collaborating directly with recruiters and program managers — a role that sharpened my leadership and team-building skills.
          </p>
          
          <p className="about-work-description">
            Before Scotiabank, I worked as a Game Development Engineer at Bounce Back Digital in Waterloo, where I led a small engineering team in the creation of a cube-chess multiplayer game. Using Unity, C#, WebGL, JavaScript, and React, we developed both the game and the web-based platform, allowing me to deepen my expertise in both client-side and server-side development.
          </p>
          <img src={scotia} alt="Maria Paula Garcia Beltran" className='scotia'/>
        </div>

       
      </div>
    </div>
  );
}

function Projects() {
  const projectList = [
    {
      title: "Final Capstone Project: NextGenScrub",
      description:
        "an augmented reality solution using Microsoft HoloLens 2 to enable senior surgeons to remotely mentor and assess junior surgeons, addressing the shortage of senior professionals in Canada. By utilizing real-time video streaming, interactive annotations, and two-way communication, the system offers a hands-on, immersive training experience that enhances surgical education and improves patient outcomes.",
      video: "https://www.youtube.com/embed/T47WuFNIdYA?si=qjHVDGbCyyAJWW3d", // Updated embed URL
    },
    {
      title: "1st Place at SheHacks 2023: Interview Simulator",
      description:
        "A web app built during SheHacks to simulate behavioral interviews. Designed to improve confidence and preparation for real-world interviews. Built with unity, and C# using websockets for real-time communication, and cohere for NLP model. Winner of the 2023 competition.",
      github: "https://github.com/mariagarcia466/Interview-Sim",
    },
    {
      title: "Warhol: Photographic Encryption",
      description:
        "An artistic encryption tool that transforms photos into glitch-style visuals to explore privacy and expression. Built with image processing techniques and showcased in a video demo.",
      video: "https://www.youtube.com/embed/dicgqSnwSCc?si=TJTzsuyQ6B2_sXIT", // Updated embed URL
    },
    {
      title: "Sleep Disorder Detection",
      description:
        "A machine learning project that uses EEG data to identify sleep disorders. The model achieved 95% accuracy in classifying sleep stages.",
      video: "https://www.youtube.com/embed/PguyhjrXMec?si=oXg05zcK8-kyv5fX", // Updated embed URL
    },
  ];

  return (
    <div className="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="project-cards">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            {project.video && (
              <div className="video-wrapper">
                <iframe
                  src={project.video}
                  title={project.title}
                  width="100%"
                  height="250"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="spotify-container">
        <h2 className="spotify-title">What My IDE Was Listening To</h2>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/5D29eh2TfJD5rixstRxUzB?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

function Passions() {const [expandedBook, setExpandedBook] = useState(null);

  const books = [
    {
      title: "White Nights",
      author: "Fyodor Dostoevsky",
      cover: whitenights,
      insight: "Taught me to separate control from chaos"
    },
    {
      title: "Twilight of the Idols",
      author: "Friedrich Nietzsche",
      cover: twilight,
      insight: "Broke my brain (in the best way)"
    },
    {
      title: "Notes from Underground",
      author: "Fyodor Dostoevsky",
      cover: notes,
      insight: "Broke my brain (in the best way)"
    },
    {
      title: "The Bell Jar",
      author: "Sylvia Plath",
      cover: belljar,
      insight: "Reimagined suffering as creative fuel"
    },
    {
      title: "Being and Nothingness",
      author: "Jean-Paul Sartre",
      cover: beingandnothingness,
      insight: "Reimagined suffering as creative fuel"
    },
    {
      title: "Ethics of Ambiguity",
      author: "Simone de Beauvoir",
      cover: ethics,
      insight: "Reimagined suffering as creative fuel"
    }
  ];

  return (
    <div className="passions-container">
      {/* Hero Section with pink accent */}
      <div className="philosophy-hero">
        <h1>Philosophy</h1>
        <p>When I'm not coding, I'm wrestling with ideas. Here's what fuels my mind.</p>
      </div>

 {/* Books Grid */}
 <div className="books-section">
        <h2 style={{ color: '#ff1493' }}>Novels That Shaped Me</h2>
        <div className="book-grid">
          {books.map((book, index) => (
            <div 
              key={index}
              className={`book-card ${expandedBook === index ? 'expanded' : ''}`}
              onClick={() => setExpandedBook(expandedBook === index ? null : index)}
              
            >
              <img src={book.cover} alt={book.title} />
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                {expandedBook === index && (
                  <div className="book-insight">
                    <p>"{book.insight}"</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 style={{ color: '#ff1493' }}>My Writings</h2>
      <div className="essay-section">
        <h2>Conference-Selected Essay: </h2>
        <h2><em>"Echoes of Intersubjectivity in Frida Kahlo’s Tree of Hope, Remain Strong"</em></h2>
        <p>This essay was nominated for the MAP (Minorities and Philosophy) annual conference, and it remains one of the pieces I’m most proud of. In it, I explore how Frida Kahlo’s Tree of Hope, Remain Strong artistically embodies the philosophical ideas of Frantz Fanon and Jean-Paul Sartre. Specifically, I look at how the painting reflects their claims about intersubjectivity—the way our identities are shaped by how others perceive us—and the resulting struggle to assert self-definition. If you're interested in the intersection of art, identity, and existential thought, this piece is for you.</p>
        
        <div className="pdf-embed">
          <iframe 
            src="https://drive.google.com/file/d/14eo-m8v8hZWcCJCTho-a2EqtzwcqS94K/preview" 
            title="Philosophy Essay"
            width="100%" 
            height="500px"
          />
          <a 
            href="https://drive.google.com/file/d/14eo-m8v8hZWcCJCTho-a2EqtzwcqS94K/view?usp=sharing" 
            className="download-btn"
            download
          >
            Download Full Essay
          </a>
        </div>
      </div>

    </div>
  );
}

export default App;



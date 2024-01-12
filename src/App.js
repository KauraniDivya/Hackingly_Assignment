import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import coverphoto from "./components/images/coverphoto.jpg";
import profile from "./components/images/profile.jpg";
import TechStack from './components/TechStack';
import EventCard from './components/EventCard';
import ProjectCard from './components/ProjectCard';
import Header from './components/Header';

function App() {
  const [connectionStatus, setConnectionStatus] = useState("Connect");
  const [showScrollButton, setShowScrollButton] = useState(false);


  const handleConnectClick = () => {
    const newStatus = connectionStatus === "Connect" ? "Connected" : "Connect";
    setConnectionStatus(newStatus);

    if (newStatus === "Connected") {
      console.log("Connected Successfully");
      toast.success('Connected Successfully');
    }
  };
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowScrollButton(scrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    
    <div className="App" style={{overflowX:"hidden"}}>
    <Header />
      <ToastContainer />
      <main className="profile-page">
  <section className="relative block h-500-px">
  <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${coverphoto})` }}>

      <span id="blackOverlay" className="w-full h-full absolute"></span>
    </div>
    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{transform: "translateZ(0px)"}}>
      <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section>
  <section className="relative py-16 bg-blueGray-200">
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img alt="..." src={profile} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-1 max-w-200-px" style={{marginLeft:"-100px"}}/>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
        <div className="py-6 px-3 mt-32 sm:mt-0">
          <button
            className="bg-darkblue-500 active:bg-darkblue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
            type="button"
            style={{
              backgroundColor: "darkblue",
              marginTop: "20px",
              // Media query for tablet screens
              '@media (max-width: 768px)': {
                marginTop: "100px",
              },
            }}
            onClick={handleConnectClick}
          >
            {connectionStatus}
          </button>
        </div>
      </div>
      

<div className="w-full lg:w-4/12 px-4 lg:order-1">
  <div className="flex justify-center py-4 lg:pt-4 pt-8 mt-2">
  
    <div className="flex flex-col items-center mx-4">
      <div
        className="w-16 h-16 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md"
        style={{ boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)' }}
      >
        <span className="text-3xl font-bold text-blueGray-500">4</span>
      </div>
      <div className="text-center mt-2">
        <span className="text-sm text-blueGray-400">Hackathons</span>
      </div>
    </div>
    <div className="flex flex-col items-center mx-4">
    <div
        className="w-16 h-16 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md"
        style={{ boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)' }}
      >
        <span className="text-3xl font-bold text-blueGray-500">2</span>
      </div>
      <div className="text-center mt-2">
        <span className="text-sm text-blueGray-400">Upcoming Events</span>
      </div>
    </div>
    
    <div className="flex flex-col items-center mx-4">
    <div
        className="w-16 h-16 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md"
        style={{ boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)' }}
      >
        <span className="text-3xl font-bold text-blueGray-500">8</span>
      </div>
      <div className="text-center mt-2">
        <span className="text-sm text-blueGray-400">Projects</span>
      </div>
    </div>

    
    
  </div>
</div>

          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-bold leading-normal mb-2 text-blueGray-800 mb-2">
              Divya Kaurani
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Ahmedabad
            </div>
            <div className="text-blueGray-600 mt-10 flex flex-col md:flex-row justify-center items-center">
  <div className="mb-4 md:mb-0 md:mr-20 md:ml-4" style={{marginRight:"50px"}}>
    <i className="fas fa-envelope ml-2 mr-2 text-lg text-blueGray-400"></i>kauranidivya@gmail.com
  </div>
  <div className="mb-4 md:mb-0 md:mx-20" style={{marginRight:"50px"}}>
    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Founder, Developer - ColleGPT
  </div>
  <div className="mb-4 md:mb-0 md:mr-4 md:ml-20">
    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>LDRP Institute of Technology and Research
  </div>
</div>





            
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              
              <div className="mt-10 py-10 border-blueGray-200 text-center" style={{marginTop:"-40px"}}>
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 text-left mt-0" style={{marginLeft:"30px"}}>
              About
            </h3>
            
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700 text-left" style={{marginLeft:"30px"}}>
                Hello! I'm Divya Kaurani, a dedicated MERN Stack developer. My journey includes winning the BTB Hackathon and being a finalist in the SSIP competition. I'm also proud to be the founder, Mern Developer and Content Creator at ColleGPT. My passion lies in creating innovative solutions and contributing to the world of technology.
                </p>
                </div>
              
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 text-left mt-0" style={{marginLeft:"30px"}}>
              Tech Stack
            </h3>
            </div>
            <TechStack />
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 text-left mt-0" style={{marginLeft:"30px"}}>
              Events and Hackathons
            </h3>
            </div>
            
            <EventCard />
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 text-left mt-0" style={{marginLeft:"30px"}}>
              Projects
            </h3>
            </div>
            
            <ProjectCard />
          
          </div>
        </div>
      </div>
    </div>
    {showScrollButton && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
            style={{ backgroundColor: "blue", position: "fixed", bottom: "20px", right: "20px" }}
            onClick={scrollToTop}
          >
            ↑
          </button>
        )}
  </section>
  
</main>

    </div>
  );
}

export default App;
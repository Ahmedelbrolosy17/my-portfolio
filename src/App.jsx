import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero isMobile={isMobile} />
              </div>
              <About />
              {!isMobile && (<Tech />)}
              <Works />
              <div className="relative z-0">
                <Contact isMobile={isMobile} />
                <StarsCanvas />
              </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

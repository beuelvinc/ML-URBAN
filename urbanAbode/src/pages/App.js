import React, { useEffect, useState } from "react";
import About from "@/components/about";
import Footer from "@/components/footer";
import Header from "@/components/homepage/Header";
import Offers from "@/components/Offers";
import SplashScreen from "@/components/utils/SlashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      sessionStorage.setItem('splashScreenShown', 'true')
    }, 4200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if(JSON.parse(sessionStorage.getItem('splashScreenShown'))) {
      setShowSplash(false)
    }
  }, [])

  return (
    <div className="main-container">
      <div
        className={showSplash ? "splash-screen" : "splash-out menu-opened-out"}
      >
        {showSplash && <SplashScreen />}
      </div>

      {!showSplash && (
        <div>
          <section className="screen">
            <Header />
          </section>
          <section className="screen">
            <Offers />
          </section>
          <section className="screen">
            <About />
          </section>
          <section>
            <Footer />
          </section>
        </div>
      )}
    </div>
  );
};

export default App;

import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/splash.json";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";

const SplashScreen = () => {
  return (
    <div className="splashContainer">
      <div className="splash">
        <div className="splash-animation">
          <Fade duration={1500}>
            <Lottie animationData={animationData} />
          </Fade>
        </div>
        <Typewriter
          options={{
            html: "<span style='color: red'></span>",
            cursor: "<span style='color: #fff'>|</span>",
          }}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(35)
              .pauseFor(800)
              .typeString(
                "<span style='color: #fff'>Welcome Home :)</span>"
              )
              .pauseFor(500)
              .deleteAll()
              .start();
          }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;

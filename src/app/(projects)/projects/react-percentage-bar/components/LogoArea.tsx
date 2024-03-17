import React from "react";
import { CircularProgressBar } from "react-percentage-bar";
import { LinearProgressBar } from "react-percentage-bar";
import "react-percentage-bar/dist/index.css";

const LogoArea = () => {
  return (
    <React.Fragment>
      <div
        className="flex h-40 w-screen flex-col items-center justify-center 
        bg-gradient-to-r from-rose-700 to-purple-900 sm:h-60"
      >
        <div className="flex scale-50 flex-col items-center sm:scale-75">
          <CircularProgressBar
            styles="separators"
            antiClockWise={true}
            roundLineCap={false}
            percentage={70}
            shadow={false}
            loopCount={Infinity}
            reverseDelay={800}
            trackColor={"transparent"}
            color={"white"}
            percentageStyle={{
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          />
          <h1 className="font-kurale mt-6 text-4xl font-bold text-white">
            React Percentage Bar
          </h1>
          <LinearProgressBar
            showPercentage={false}
            height={"0.2rem"}
            percentage={100}
            roundLineCap={false}
            trackColor={"transparent"}
            duration={3000}
            color={"white"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LogoArea;

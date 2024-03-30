import { CircularProgressBar, LinearProgressBar } from "react-percentage-bar";

type codeTypes = {
  title: string;
  element: JSX.Element;
}[];

export const codes: codeTypes = [
  {
    title: "Default",
    element: <CircularProgressBar />,
  },
  {
    title: "Stroke Color",
    element: <CircularProgressBar color={"#57C5B6"} />,
  },
  {
    title: "Track Color",
    element: <CircularProgressBar trackColor={"#00ff0088"} />,
  },
  {
    title: "Radius",
    element: <CircularProgressBar radius={"7rem"} />,
  },
  {
    title: "Style : Solid",
    element: <CircularProgressBar styles={"solid"} />,
  },
  {
    title: "Style : Separators",
    element: <CircularProgressBar styles={"separators"} />,
  },
  {
    title: "Style : Pie Chart",
    element: <CircularProgressBar styles={"pie-chart"} />,
  },
  {
    title: "Stroke Size",
    element: <CircularProgressBar size={"0.5rem"} />,
  },
  {
    title: "Percentage",
    element: <CircularProgressBar percentage={90} />,
  },
  {
    title: "Duration",
    element: <CircularProgressBar duration={1000} />,
  },
  {
    title: "Start Position",
    element: <CircularProgressBar startPosition={"90"} />,
  },
  {
    title: "Shadow",
    element: <CircularProgressBar shadow={true} />,
  },
  {
    title: "Custom Inner Shadow",
    element: (
      <CircularProgressBar
        shadow={true}
        innerShadowStyle={{
          boxShadow: "5px 5px 10px #4F455788",
        }}
      />
    ),
  },
  {
    title: "Custom Outer Shadow",
    element: (
      <CircularProgressBar
        shadow={true}
        outerShadowStyle={{
          boxShadow: "5px 5px 10px #4F455788",
        }}
      />
    ),
  },
  {
    title: "Text",
    element: <CircularProgressBar text={"React"} />,
  },
  {
    title: "Show Percentage",
    element: <CircularProgressBar showPercentage={false} />,
  },
  {
    title: "Custom Percentage Style",
    element: (
      <CircularProgressBar
        percentageStyle={{
          fontSize: "1.8rem",
          fontWeight: "600",
          color: "#22c55e",
          fontStyle: "italic",
        }}
      />
    ),
  },
  {
    title: "Custom Text Style",
    element: (
      <CircularProgressBar
        text={"React"}
        textStyle={{
          fontSize: "1rem",
          color: "black",
          fontStyle: "italic",
          margin: "-5px",
        }}
      />
    ),
  },
  {
    title: "Children",
    element: (
      <CircularProgressBar showPercentage={false}>
        <img
          src="/logo192.png"
          alt="portfolio logo"
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "0.2rem",
          }}
        />
      </CircularProgressBar>
    ),
  },
  {
    title: "Line Cap",
    element: <CircularProgressBar roundLineCap={false} />,
  },
  {
    title: "Animation",
    element: <CircularProgressBar animation={false} />,
  },
  {
    title: "Percentage Animation",
    element: <CircularProgressBar percentageAnimation={true} />,
  },
  {
    title: "Reverse",
    element: <CircularProgressBar reverse={true} />,
  },
  {
    title: "Reverse Duration",
    element: <CircularProgressBar reverseDuration={1000} />,
  },
  {
    title: "Loop with Reverse",
    element: <CircularProgressBar loopCount={5} />,
  },
  {
    title: "Loop without Reverse",
    element: <CircularProgressBar loopCount={5} reverse={false} />,
  },
  {
    title: "Start Delay",
    element: <CircularProgressBar startDelay={1000} loopCount={5} />,
  },
  {
    title: "Reverse Delay",
    element: <CircularProgressBar reverseDelay={1000} loopCount={5} />,
  },
  {
    title: "Anti Clockwise",
    element: <CircularProgressBar antiClockWise={true} />,
  },
  {
    title: "Background Color",
    element: <CircularProgressBar backgroundColor={"#bbd6b8"} />,
  },
  {
    title: "Padding",
    element: (
      <CircularProgressBar padding={"1rem"} backgroundColor={"#bbd6b8"} />
    ),
  },
  {
    title: "Customize Separator",
    element: (
      <CircularProgressBar
        styles={"separators"}
        separator={[5, 8, "white"]}
        roundLineCap={false}
      />
    ),
  },
  {
    title: "Customize Pie Chart",
    element: (
      <CircularProgressBar
        styles={"pie-chart"}
        chartValue={{
          10: "red",
          30: "blue",
          80: "green",
          100: "yellow",
        }}
      />
    ),
  },
  {
    title: "Sample - 1",
    element: (
      <CircularProgressBar
        color={["#fc2947", "#7149c6"]}
        trackColor={"#D8D8D866"}
        shadow={true}
        loopCount={Infinity}
        startDelay={10}
        reverseDelay={500}
        reverseDuration={800}
      />
    ),
  },
  {
    title: "Sample - 2",
    element: (
      <CircularProgressBar
        shadow={true}
        color={["#7149c6", "#fc2947"]}
        loopCount={Infinity}
        text={"Km/h"}
        showPercentage={false}
        startPosition={-135}
        roundLineCap={false}
        styles={"separators"}
      />
    ),
  },
  {
    title: "Sample - 3",
    element: (
      <CircularProgressBar
        shadow={true}
        color={["#7149c6", "#fc2947"]}
        loopCount={Infinity}
        text={"Km/h"}
        showPercentage={false}
        startPosition={-135}
        roundLineCap={false}
        styles={"separators"}
      />
    ),
  },
  {
    title: "Sample - 4",
    element: (
      <CircularProgressBar
        color={["#fc2947", "#7149c6"]}
        trackColor={"#D8D8D866"}
        shadow={true}
        loopCount={Infinity}
        startDelay={10}
        reverseDelay={500}
        reverseDuration={800}
        radius={"6rem"}
        showPercentage={false}
      >
        <CircularProgressBar
          color={["#fc2947", "#7149c6"]}
          trackColor={"#D8D8D866"}
          shadow={true}
          loopCount={Infinity}
          startDelay={10}
          reverseDelay={500}
          reverseDuration={800}
          radius={"4.5rem"}
        />
      </CircularProgressBar>
    ),
  },
  {
    title: "Sample - 5",
    element: (
      <CircularProgressBar
        color={["#fc2947", "#7149c6"]}
        trackColor={"#D8D8D866"}
        shadow={true}
        loopCount={Infinity}
        startDelay={10}
        reverseDelay={500}
        reverseDuration={800}
        radius={"6rem"}
        showPercentage={false}
      >
        <CircularProgressBar
          color={["#fc2947", "#7149c6"]}
          trackColor={"#D8D8D866"}
          shadow={true}
          loopCount={Infinity}
          startDelay={10}
          reverseDelay={500}
          reverseDuration={800}
          radius={"4.5rem"}
          antiClockWise={true}
        />
      </CircularProgressBar>
    ),
  },
];

export const linearCodes: codeTypes = [
  {
    title: "Default",
    element: <LinearProgressBar width={"15rem"} />,
  },
  {
    title: "Stroke Color",
    element: <LinearProgressBar width={"15rem"} color={"#57C5B6"} />,
  },
  {
    title: "Track Color",
    element: <LinearProgressBar width={"15rem"} trackColor={"#00ff0088"} />,
  },
  {
    title: "Percentage",
    element: <LinearProgressBar width={"15rem"} percentage={90} />,
  },
  {
    title: "Duration",
    element: <LinearProgressBar width={"15rem"} duration={1000} />,
  },
  {
    title: "Text",
    element: <LinearProgressBar width={"15rem"} text={"React"} />,
  },
  {
    title: "Show Percentage",
    element: <LinearProgressBar width={"15rem"} showPercentage={false} />,
  },
  {
    title: "Custom Text Style",
    element: (
      <LinearProgressBar
        text={"React"}
        textStyle={{
          fontSize: "1rem",
          color: "black",
          fontStyle: "italic",
        }}
      />
    ),
  },
  {
    title: "Line Cap",
    element: <LinearProgressBar width={"15rem"} roundLineCap={false} />,
  },
  {
    title: "Animation",
    element: <LinearProgressBar width={"15rem"} animation={false} />,
  },
  {
    title: "Percentage Animation",
    element: <LinearProgressBar width={"15rem"} percentageAnimation={false} />,
  },
  {
    title: "Percentage Color",
    element: <LinearProgressBar width={"15rem"} percentageColor={"red"} />,
  },
  {
    title: "Height",
    element: <LinearProgressBar width={"15rem"} height={"0.5rem"} />,
  },
  {
    title: "Percentage Position",
    element: (
      <LinearProgressBar width={"15rem"} percentagePosition={"onright"} />
    ),
  },
  {
    title: "Start Direction",
    element: <LinearProgressBar width={"15rem"} startDirection={"right"} />,
  },
  {
    title: "Sample - 1",
    element: (
      <LinearProgressBar
        width={"15rem"}
        color={["#fc2947", "#7149c6"]}
        text={"React"}
        textStyle={{
          textAlign: "center",
          fontSize: "1.3rem",
          fontStyle: "italic",
        }}
      />
    ),
  },
  {
    title: "Sample - 2",
    element: (
      <LinearProgressBar
        width={"15rem"}
        color={["#fc2947", "#7149c6"]}
        percentagePosition={"onleft"}
        percentageColor={"white"}
        startDirection={"right"}
        trackColor={"#cbcbcb"}
        text={"React"}
        textStyle={{
          textAlign: "center",
          fontSize: "1.3rem",
          fontStyle: "italic",
        }}
      />
    ),
  },
  {
    title: "Sample - 3",
    element: (
      <LinearProgressBar
        width={"15rem"}
        color={["#fc2947", "#7149c6"]}
        startDirection={"right"}
        trackColor={"linear-gradient(to left , #B6E2A1 ,#9EA1D4)"}
        text={"React"}
        textStyle={{
          textAlign: "left",
          fontSize: "1.3rem",
          fontStyle: "italic",
          marginLeft: "0.8rem",
          marginBottom: "0.4rem",
        }}
      />
    ),
  },
];

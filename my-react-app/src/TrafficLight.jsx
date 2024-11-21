import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("green");

  useEffect(() => {
    // Define the light transition flow
    const lightSequence = [
      { color: "green", duration: 3000 },  // Green for 3 seconds
      { color: "yellow", duration: 2000 }, // Yellow for 2 seconds
      { color: "red", duration: 5000 },    // Red for 5 seconds
      { color: "yellow", duration: 2000 }, // Yellow for 2 seconds
    ];

    let currentIndex = 0;

    const changeLight = () => {
      currentIndex = (currentIndex + 1) % lightSequence.length;
      setColor(lightSequence[currentIndex].color);

      setTimeout(changeLight, lightSequence[currentIndex].duration);
    };

    const timeoutId = setTimeout(changeLight, lightSequence[0].duration);

    return () => clearTimeout(timeoutId); // Cleanup on component unmount
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          backgroundColor: "#333",
          padding: "20px",
          borderRadius: "10px",
          width: "120px",
          margin: "0 auto",
        }}
      >
        {/* Green Circle */}
        <div
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "green",
            borderRadius: "50%",
            opacity: color === "green" ? 1 : 0.3,
            border: "2px solid black",
            boxShadow: color === "green" ? "0 0 15px green" : "none",
          }}
        ></div>

        {/* Yellow Circle */}
        <div
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "yellow",
            borderRadius: "50%",
            opacity: color === "yellow" ? 1 : 0.3,
            border: "2px solid black",
            boxShadow: color === "yellow" ? "0 0 15px yellow" : "none",
          }}
        ></div>

        {/* Red Circle */}
        <div
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "red",
            borderRadius: "50%",
            opacity: color === "red" ? 1 : 0.3,
            border: "2px solid black",
            boxShadow: color === "red" ? "0 0 15px red" : "none",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;

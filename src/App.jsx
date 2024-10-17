import React from "react";
import MyBook from "./components/MyBook";
import BgTextuer from "./assets/bg.jpg";

const BgTextuerStyle = {
  backgroundImage: `url(${BgTextuer})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%"
};
const App = () => {
  return (
    <div 
    style={BgTextuerStyle} 
    className="w-full h-full flex justify-center items-center"
    >
      <MyBook />
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import Bg from "./Components/Bg/Bg";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
// dv by karim
const App = () => {
  let heroData = [
    { text1: "Explore", text2: "The New Ferrari" },
    { text1: "Experience", text2: "The Thrill of Ferrari" },
    { text1: "Legacy ", text2: "Power" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  useEffect(() =>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000);
  },[])
  return (
    <div>
      <Bg playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};
// dv by karim
export default App;

// import { useState } from "react"
// import Bg from "./Components/Bg/Bg";
// import { Navbar } from "./Components/Navbar/Navbar";

// const App = () =>  { 
//   let heroData = [
//     {text1:"Explore",text2:"The New Ferrari"},
//     {text1:"Ferrari",text2:"Red"},
//     {text1:"2024",text2:"Ferrari"},
//   ]
//   const [heroCount, setHeroCount] = useState(0);
//   const [playStatus, setPlayStatus] = useState(false);
//   return (
//     <div>
//       <Bg playStatus={playStatus} heroCount={heroCount}/> 
//       <Navbar/>
//       <Hero
//         setPlayStatus={setPlayStatus}
//         heroData={heroData[heroCount]}
//         heroCount={heroCount}
//         setHeroCount={setHeroCount}
//         playStatus={playStatus}
//       />
//     </div>
//   )
// }

// export default App

// dv by karim
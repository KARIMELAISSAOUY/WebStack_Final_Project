import './Hero.css';
import arrow_btn from '../../assets/Ferr/arrow_btn1.png';
import play_icon from '../../assets/Ferr/play_icon.png';
import pause_icon from '../../assets/Ferr/pause_icon.png'; // Corrected

export const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-exp">
        <p>Explore More ...</p>
        <img src={arrow_btn} alt="btn" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot org" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot org" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot org" : "hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt="video" /> 
          <p>See the video <i class="fa fa-eye" aria-hidden="true"></i></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;










// dv by karim











// import './Hero.css';
// import arrow_btn from '../../assets/Ferr/arrow_btn.png';
// import play_icon from '../../assets/Ferr/play_icon.png';
// import pause_icon from '../../assets/Ferr/pause_icon.png';

// export const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
//   return (
//     <div className="hero">
//       <div className="hero-text">
//         <p>{heroData.text1}</p>
//         <p>{heroData.text2}</p>
//       </div>
//       <div className="hero-exp">
//         <p>Explore More ...</p>
//         <img src={arrow_btn} alt="btn" />
//       </div>
//       <div className="hero-dot-play">
//         <ul className="hero-dots">
//           <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
//           <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
//           <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
//         </ul>
//             <div className="hero-play">
//               <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause-icon:play-icon} alt="video" />
//               <p>See the video</p>
//             </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

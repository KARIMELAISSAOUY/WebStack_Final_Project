import './Bg.css';
import video from '../../assets/Ferr/video.mp4';
import image1 from '../../assets/Ferr/ferrari1.jpg';
import image2 from '../../assets/Ferr/ferrari2.jpg';
import image3 from '../../assets/Ferr/ferrari3.jpg';

const Bg = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="bg fad-in" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="bg fad-in" alt="ferrari" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="bg fad-in" alt="ferrari" />;
  } else if (heroCount === 2) {
    return <img src={image3} className="bg fad-in" alt="ferrari" />;
  }
};

export default Bg;

// dv by karim
// import './Bg.css'
// import video1 from '../../assets/Ferr/video1.mp4'
// // import image1 from '../../assets/image1.png'
// // import image2 from '../../assets/image2.png'
// // import image3 from '../../assets/image3.png'
// import image1 from '../../assets/Ferr/ferrari1.jpg'
// import image2 from '../../assets/Ferr/ferrari2.jpg'
// import image3 from '../../assets/Ferr/ferrari3.jpg'
// import image4 from '../../assets/Ferr/ferrari4.jpg'
// import image5 from '../../assets/Ferr/ferrari5.jpg'
// import image6 from '../../assets/Ferr/ferrari6.jpg'


// const Bg = ({ playStatus, heroCount }) => {
//   if (playStatus) {
//     return (
//       <video className="bg" autoPlay loop muted>
//         <source src={video1} type="video/mp4" />
//       </video>
//     );
//   } else if (heroCount === 0) {
//     return <img src={image1} className="bg" alt="ferrari" />;
//   } else if (heroCount === 1) {
//     return <img src={image2} className="bg" alt="ferrari" />;
//   } else if (heroCount === 2) {
//     return <img src={image3} className="bg" alt="ferrari" />;
//   }else if (heroCount === 3) {
//     return <img src={image4} className="bg" alt="ferrari" />;
//   }else if (heroCount === 4) {
//     return <img src={image5} className="bg" alt="ferrari" />;
//   }else if (heroCount === 5) {
//     return <img src={image6} className="bg" alt="ferrari" />;
//   }
// };


// export default Bg 
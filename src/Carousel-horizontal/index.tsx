import { useEffect, useState } from 'react';
import './index.css'
import { useKeenSlider } from "keen-slider/react";


const data = [
  {
    cover: "https://images6.alphacoders.com/679/thumb-1920-679459.jpg",
    title: "Interstaller",
  },
  {
    cover: "https://images2.alphacoders.com/851/thumb-1920-85182.jpg",
    title: "Inception",
  },
  {
    cover: "https://images6.alphacoders.com/875/thumb-1920-875570.jpg",
    title: "Blade Runner 2049",
  },
  {
    cover: "https://images6.alphacoders.com/114/thumb-1920-1141749.jpg",
    title: "Icon man 3",
  },
  {
    cover: "https://images3.alphacoders.com/948/thumb-1920-948864.jpg",
    title: "Venom",
  },
  {
    cover: "https://images2.alphacoders.com/631/thumb-1920-631095.jpg",
    title: "Steins Gate",
  },
  {
    cover: "https://images4.alphacoders.com/665/thumb-1920-665242.png",
    title: "One Punch Man",
  },
  {
    cover: "https://images2.alphacoders.com/738/thumb-1920-738176.png",
    title: "A Silent Voice",
  },
  {
    cover: "https://images8.alphacoders.com/100/thumb-1920-1005531.jpg",
    title: "Demon Slayer",
  },
  {
    cover: "https://images2.alphacoders.com/582/thumb-1920-582804.png",
    title: "Attack On Titan",
  },
];

export const CarouselHorizontal = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    // slideChanged(slider) {
    //   setCurrentSlide(slider.track.details.rel);
    // },
  });

  useEffect(() => {
    const handleTouchStart = () => {
      setShowNavigation(true);
      const timer = setTimeout(() => {
        setShowNavigation(false);
      }, 1000)

      return () => clearTimeout(timer)
    };

    document.addEventListener('touchstart', handleTouchStart);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <div className='carousel-container'>
      <div className={`navigation left ${showNavigation && 'navigation-visible'}`}>
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
        <path d="M17.5742 11.9355H4.71643" stroke="white" stroke-width="2.402" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.1445 5.50586L4.71564 11.9348L11.1445 18.3636" stroke="white" stroke-width="2.402" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      </div> 

      <div ref={sliderRef} className="keen-slider">
        {data.map((img, index) => (
          <img
            src={img.cover} 
            key={index}
            className={`keen-slider__slide`}
          />
        ))}
      </div> 

      <div className={`navigation right ${showNavigation && 'navigation-visible'}`}>
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
          <path d="M5.37109 11.9355H18.2289" stroke="white" stroke-width="2.402" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.7988 5.50586L18.2277 11.9348L11.7988 18.3636" stroke="white" stroke-width="2.402" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>  
    </div>
  
  );
};

import './index.css'
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu'
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


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
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    // slideChanged(slider) {
    //   setCurrentSlide(slider.track.details.rel);
    // },
  });

  return (
    <div className="w-[350px] h-[400px]">
      <LuArrowLeft size={10} className='hidden'/>
      <div ref={sliderRef} className="keen-slider">
        {data.map((img, index) => (
          <img
            src={img.cover}
            key={index}
            className={`keen-slider__slide`}
          />
        ))}
      </div>
      <LuArrowRight size={10} className='hidden'/>
    </div>
  );
};

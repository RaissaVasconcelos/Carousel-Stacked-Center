import './index.css'
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu'
import { useEffect, useState } from 'react';

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

export const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  const updateImages = () => {
    const prevIndex = (slide - 1 + data.length) % data.length;
    const nextIndex = (slide + 1) % data.length;

    // Define as imagens a serem exibidas
    const prevImage = data[prevIndex].cover;
    const currentImage = data[slide].cover;
    const nextImage = data[nextIndex].cover;

    // Atualiza o array de imagens
    setImages([prevImage, currentImage, nextImage]);
  };

  const nextSlide = () => {
    setSlide((slide + 1) % data.length);
  };

  const prevSlide = () => {
    setSlide((slide - 1 + data.length) % data.length);
  };

  useEffect(() => {
    updateImages();
  }, [slide]);

  return (
    <div className="carousel">
      <LuArrowLeft size={10} className='arrow arrow-left' onClick={prevSlide}/>
        {images.map((cover, index) => (
          <img
            src={cover}
            key={index}
            className={`slide ${index === 1 ? 'slide-center' : 'slide-side'}`}
          />
        ))}
      <LuArrowRight size={10} className='arrow arrow-right' onClick={nextSlide}/>
    </div>
  );
};

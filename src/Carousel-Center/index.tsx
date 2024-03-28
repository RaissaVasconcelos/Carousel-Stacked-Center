import './index.css'
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu'
import { useState } from 'react';
import clsx from 'clsx'

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

interface Image {
  cover: string
  title: string
}

export const Carousel = () => {
  const [slide, setSlide] = useState(0)
  
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
  }

  // const getClassName = (index) => {
  //   const next = (slide + 1) % data.length;
  //   const prev = (slide - 1 + data.length) % data.length;

  //   if (index === slide) {
  //     return 'slide slide-center';
  //   } else if (index === prev || index === next) {
  //     return 'slide slide-side';
  //   } else {
  //     return 'slide slide-hidden';
  //   }
  // }

  return (
    <div className="carousel">
      <LuArrowRight size={10} className='arrow arrow-right' onClick={nextSlide}/>
      
      {data.map(({ cover, title }: Image, index: number) => {
        const next = slide + 1;
        const prev = slide - 1;

        const className = clsx({
          'slide': index === slide,
          'slide slide-side': index === prev || index === next || (index === 0 && slide === data.length - 1) || (index === data.length - 1 && slide === 0),
          'slide-hidden': index !== slide && index !== prev && index !== next && !(index === 0 && slide === data.length - 1) && !(index === data.length - 1 && slide === 0),
        });
        return (
          <img
            src={cover}
            alt={title}
            key={index + 2}
            className={className}
          />
        )
      })}
      
      <LuArrowLeft size={10} className='arrow arrow-left' onClick={prevSlide}/>
      
      <span className='indicators'>
        {data.map((_, index: number) => {
          return <button
            key={index}
            className={ slide === index ? 'indicator' : 'indicator indicator-inactive' }
            onClick={ () => setSlide(index) }
          />
        })}
      </span>
    </div>
  )
}


import React from "react";
import './index.css'
import { LuArrowRight, LuArrowLeft } from 'react-icons/lu'
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

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


export default function ResponsiveCarousel() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = React.useRef<any>();
  
  return (  
    <div style={{ width: "100%", height: '350px', position: "relative", border: '1px solid black' }}>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Slide}
              slideWidth={450}
              carouselWidth={parentWidth}
              data={data}
              maxVisibleSlide={5}
              useGrabCursor
              transitionTime={450}
            />
          );
        }}
      />
      <>
        <button
          className="button left"
          onClick={() => {
            ref.current?.goNext();
          }}
          >
          <LuArrowRight fontSize={20} color="white"/>
        </button>
        <button
          className="button right"
          onClick={() => {
            ref.current?.goBack();
          }}
        >
          <LuArrowLeft fontSize={20} color="white"/>
        </button>
      </>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Slide = React.memo(function (props: any) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } = props;
  const { cover } = data[dataIndex];

  return (
    <div className='card' draggable={false}>
      <div className={`cover`}>
        <div
          className='card-overlay fill'
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
        <img className='cover-image fill' src={cover}/>
      </div>
    </div>
  );
});
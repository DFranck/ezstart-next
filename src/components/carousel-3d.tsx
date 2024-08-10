'use client';
import ImagePlaceholderSvg from '@/components/svgs/image-placeholder-svg';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode, useEffect, useRef } from 'react';
import bgImg from '../../public/assets/imgs/devnobg.png';

type Carousel3dProps = {
  imgNum?: number;
  children?: ReactNode;
  stopOnHover?: boolean;
};

const Carousel3d = ({
  imgNum = 10,
  children,
  stopOnHover,
}: Carousel3dProps) => {
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const items = Array.from({ length: imgNum }, (_, i) => i + 1);
  const childrenArray = React.Children.toArray(children) as ReactElement[];
  const itemRotateX = 0;
  const itemSpace = 500;
  const carouselRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.focus();
    }
  }, []);
  return (
    <div
      className="w-full h-[500px]  flex justify-center items-center overflow-hidden relative"
      style={{ perspective: '1000px' }}
      role="region"
      aria-label="3D Image Carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      ref={carouselRef}
    >
      <div
        className="relative w-40 lg:w-52 h-64 animate-rotateY z-0"
        style={{
          transformStyle: 'preserve-3d',
          '--quantity': imgNum.toString(),
          animationPlayState: isMouseOver ? 'paused' : 'running',
        }}
      >
        {items.map((position) => (
          <div
            key={position}
            className="absolute inset-0 h-fit cursor-pointer"
            style={{
              transform: `rotateY(calc((var(--position) - 1) * (360deg / var(--quantity)))) translateZ(${itemSpace}px) rotateX(${itemRotateX}deg)`,
              '--position': position.toString(),
            }}
            onMouseEnter={() => {
              if (stopOnHover) setIsMouseOver(true);
            }}
            onMouseLeave={() => {
              if (stopOnHover) setIsMouseOver(false);
            }}
            role="img"
            aria-label={`Image ${position}`}
          >
            {childrenArray[position - 1] || (
              <ImagePlaceholderSvg
                className="w-full h-full object-cover"
                background="transparent"
              />
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2  flex flex-wrap justify-between items-center">
        <div className="relative w-screen flex flex-col justify-end px-8 h-fit self-end lg:items-end">
          <h1 className="absolute font-icaRubrik text-8xl xl:text-[16em] lg:text-[12em] lg:left-1/2  bottom-20 lg:-translate-x-1/2 leading-[1em] text-primary z-0 font-bold mb-8 ">
            EzStart
          </h1>
          <span
            id="carousel-3d-h1"
            className="absolute font-icaRubrik text-8xl lg:text-[12em] xl:text-[16em] lg:left-1/2 bottom-20 lg:-translate-x-1/2 leading-[1em] text-transparent z-20 font-bold mb-8 "
          >
            EzStart
          </span>
          <div className="font-poppins max-w-[200px] lg:mr-40">
            <h2 className="text-[3em]">PMF WebDev</h2>
            <p>
              <b>FrontEnd Developer</b>
            </p>
          </div>
        </div>
        <Image
          src={bgImg}
          alt="Background Image"
          className=" absolute bottom-0 right-0 lg:left-[50%] lg:-translate-x-1/2 z-10"
          width={200}
        />
      </div>
    </div>
  );
};

Carousel3d.propTypes = {
  imgNum: PropTypes.number,
  children: PropTypes.node,
};

export default Carousel3d;

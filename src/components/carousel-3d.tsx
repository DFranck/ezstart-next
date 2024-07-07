import ImagePlaceholderSvg from "@/components/svgs/image-placeholder-svg";
import PropTypes from "prop-types";
import React, { ReactElement, ReactNode } from "react";

type Carousel3DProps = {
  imgNum?: number;
  children?: ReactNode;
};

const Carousel3D = ({ imgNum = 5, children }: Carousel3DProps) => {
  const items = Array.from({ length: imgNum }, (_, i) => i + 1);
  const childrenArray = React.Children.toArray(children) as ReactElement[];
  const itemRotateX = 0;
  const itemSpace = 500;
  return (
    <div
      className="w-full h-screen flex justify-center items-center overflow-hidden relative"
      style={{ perspective: "1000px" }}
      role="region"
      aria-label="3D Image Carousel"
    >
      <div
        className="relative w-52 h-64 animate-rotateY"
        style={{
          transformStyle: "preserve-3d",
          "--quantity": imgNum.toString(),
        }}
      >
        {items.map((position) => (
          <div
            key={position}
            className="absolute inset-0"
            style={{
              transform: ` rotateY(calc((var(--position) - 1) * (360deg / var(--quantity)))) translateZ(${itemSpace}px) rotateX(${itemRotateX}deg)`,
              "--position": position.toString(),
            }}
            role="img"
            aria-label={`Image ${position}`}
          >
            {childrenArray[position - 1] || (
              <ImagePlaceholderSvg className="w-full h-full object-cover" />
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[min(1400px,100vw)] h-max pb-24 flex flex-wrap justify-between items-center">
        <h1
          className="font-icaRubrik text-[16em] leading-[1em] text-customBlue after:content-[attr(content)] after:absolute after:inset-0 after:z-2 after:text-2xl"
          data-content="EzStart"
        >
          EzStart
        </h1>
        <div className="font-poppins text-right max-w-[200px]">
          <h2 className="text-[3em]">PMF WebDev</h2>
          <p>
            <b>FrontEnd Developer</b>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

Carousel3D.propTypes = {
  imgNum: PropTypes.number,
  children: PropTypes.node,
};

export default Carousel3D;

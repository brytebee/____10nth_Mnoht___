'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import leftArrow from '../../../../public/svgs/arrow-circle-broken-left.svg';
import rightArrow from '../../../../public/svgs/arrow-circle-broken-right.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data from '../coursesCourasel/data';
import styles from './CoursesCourasel.module.scss';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<Carousel | null>(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous(1); // Move one slide to the left
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next(1); // Move one slide to the right
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <>
      <div
        className={`${styles.container_cont} overflow-hidden md:my-2 bg-white px-2 pb-2 hidden md:block`}
      >
        <Carousel
          swipeable
          draggable
          responsive={responsive}
          ssr
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl={false}
          customTransition="transform 400ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          arrows={false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px d-flex align-items-stretch mt-3 px-2"
          centerMode
          ref={carouselRef}
        >
          {data.map((item: any, index: any) => (
            <div key={index} className={styles.carousel_items}>
              <div className="col-md-3 col-sm-3">
                <Image
                  src={item.imageSrc}
                  width={419}
                  height={275}
                  alt={item.alt}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="md:flex justify-between w-100% md:px-2 hidden md:block md:mt-[50px]">
        <button onClick={handlePrevClick} className={styles.btn}>
          <Image src={leftArrow} alt="Previous" width={48} height={48} />
        </button>
        <button onClick={handleNextClick} className={styles.btn}>
          <Image src={rightArrow} alt="Next" width={48} height={48} />
        </button>
      </div>
    </>
  );
};

export default CustomCarousel;

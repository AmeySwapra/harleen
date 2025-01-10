import React from "react";
import { Box, IconButton, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import img1 from '../assets/logo/amit.png'
import img2 from '../assets/logo/bhandari.jpeg'
import img3 from '../assets/logo/hira.jpeg'
import img4 from '../assets/logo/kasturi.jpeg'
import img5 from '../assets/logo/kolte-patil.png'
import img6 from '../assets/logo/kptl-logo.png'
import img7 from '../assets/logo/Lodha.jpeg'
import img8 from '../assets/logo/mittal-logo.jpeg'
import img9 from '../assets/logo/mont-vert.jpeg'
import img10 from '../assets/logo/nyati-group.jpeg'
import img11 from '../assets/logo/pride-purple.jpeg'
import img12 from '../assets/logo/puraniks-logo.jpeg'
import img13 from '../assets/logo/vilas-javdekar.png'
import img14 from '../assets/logo/paradise.png'
import img15 from '../assets/logo/panchshil.png'

const ImageCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: (
      <IconButton
        icon={<ChevronRightIcon />}
        aria-label="Next Slide"
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        bg="black"
        color="white"
        _hover={{ bg: "gray.700" }}
        p={4}
      />
    ),
    prevArrow: (
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Previous Slide"
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        bg="black"
        color="white"
        _hover={{ bg: "gray.700" }}
        p={4}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
          centerMode: true,
        },
      },
    ],
  };

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];

  

  return (
    <Box className="elementor-section" position="relative">
      <Box
        className="elementor-container"
        mx="auto"
        px={{ base: 4, md: 8, lg: 24 }}
        py={{ base: 2, md: 3 }}
      >
        <Slider {...settings}>
          {images.map((src, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flex="1"
              gap={"50px"}
              px={{ base: 4, md: 8, lg: 24 }}
              py={{ base: 2, md: 3 }}
              m={'auto'}
            >
              <Image
                src={src}
                alt={`carousel-image-${index}`}
                boxSize={{ base: "100px", sm: "150px", md: "180px" }}
                objectFit="contain"
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ImageCarousel;

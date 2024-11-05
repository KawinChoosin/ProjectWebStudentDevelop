import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import bg from './bg.png';

interface CustomCarouselProps {
  children: React.ReactElement<{ src: string }>[];
}

function CustomCarousel({ children }: CustomCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState<number | null>(null); // Changed type to number

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      const timeoutId = setTimeout(() => {
        slideNext();
        setSlideDone(true);
      }, 5000);
      setTimeID(timeoutId);
    }
    return () => {
      if (timeID) clearTimeout(timeID);
    };
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => (val >= children.length - 1 ? 0 : val + 1));
  };

  const slidePrev = () => {
    setActiveIndex((val) => (val <= 0 ? children.length - 1 : val - 1));
  };

  const AutoPlayStop = () => {
    if (timeID) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "150px", sm: "300px", md: "400px", lg: "600px" },
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      <Box
        sx={{
          display: "flex",
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: "transform 1s ease",
          width: `${children.length * 100}%`,
        }}
      >
        {children.map((item, index) => (
          <Box
          key={index}
          sx={{
            flex: "0 0 100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${bg})`,  // Set the background image
            backgroundSize: "cover",        // Ensure the image covers the entire Box
            backgroundPosition: "center",   // Center the image within the Box
            backgroundRepeat: "no-repeat",  // Ensure the image doesn't repeat
            position: "relative",           // To layer any other elements on top
            // Add transparent overlay with your desired color
            '&::before': {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(91, 23, 30, 0.7)", // Transparent overlay color
              zIndex: 0, // Ensure the overlay is above the background image
            }
          }}
        >
            {item && (
              <Box
                component="img"
                src={item.props.src}
                sx={{
                  width: "100%",
               
                 maxHeight: {
                      xs: "160px",  // Extra-small screens
                      sm: "240px",  // Small screens
                      md: "300px",  // Medium screens
                      lg: "460px",  // Large screens
                      xl: "490px",  // Extra-large screens
                    },
                  maxWidth: '1920px',
                  objectFit: "contain",
                  zIndex: 1,
                }}
              />
            )}
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={slidePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "white",
          fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
        }}
      >
        {"<"}
      </IconButton>
      <IconButton
        onClick={slideNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "white",
          fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
        }}
      >
        {">"}
      </IconButton>

      <Box
        sx={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => setActiveIndex(index)}
            size="small"
            sx={{
              margin: "0 4px",
              backgroundColor: activeIndex === index ? "black" : "white",
              border: "1px solid gray",
              borderRadius: "50%",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default CustomCarousel;
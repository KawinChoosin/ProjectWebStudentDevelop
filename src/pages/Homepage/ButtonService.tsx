import { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import IC1 from "./PicIcon/1.png";
import IC2 from "./PicIcon/2.png";
import IC3 from "./PicIcon/3.png";
import IC4 from "./PicIcon/4.png";
import IC5 from "./PicIcon/5.png";
import IC6 from "./PicIcon/6.png";
import IC7 from "./PicIcon/7.png";
import IC8 from "./PicIcon/8.png";
import IC11 from "./PicIcon/11.png";
import IC22 from "./PicIcon/22.png";
import IC33 from "./PicIcon/33.png";
import IC44 from "./PicIcon/44.png";
import IC55 from "./PicIcon/55.png";
import IC66 from "./PicIcon/66.png";
import IC77 from "./PicIcon/77.png";
import IC88 from "./PicIcon/88.png";

const images = [
  { src: IC1, alt: 'Image 1', text: 'งานทุนการศึกษา', hoverSrc: IC11, size: '200px', path: "/scholarship" },
  { src: IC2, alt: 'Image 2', text: 'งานส่งเสริมกิจกรรมนักศึกษา', hoverSrc: IC22, size: '200px', path: "/activities" },
  { src: IC3, alt: 'Image 3', text: 'งานวินัยนักศึกษา', hoverSrc: IC33, size: '200px', path: "/discipline" },
  { src: IC4, alt: 'Image 4', text: 'งานให้คำปรึกษาและดูแลสุขภาพจิต', hoverSrc: IC44, size: '200px', path: "/entaneermind" },
  { src: IC5, alt: 'Image 5', text: 'สวัสดิการสุขภาพนักศึกษา', hoverSrc: IC55, size: '200px', path: "/welfare" },
  { src: IC6, alt: 'Image 6', text: 'จองสถานที่', hoverSrc: IC66, size: '200px', path: "/reserve-place" },
  { src: IC7, alt: 'Image 7', text: 'หนังสือรับรอง', hoverSrc: IC77, size: '200px', path: "/certificate" },
  { src: IC8, alt: 'Image 8', text: 'Entaneer Upskill', hoverSrc: IC88, size: '200px', path: "/entaneer-upskill" },
];

function ButtonService() {
  // State to track hovered index for dynamic image change
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Preload hover images
    images.forEach(image => {
      const img = new Image();
      img.src = image.hoverSrc;
    });
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        zIndex: 20,
        backgroundColor: 'white',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '40px',
          marginBottom: '20px',
          fontSize: {
            xs: '24px',
            sm: '30px',
            md: '35px',
            lg: '40px',
            xl: '45px'
          },
          fontWeight: 'Medium',
          color: '#b00020',
          fontFamily: 'Prompt',
          position: 'relative',
          paddingBottom: '10px',
          '&:after': {
            content: '""',
            position: 'absolute',
            width: '125%',
            height: '3px',
            backgroundColor: '#b00020',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
          },
        }}
      >
        บริการนักศึกษา
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: {
            xs: "15px 0px",
            sm: "30px 0px",
            md: "30px 0px",
            lg: "40px 50px",
          },
          padding: '40px 0',
          width: '80%',
          maxWidth: '1100px',
          '@media (max-width: 700px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
          '@media (max-width: 600px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
          }
        }}
      >
        {images.map((image, index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%", height: "100%", justifyItems: "center" }}>
            <Button
              variant="contained"
              href={image.path}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                width: {
                  xs: '100px',
                  sm: '120px',
                  md: '150px',
                  lg: '220px',
                },
                height: {
                  xs: '100px',
                  sm: '120px',
                  md: '150px',
                  lg: '220px',
                },
                color: 'white',
                fontFamily: 'Prompt',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 0,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '200%',
                boxShadow: hoveredIndex === index ? '0 8px 20px rgba(187, 0, 32, 0.7)' : 'none',
                transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.3s ease',
              }}
            >
              <img
                src={hoveredIndex === index ? image.hoverSrc : image.src}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  transition: '0.3s ease',
                }}
              />
            </Button>
            <Typography
              variant="body2"
              sx={{
                marginTop: '20px',
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                  md: "18px",
                  lg: "22px",
                },
                fontWeight: 700,
                color: '#5B171E',
                fontFamily: 'Prompt',
                textAlign: 'center',
              }}
            >
              {image.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ButtonService;

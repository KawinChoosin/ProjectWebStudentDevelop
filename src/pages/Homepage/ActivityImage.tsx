
// @ts-ignore
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ImageSlider from '../../component/imgslide'; // Ensure this is set up correctly

function ActivityImage() {
  const [slides, setSlides] = useState<any[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbz62Wga6uucBxz9qtAvizMCMVXTdqYPv7skQQA_FUE2Io1tqGH9ZbR-Ubl6tFzKzagw/exec');
  
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
  
        const data = await response.json();
        setSlides(data); // Make sure this matches your state management logic
  
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
  
    fetchImages();
  }, []);
  
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: '20px',
        position: 'relative',
        zIndex: 21,
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '40px',
          marginBottom: '20px',
          height: '100px',
          width: '100%',
          position: 'relative',
          zIndex: 21,
        }}
      >
        <Box
          sx={{
            fontSize: {
              xs: '24px',
              sm: '30px',
              md: '36px',
              lg: '40px',
              xl: '45px',
            },
            fontWeight: 'Medium',
            color: '#b00020',
            fontFamily: 'Prompt',
            display: 'inline-block',
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
          ภาพกิจกรรม
        </Box>
      </Box>

      <Box sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center', zIndex: 21 }}>
        <ImageSlider>
          {slides.map((image: any, index: number) => (
            <Box
            key={index}
            component="img"
            src={image.url}
            alt={image.name} // Use the name as alt text
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
        
          />
          
          ))}
        </ImageSlider>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '10px',
          marginBottom: '10px',
          height: '100px',
          width: '100%',
          position: 'relative',
          zIndex: 21,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: '50%',
            left: '50%',
            width: '30%',
            height: '3.5px',
            backgroundColor: '#b00020',
            transform: 'translateX(-50%)',
          }}
        />
      </Box>
    </Box>
  );
}

export default ActivityImage;

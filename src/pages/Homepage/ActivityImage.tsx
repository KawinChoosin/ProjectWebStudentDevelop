import React from 'react'
import { Box } from '@mui/material';
import ImageSlider from '../../component/imgslide';

function ActivityImage({slides}) {
  return (
    <>
    <Box
        sx={{
          textAlign: 'center',
          marginTop: '40px',
          marginBottom: '20px',
          height: '100px',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            fontSize: '40px',
            fontWeight: 'Medium',
            color: '#b00020', // Red text color
            fontFamily: 'Prompt',
            display: 'inline-block',
            position: 'relative',
            paddingBottom: '10px', // Space for the underline
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '125%', // Width of the underline, 125% of the text
              height: '3px', // Thickness of the underline
              backgroundColor: '#b00020', // Red underline color
              bottom: '0', // Position the underline at the bottom
              left: '50%',
              transform: 'translateX(-50%)', // Center the underline relative to the text
            },
          }}
        >
          ภาพกิจกรรม
        </Box>
      </Box>

      <Box sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
        <ImageSlider>
          {slides.map((image, index) => (
            <img key={index} src={image.url} style={{ objectFit: 'cover', height: '500px' }} />
          ))}
        </ImageSlider>
      </Box>

      <Box sx={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px', height: '100px', width: '100%', position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            bottom: '50%',
            left: '50%',
            width: '30%',
            height: '5px',
            backgroundColor: '#b00020',
            transform: 'translateX(-50%)', // Center horizontally
          }}
        />
      </Box>
      </>
  )
}

export default ActivityImage
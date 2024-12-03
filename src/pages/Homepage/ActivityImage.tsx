// @ts-ignore
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import CustomCarousel from '../../component/imgslide'; // Assuming CustomCarousel is in this path
import axios from 'axios';


function ActivityImage() {
  const [imagedata,setImagedata] = useState([]);

  useEffect(() => {
    const fetchImageSlides = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/imgslide/show`);
        setImagedata(response.data.data)
        // console.log(imagedata)
      } catch (error) {
        console.error('Error fetching image slides:', error);
      }
    };
  
    fetchImageSlides();
  }, [imagedata]);
  

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
        {/* Pass the imagePaths to the CustomCarousel */}
        <CustomCarousel>
          {imagedata.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={`${image.imgPath}`} // Image path relative to the public folder
              alt={`image-${index}`}
              sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          ))}
        </CustomCarousel>
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

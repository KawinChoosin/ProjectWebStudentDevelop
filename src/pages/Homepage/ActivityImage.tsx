
import { Box } from '@mui/material';
import ImageSlider from '../../component/imgslide';

function ActivityImage({slides}:any) {
  return (
    <Box
      sx={{
        backgroundColor: 'white', // Set the background color to white
        padding: '20px', // Add padding if needed
        position: 'relative',
        zIndex: 21, // Ensure it's behind other elements if needed
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
              xs: '24px', // mobile phones
              sm: '30px', // tablets
              md: '36px', // desktops
              lg: '40px', // large desktops
              xl: '45px'  // larger screens
            },
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

      <Box sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center', zIndex: 21 }}>
        <ImageSlider>
          {slides.map((image:any, index:number) => (
            <Box
            component="img"
            key={index}
            src={image.url}
            alt={image.alt} // Always include alt text for accessibility
            sx={{
              objectFit: 'cover',
               width: '100%', // Adjust width if necessary, this makes the image responsive
            }}
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
            transform: 'translateX(-50%)', // Center horizontally
          }}
        />
      </Box>
    </Box>
  );
}

export default ActivityImage;

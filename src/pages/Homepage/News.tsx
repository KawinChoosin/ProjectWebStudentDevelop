import { Box, Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import pic1 from './newsicon/1.png';
import pic2 from './newsicon/2.png';
import pic3 from './newsicon/3.png';
import pic11 from './newsicon/sd.jpg';
import pic22 from './newsicon/sh.jpg';
import pic33 from './newsicon/emf.jpg';

const images = [
  { src: pic11, alt: 'Image 4', text: 'พัฒนาคุณภาพนักศึกษาวิศวะ มช', hoverSrc: pic11, size: '200px', path: "https://www.facebook.com/StudentDevelopmentENG" },
  { src: pic22, alt: 'Image 5', text: 'นักศึกษาทุนวิศวะ มช ', hoverSrc: pic22, size: '200px', path: "https://www.facebook.com/ScholarshipsENG" },
  { src: pic33, alt: 'Image 6', text: 'Entaneer Mind Friend', hoverSrc: pic33, size: '200px', path: "https://www.facebook.com/@EntaneerMindFriendCMU" },
];

const images1 = [
  { src: pic1, alt: 'Image 1', text: 'งานทุนการศึกษา', hoverSrc: pic1, size: '200px', path: "https://www.facebook.com/StudentDevelopmentENG" },
  { src: pic2, alt: 'Image 2', text: 'งานส่งเสริมกิจกรรมนักศึกษา', hoverSrc: pic2, size: '200px', path: "https://www.facebook.com/ScholarshipsENG" },
  { src: pic3, alt: 'Image 3', text: 'งานวินัยนักศึกษา', hoverSrc: pic3, size: '200px', path: "https://www.facebook.com/@EntaneerMindFriendCMU" },
];

const FacebookPageEmbed = ({ pageUrl }: any) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [pageUrl]);

  return (
    <div style={{ width: '100%' }}>
      <div
        className="fb-page"
        data-href={pageUrl}
        data-tabs="timeline"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="false"
        style={{ width: '100%', height: '400px' }}
      >
        <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
          <a href={pageUrl}>Facebook Page</a>
        </blockquote>
      </div>
    </div>
  );
};

const News = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const facebookPages = [
    'https://www.facebook.com/StudentDevelopmentENG',
    'https://www.facebook.com/ScholarshipsENG',
    'https://www.facebook.com/@EntaneerMindFriendCMU'
  ];

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 450); // Update state if screen width is less than 450px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call immediately to set the initial state based on current width

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Only load hover images for small screens
  useEffect(() => {
    if (isMobile) {
      images.forEach(image => {
        const img = new Image();
        img.src = image.hoverSrc;
      });
    }
  }, [isMobile]);

  return (
    <Box sx={{ zIndex: 21, padding: '20px', fontFamily: 'Prompt', backgroundColor: 'white' }}>
      <Box
        sx={{
          marginLeft: '10%',
          fontWeight: 'Medium',
          color: '#b00020',
          position: 'relative',
          display: 'inline-block',
          fontFamily: 'Prompt',
          marginBottom: 4,
          fontSize: { xs: '24px', sm: '30px', md: '35px', lg: '40px', xl: '45px' },
          '&:after': {
            content: '""',
            display: 'block',
            width: '100%',
            height: '3px',
            backgroundColor: '#b00020',
            marginTop: '5px',
            position: 'absolute',
            left: '0',
          },
        }}
      >
        ข่าวประชาสัมพันธ์
      </Box>

      {/* Conditional rendering of Facebook embeds for screens >= 450px */}
      {!isMobile && (
        <Grid container sx={{ justifyContent: 'center', marginBottom: 10 }}>
          {facebookPages.map((pageUrl, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4.5}
              lg={3}
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                gap: '4px',
                flexGrow: 1,
                flexShrink: 1,
                margin: 2,
              }}
            >
              <FacebookPageEmbed pageUrl={pageUrl} />
            </Grid>
          ))}
        </Grid>
      )}

      {/* Show the images/buttons grid only if screen width < 450px */}
      {isMobile && (
        <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
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
                gridTemplateColumns: 'repeat(3, 1fr)',
              },
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
                    width: { xs: '70px', sm: '120px', md: '150px', lg: '220px' },
                    height: { xs: '70px', sm: '120px', md: '150px', lg: '220px' },
                    color: 'white',
                    fontFamily: 'Prompt',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 0,
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '200%',
                    // Darker shadow for normal state
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all 0.3s ease',
                    // On hover, apply stronger shadow
                    '&:hover': {
                      boxShadow: '0 8px 20px rgba(187, 0, 32, 0.7)',
                    },
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
                      xs: "10px",
                      sm: "14px",
                      md: "18px",
                      lg: "22px",
                    },
                    fontWeight: 500,
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
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
  {images1.map((image, index) => (
    <Box key={index} sx={{
      display: 'flex',
      flexDirection: 'column', // Align items in a column (vertically)
      alignItems: 'center', // Center align items horizontally
      width: "100%",  // Ensure it takes full width of the parent container
      height: "100%", // Ensure it takes full height of the parent container
      justifyItems: "center",
      marginBottom: 2,  // Add margin between items
    }}>
      <Button
        variant="contained"
        onMouseEnter={() => setHoveredIndex(index)}  // Set the hovered index to trigger scale effect
        onMouseLeave={() => setHoveredIndex(null)}   // Reset the hovered index
        sx={{
          width: "60%", // Fixed width for the button
          height: "60%", // Fixed height for the button
          padding: 0,
          position: 'relative',
          overflow: 'hidden', // Hide anything that overflows the square area
          borderRadius: 0, // Keep it square (no rounded corners)
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', // Shadow for normal state
          '&:hover': {
            boxShadow: '0 8px 20px rgba(187, 0, 32, 0.7)', // Stronger shadow on hover
          },
        }}
      >
        <img
          src={hoveredIndex === index ? image.hoverSrc : image.src}
          alt={image.alt}
          style={{
            width: '100%',  // Make the image fill the button width
            height: '100%', // Make the image fill the button height
            objectFit: 'contain', // Preserve the aspect ratio and make the image fit inside the square
            transition: 'transform 0.3s ease',  // Smooth transition for scaling
            transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)', // Scale effect on hover
          }}
        />
      </Button>
    </Box>
  ))}
</Box>

        </Box>
      )}
    </Box>
  );
};

export default News;

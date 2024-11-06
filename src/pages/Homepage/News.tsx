import { Box, Button, Card, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
// import pic1 from './newsicon/1.png';
// import pic2 from './newsicon/2.png';
// import pic3 from './newsicon/3.png';
import pic11 from './newsicon/sd.jpg';
import pic22 from './newsicon/sh.jpg';
import pic33 from './newsicon/emf.jpg';

const images = [
  { src: pic11, alt: 'Image 4', text: 'พัฒนาคุณภาพ\nนักศึกษาวิศวะ มช', hoverSrc: pic11, size: '200px', path: "https://www.facebook.com/StudentDevelopmentENG" },
  { src: pic22, alt: 'Image 5', text: 'นักศึกษาทุน\nวิศวะ มช ', hoverSrc: pic22, size: '200px', path: "https://www.facebook.com/ScholarshipsENG" },
  { src: pic33, alt: 'Image 6', text: 'Entaneer\n Mind Friend', hoverSrc: pic33, size: '200px', path: "https://www.facebook.com/@EntaneerMindFriendCMU" },
];

// const images1 = [
//   { src: pic1, alt: 'Image 1', text: 'งานทุนการศึกษา', hoverSrc: pic1, size: '200px', path: "https://www.facebook.com/StudentDevelopmentENG" },
//   { src: pic2, alt: 'Image 2', text: 'งานส่งเสริมกิจกรรมนักศึกษา', hoverSrc: pic2, size: '200px', path: "https://www.facebook.com/ScholarshipsENG" },
//   { src: pic3, alt: 'Image 3', text: 'งานวินัยนักศึกษา', hoverSrc: pic3, size: '200px', path: "https://www.facebook.com/@EntaneerMindFriendCMU" },
// ];

const FacebookPageEmbed = ({ pageUrl }: any) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [pageUrl]);

  return (
    <Box
      sx={{
        // flexGrow: 1,
        // flexShrink: 1,
        // maxWidth: '360px', // Ensure maximum size for larger screens
        // width: '100%',     // Allow full width for smaller screens
        // margin: '0 auto',  // Center horizontally within its container
      }}
    >
      <div
        className="fb-page"
        data-href={pageUrl}
        data-tabs="timeline"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="false"
        style={{
          width: '100%',
          height: '200px', // Default height
        }}
      >
        <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
          <a href={pageUrl}>Facebook Page</a>
        </blockquote>
      </div>

      <style>
        {`
          @media (max-width: 600px) {
            .fb-page {
              width: 360px !important;
              height: 250px !important; /* Adjust for smaller screens */
            }
          }

          @media (min-width: 601px) and (max-width: 960px) {
            .fb-page {
              width: 360px !important;
              height: 300px !important; /* Adjust for medium screens */
            }
          }

          @media (min-width: 961px) {
            .fb-page {
              width: 360px !important;
              height: 400px !important; /* Default for larger screens */
            }
          }
        `}
      </style>
    </Box>
  );
};

const News = () => {
  const [hoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const facebookPages = [
    'https://www.facebook.com/StudentDevelopmentENG',
    'https://www.facebook.com/ScholarshipsENG',
    'https://www.facebook.com/@EntaneerMindFriendCMU'
  ];

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 450 && window.innerHeight<900 || window.innerWidth < 900 && window.innerHeight<450); // Update state if screen width is less than 450px
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
          marginBottom: '20px',
          position: 'relative',
          display: 'inline-block',
          fontFamily: 'Prompt',
          fontSize: {
            xs: '24px', // mobile phones
            sm: '30px', // tablets
            md: '35px', // desktops
            lg: '40px', // large desktops
            xl: '45px', // larger screens
          },
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

      {/* Grid container for responsive layout */}
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {facebookPages.map((pageUrl, index) => (
          <Grid
            item
            xs={12} // 1 column on extra-small screens
            sm={6}  // 2 columns on small screens
            md={3}  // 3 columns on medium and larger screens
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1,    // Allow grid items to grow
              flexShrink: 1,  // Allow grid items to shrink
              maxWidth: '360px', // Limit the max width of the embeds
              width: '100%', // Fill the available space
              margin: '0 auto', // Ensure the grid item is centered
            }}
          >
            <FacebookPageEmbed pageUrl={pageUrl} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default News;

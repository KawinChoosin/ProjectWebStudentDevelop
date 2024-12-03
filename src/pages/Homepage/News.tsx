import { Box, Button, Card, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
// import pic1 from './newsicon/1.png';
// import pic2 from './newsicon/2.png';
// import pic3 from './newsicon/3.png';
import pic11 from './newsicon/sd.jpg';
import pic22 from './newsicon/sh.jpg';
import pic33 from './newsicon/emf.jpg';
import axios from 'axios';




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
  const [hoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [images, setImages] = useState([]);


  useEffect(() => {
    const fetchImageSlides = async () => {
      try {
        const responseurlnews = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/news/show`);
        setImages(responseurlnews.data.data);
 
      } catch (error) {
        console.error('Error fetching image slides:', error);
      }
    };
   
    fetchImageSlides();
  }, [images]);

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
    if (isMobile && images) {
      images.forEach(image => {
        const img = new Image();
        img.src = image.imgPath;
      });
    }
  }, [isMobile]);

  return (
    <Box sx={{ zIndex: 21, padding: '20px', fontFamily: 'Prompt', backgroundColor: 'white' }}>
      {(images.length>0 && <Box
        sx={{
          marginLeft: '10%',
          fontWeight: 'Medium',
          color: '#b00020',
          position: 'relative',
          display: 'inline-block',
          fontFamily: 'Prompt',
          marginBottom: 2,
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
      )}

      {/* Conditional rendering of Facebook embeds for screens >= 450px */}
      {!isMobile && (
        <Grid container sx={{ justifyContent: 'center',mb:"5%"}}>
          {images.map((images, index) => (
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
              <FacebookPageEmbed pageUrl={images.Url} />
            </Grid>
          ))}
        </Grid>
      )}

      {/* Show the images/buttons grid only if screen width < 450px */}
      {isMobile && (
        <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' ,mb:"5%"}}>
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
              width: '85%',
              maxWidth: '1100px',
              '@media (max-width: 700px)': {
                gridTemplateColumns: 'repeat(3, 1fr)',
              },
              '@media (max-width: 600px)': {
                gridTemplateColumns: 'repeat(1, 1fr)',
              },
            }}
          >
            {images.map((image, index) => (
           <Card
           key={index}
           sx={{
             width: "100%",
             height: "100%",
             boxShadow: hoveredIndex === index ? '0 8px 20px rgba(187, 0, 32, 0.7)' : '0 4px 12px rgba(0, 0, 0, 0.5)', // Conditional shadow for card
             transition: 'all 0.3s ease', // Smooth transition for shadow change
             '&:hover': {
               boxShadow: '0 8px 20px rgba(187, 0, 32, 0.7)', // Shadow when card is hovered
             },
           }}
         >
           <a
             href={image.Url}
             style={{ textDecoration: 'none', display: 'block', width: '100%', height: '100%' }} // Make the link cover the entire card
           >
             <Grid container  alignItems="center">
               {/* Image Section (Grid item with 8 columns) */}
               <Grid item xs={7} sm={8} md={8} lg={8} sx={{ display: 'flex', justifyContent: 'center' }}>
                 <Button
                   variant="contained"
                   sx={{
                     width: { xs: '130px', sm: '120px', md: '150px', lg: '220px' },
                     height: { xs: '130px', sm: '120px', md: '150px', lg: '220px' },
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     padding: 0,
                     margin: 2,
                     position: 'relative',
                     overflow: 'hidden',
                     borderRadius: '200%',
                     boxShadow: 'none', // Remove shadow from button itself
                     transition: 'all 0.3s ease',
                   }}
                 >
                   <img
                     src={hoveredIndex === index ? image.imgPath : image.imgPath}
                     alt={image.Url_name}
                     style={{
                       width: '100%',
                       height: '100%',
                       borderRadius: '50%',
                       objectFit: 'cover',
                       transition: '0.3s ease',
                     }}
                   />
                 </Button>
               </Grid>
         
               {/* Text Section (Grid item with 4 columns) */}
               <Grid item xs={5} sm={4} md={4} lg={4}>
               <Typography
                  variant="body2"
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "18px",
                      lg: "22px",
                    },
                    fontWeight: 600,
                    color: '#5B171E',
                    fontFamily: 'Prompt',
                    textAlign: 'center',
                    whiteSpace: 'pre-line', // Interpret \n as line breaks
                    maxWidth: '90%',      // Controls line length for better wrapping
                    wordBreak: 'break-word',
                  }}
                >
                  {image.Url_name}
                </Typography>

               </Grid>
             </Grid>
           </a>
         </Card>
         
           

            ))}
          
        

          </Box>
          
        </Box>
       
        </Box>
      )}
    </Box>
  );
};

export default News;

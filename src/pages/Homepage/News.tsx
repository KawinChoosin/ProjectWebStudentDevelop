import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';

// Component for embedding a single Facebook page
const FacebookPageEmbed = ({ pageUrl }:any) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

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
        <blockquote
          cite={pageUrl}
          className="fb-xfbml-parse-ignore"
        >
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

// Main component for displaying news and multiple Facebook pages
const News = () => {
  // Array of Facebook page URLs
  const facebookPages = [
    'https://www.facebook.com/StudentDevelopmentENG',
    'https://www.facebook.com/ScholarshipsENG',
    'https://www.facebook.com/@EntaneerMindFriendCMU'
  ];

  return (
    <Box
      sx={{
        zIndex: 21,
        padding: '20px',
        fontFamily: 'Prompt',
        backgroundColor: 'white',
      }}
    >
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
            width: '125%',
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

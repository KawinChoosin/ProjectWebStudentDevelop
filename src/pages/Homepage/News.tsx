import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';

const FacebookPageEmbed = ({ pageUrl }: any) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div class="fb-page" 
data-href={pageUrl}
data-width="380" 
data-hide-cover="false"
data-show-facepile="false"></div>
    // <div style={{ width: '100%' }}>
    //   <div
    //     className="fb-page"
    //     data-href={pageUrl}
    //     data-tabs="timeline"
    //     data-small-header="false"
    //     data-adapt-container-width="true"
    //     data-hide-cover="false"
    //     data-show-facepile="false"
    //     style={{ width: '100%', height: '400px' }} // Adjust height as needed
    //   >
    //     <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
    //       <a href={pageUrl}>Facebook Page</a>
    //     </blockquote>
    //   </div>
    // </div>
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

  // Load Facebook SDK
  useEffect(() => {
    if (!window.FB) {
      const script = document.createElement('script');
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0";
      script.async = true;
      script.onload = () => {
        if (window.FB) {
          window.FB.init({
            appId: 'YOUR_APP_ID', // Replace with your Facebook App ID
            xfbml: true,
            version: 'v10.0',
          });
          window.FB.XFBML.parse();
        }
      };
      document.body.appendChild(script);
    }
  }, []);

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
          position: 'relative',
          display: 'inline-block',
          fontFamily: 'Prompt',
          marginBottom: 4,
          fontSize: {
            xs: '24px',
            sm: '30px',
            md: '35px',
            lg: '40px',
            xl: '45px',
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
    </Box>
  );
};

export default News;

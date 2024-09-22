import  { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Englogo from '../component/eng_logo.png';

function Footer() {
  const FacebookPageEmbed = () => {
    useEffect(() => {
      if (window.FB) {
        window.FB.XFBML.parse();
      }
    }, []);

    return (
      <Box>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/StudentDevelopmentENG"
          data-tabs="timeline"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="false"
          style={{
            width: '380px',
            height: '200px', // Default height
            maxWidth: '100%', // Allow it to scale within its container
          }}
        >
          <blockquote
            cite="https://www.facebook.com/StudentDevelopmentENG"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/StudentDevelopmentENG">งานบริการนักศึกษา</a>
          </blockquote>
        </div>

        <style>
          {`
            @media (max-width: 600px) {
              .fb-page {
                width: 100% !important;
                height: 250px !important; /* Adjust for smaller screens */
              }
            }

            @media (min-width: 601px) and (max-width: 960px) {
              .fb-page {
                width: 100% !important;
                height: 300px !important; /* Adjust for medium screens */
              }
            }

            @media (min-width: 961px) {
              .fb-page {
                width: 380px !important;
                height: 400px !important; /* Default for larger screens */
              }
            }
          `}
        </style>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        background: 'linear-gradient(to bottom, #C33443 0%, #5D1920 100%)',
        boxSizing: 'border-box',
        padding: '20px',
        position: 'relative',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        zIndex: 10,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              fontSize: { xs: '14px', sm: '18px', md: '18px', lg: '20px' },
              fontFamily: 'Prompt',
              fontWeight: 'light',
              color: 'white',
              padding: '0 5px',
              boxSizing: 'border-box',
              lineHeight: { xs: '30px', sm: '35px', md: '40px', lg: '40px' },
            }}
          >
            <Box
              component="img"
              src={Englogo}
              alt="LogoFoot"
              sx={{
                maxHeight: { xs: '70px', sm: '90px', md: '100px', lg: '120px' },
                maxWidth: { xs: '240px', sm: '300px', md: '300px', lg: '360px' },
                cursor: 'pointer',
                marginBottom: '10px',
              }}
            />
            <Box sx={{ padding: '0 15px' }}>
              งานพัฒนาคุณภาพนักศึกษา<br />
              ชั้น 2 อาคารเรียนรวมคณะวิศวกรรมศาสตร์ (3 ชั้น) <br />
              คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่<br />
              ✆ โทรศัพท์ 053-944179 ต่อ 100,111,112 เบอร์มือถือ 082-9845234
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ paddingRight: { xs: '0', md: '40px' } }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-start', md: 'flex-end' },
              ml:{sm:"20px"}
            }}
          >
            <FacebookPageEmbed />
          </Box>
        </Grid>

        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
          <Box
            sx={{
              maxWidth: '100%',
              height: '2px',
              backgroundColor: 'white',
              marginBottom: '10px',
              marginLeft: '7%',
              padding: '0 5px',
            }}
          />
          <Typography
            sx={{
              width: '100%',
              color: 'white',
              fontSize: { xs: '10px', sm: '14px', md: '16px', lg: '18px' },
              fontFamily: 'Prompt',
              fontWeight: 'light',
              textAlign: 'left',
              marginLeft: '7%',
              padding: '0 5px',
            }}
          >
            Copyrights © 2024 All Rights Reserved by งานพัฒนาคุณภาพนักศึกษา
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
}

export default Footer;

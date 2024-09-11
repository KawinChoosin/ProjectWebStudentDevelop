import React, { useEffect } from 'react';
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
      <div>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/StudentDevelopmentENG"
          data-tabs="timeline"
          data-width="380px"
          data-height="400px"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
          style={{
            padding: '0 20px',
            display: 'flex',
            justifyContent: 'flex-end',
          }} // Padding for the Facebook embed
        >
          <blockquote
            cite="https://www.facebook.com/StudentDevelopmentENG"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/StudentDevelopmentENG">งานบริการนักศึกษา</a>
          </blockquote>
        </div>
      </div>
    );
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '500px',
        background: 'linear-gradient(to bottom, #C33443 0%, #5D1920 100%)',
        boxSizing: 'border-box',
        padding: '0 20px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center', // Center items vertically
        justifyContent: 'space-between', // Distribute items horizontally
        zIndex: 10, // Ensure footer is behind the navbar
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              width: '100%',
              height: '200px',
              fontSize: '18px',
              fontFamily: 'Prompt',
              fontWeight: 'light',
              color: 'white',
              padding: '0 5px',
              boxSizing: 'border-box',
              lineHeight: '40px',
            }}
          >
            <Box
              component="img"
              src={Englogo}
              alt="LogoFoot"
              sx={{ height: '30%', cursor: 'pointer' }}
            />
            <Box sx={{ padding: '0 15px' }}>
              งานพัฒนาคุณภาพนักศึกษา<br />
              ชั้น 2 อาคารเรียนรวมคณะวิศวกรรมศาสตร์ (3 ชั้น) <br />
              คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่<br />
              ✆ โทรศัพท์ 053-944179 ต่อ 100,111,112 เบอร์มือถือ 082-9845234
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: '150px',
              marginLeft: '20px',
            }}
          >
            <Box
              sx={{
                width: '480px',
                height: '2px',
                backgroundColor: 'white',
              }}
            />
            <Typography
              sx={{
                marginTop: '10px',
                color: 'white',
                fontSize: '14px',
                fontFamily: 'Prompt',
                fontWeight: 'light',
              }}
            >
              Copyrights © 2024 All Rights Reserved by งานพัฒนาคุณภาพนักศึกษา
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ paddingRight: '20px' }}>
          <FacebookPageEmbed />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;

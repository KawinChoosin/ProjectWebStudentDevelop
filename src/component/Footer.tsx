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
            width: '380px', // Set a fixed width
            margin: '0 auto', // Center the block
          }}
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
        height: 'auto', // Allow flexibility
        background: 'linear-gradient(to bottom, #C33443 0%, #5D1920 100%)',
        boxSizing: 'border-box',
        padding: '20px',
        position: 'relative',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        zIndex: 10,
    
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: '100%',
              fontSize: { xs: '18px', md: '18px' },
              fontFamily: 'Prompt',
              fontWeight: 'light',
              color: 'white',
              padding: '0 5px',
              boxSizing: 'border-box',
              lineHeight: { xs: '30px', md: '40px' },
            }}
          >
            <Box
              component="img"
              src={Englogo}
              alt="LogoFoot"
              sx={{ maxHeight: '100px', cursor: 'pointer', maxWidth: "380px" }}
            />
            <Box sx={{ padding: '0 15px' }}>
              งานพัฒนาคุณภาพนักศึกษา<br />
              ชั้น 2 อาคารเรียนรวมคณะวิศวกรรมศาสตร์ (3 ชั้น) <br />
              คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่<br />
              ✆ โทรศัพท์ 053-944179 ต่อ 100,111,112 เบอร์มือถือ 082-9845234
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6} sx={{ paddingRight: { xs: '0', md: '40px' } }}>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
            <FacebookPageEmbed />
          </Box>
        </Grid>

        <Box sx={{ display: "flex", flexDirection: "column", marginTop: '30px' }}>
          <Box
            sx={{
              maxWidth: '100%',
              height: '2px',
              backgroundColor: 'white',
              marginBottom: "10px",
              marginLeft: "7%",
              padding: '0 5px',
            }}
          />
          <Typography
            sx={{
              width: "100%",
              color: 'white',
              fontSize: { xs: '14px', md: '16px' },
              fontFamily: 'Prompt',
              fontWeight: 'light',
              textAlign: 'left',
              marginLeft: "7%",
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

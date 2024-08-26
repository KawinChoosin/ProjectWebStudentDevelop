import React from 'react';
import { Box } from '@mui/material';
import mainpic from '../../pic/mainpic.png';

const MainPic = () => (
  <Box
    sx={{
      position: 'relative',
      width: '100%',
      height: '880px',
    }}
  >
    <Box
      component="img"
      src={mainpic}
      alt="Main Pic"
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '5%',
        color: 'white',
        fontFamily: 'Prompt',
      }}
    >
      <Box
        sx={{
          fontSize: '50px',
          fontWeight: 'Regular',
          mb: '10px',
        }}
      >
        งานพัฒนาคุณภาพนักศึกษา<br />
        คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
      </Box>
      <Box
        sx={{
          fontSize: '34px',
          fontWeight: 'Medium',
        }}
      >
        STUDENT DEVELOPMENT UNIT ENGINEERING CHIANG MAI UNIVERSITY
      </Box>
    </Box>
  </Box>
);

export default MainPic;

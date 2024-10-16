
import { Box } from '@mui/material';
import mainpic from '../../pic/mainpic.png';

const MainPic = () => (
  <Box
    sx={{
      position: 'fixed', // Make the banner fixed to the top
      top: 0, 
      width: '100%', 
      height: '880px',
      zIndex: 10, // Ensure the banner stays above other content
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
          fontSize: {
            xs: '20px', // mobile phones
            sm: '30px', // tablets
            md: '40px', // desktops
            lg: '50px', // large desktops
            xl: '60px'  // larger screens
          },
          fontWeight: 'Regular',
          mb: '10px',
        }}
      >
        งานพัฒนาคุณภาพนักศึกษา<br />
        คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
      </Box>
      <Box
        sx={{
          fontSize: {
            xs: '16px', // mobile phones
            sm: '20px', // tablets
            md: '26px', // desktops
            lg: '30px', // large desktops
            xl: '38px'  // larger screens
          },
          fontWeight: 'Medium',
        }}
      >
        STUDENT DEVELOPMENT UNIT ENGINEERING CHIANG MAI UNIVERSITY
      </Box>
    </Box>
  </Box>
);

export default MainPic;

import React from 'react';
import Navbar from '../../component/Navbar';
import { Box, Card, CardContent, CardMedia, Typography,Grid } from '@mui/material';
import img1 from './Pic_exe/1.jpg'; // Ensure this path is correct
import img2 from './Pic_exe/2.jpg';
import img3 from './Pic_exe/3.jpg'; // Ensure this path is correct
import img4 from './Pic_exe/4.jpg';
import img5 from './Pic_exe/5.jpg'; // Ensure this path is correct
import img6 from './Pic_exe/6.jpg';
import img7 from './Pic_exe/7.jpg';
import Footer from '../../component/Footer';

const cardData = [
  {
    image: img1,
    title: 'ผู้ช่วยศาสตราจารย์ ดร.ปวรุตม์ จงชาญสิทโธ\nAssistant Professor Pawarut Jongchansitto, Ph.D.',
    subtitle: 'รองคณบดี',
    contact: 'โทรศัพท์ : 053-944101-3\nEmail : pawarut.j@cmu.ac.th'
  },
  {
    image: img2,
    title: 'ผู้ช่วยศาสตราจารย์ ดร.จักรพงษ์ จำรูญ\nAssistant Professor Chakkapong Chamroon, Ph.D.',
    subtitle: 'ผู้ช่วยคณบดี',
    contact: 'โทรศัพท์ : 053-944101-3\nEmail : chakkapong.ch@cmu.ac.th'
  },
  {
    image: img3,
    title: 'นางสุกัญญา พิบูลย์\nMrs.SUKANYA PIBOON',
    subtitle: 'หัวหน้างาน',
    contact: 'โทรศัพท์ : 053-944179 # 112\nEmail : sukanya.pi@cmu.ac.th'
  },
  {
    image: img4,
    title: 'นางสาวสุภาพร หลวงธิ\nMs.SUPAPORN LUANGTHI',
    subtitle: 'นักจัดการงานทั่วไป',
    contact: 'โทรศัพท์ : 053-944179 # 110\nEmail : supaporn.luangthi@cmu.ac.th'
  },
  {
    image: img5,
    title: 'นางสาวเนตรนภา สาระแปง\nMs.NETNAPHA SARAPAENG',
    subtitle: 'นักจัดการงานทั่วไป',
    contact: 'โทรศัพท์ : 053-944179 # 111\nEmail : natnapa.s@cmu.ac.th'
  },
  {
    image: img6,
    title: 'นางสาวชนากานต์ ปันต๊ะถา\nMs.CHANAKAN PANTATHA',
    subtitle: 'นักจัดการงานทั่วไป',
    contact: 'โทรศัพท์ : 053-944179 # 115\nEmail : chanakan.pa@cmu.ac.th'
  },
  {
    image: img7,
    title: 'นายกัมพล ใหม่จันทร์ดี\nMr.KAMPON MAICHANDEE',
    subtitle: 'นักจิตวิทยา',
    contact: 'โทรศัพท์ : 053-944179 # 115\nEmail : kampon.m@cmu.ac.th'
  },
];

function CardComponent({ image, title, subtitle, contact }) {
  return (
    <Card sx={{ width: '540px', height: '650px' ,boxShadow: 'none' ,border: 'none'}}>
      <CardMedia
        component="img"
        height="470"
        image={image}
        alt={title}
        sx={{ width: '450px', margin: '0 auto',boxShadow: '5' ,border: '2px' }}
      />
      <CardContent>
        <Typography 
          sx={{ 
            fontSize: '20px', 
            fontWeight: 'medium', 
            fontFamily: 'Prompt', 
            textAlign: 'center', 
            marginBottom: '10px' ,
            whiteSpace: 'pre-line'
          }}
        >
          {title}
        </Typography>
        <Typography 
          sx={{ 
            fontSize: '16px', 
            fontWeight: 'medium', 
            fontFamily: 'Prompt', 
            textAlign: 'center', 
            marginBottom: '5px' ,
            whiteSpace: 'pre-line'
          }}
        >
          {subtitle}
        </Typography>
        <Typography 
          sx={{ 
            fontSize: '16px', 
            fontWeight: 'ExtraLight', 
            fontFamily: 'Prompt', 
            textAlign: 'center' ,
            whiteSpace: 'pre-line'
          }}
        >
          {contact}
        </Typography>
      </CardContent>
    </Card>
  );
}

function Executive() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        maxWidth: '100%', // Full width of the viewport
        padding: '0', // Remove any default padding
        margin: '0', // Remove any default margin
      }}
    >
      <Navbar status={false} />
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '225px',
          marginBottom: '20px',
          height: '100px',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            fontSize: '40px',
            fontWeight: 'Medium',
            color: '#b00020', // Red text color
            fontFamily: 'Prompt',
            display: 'inline-block',
            position: 'relative',
            paddingBottom: '10px', // Space for the underline
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '200%', // Width of the underline
              height: '3px', // Thickness of the underline
              backgroundColor: '#b00020', // Red underline color
              bottom: '0', // Position the underline at the bottom
              left: '50%',
              transform: 'translateX(-50%)', // Center the underline relative to the text
            },
          }}
        >
          ผู้บริหาร
        </Box>
      </Box>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'row',
          justifyContent: 'space-between',  // Ensures cards are aligned left and right
          width: '100%', // Full width for proper spacing
          gap:'20px',
          justifyContent:'center',
        }}
      > 
        <CardComponent
          image={cardData[0].image}
          title={cardData[0].title}
          subtitle={cardData[0].subtitle}
          contact={cardData[0].contact}
        />
        <CardComponent
          image={cardData[1].image}
          title={cardData[1].title}
          subtitle={cardData[1].subtitle}
          contact={cardData[1].contact}
        />
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          marginTop: '50px',
          marginBottom: '20px',
          height: '100px',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            fontSize: '40px',
            fontWeight: 'Medium',
            color: '#b00020', // Red text color
            fontFamily: 'Prompt',
            display: 'inline-block',
            position: 'relative',
            paddingBottom: '10px', // Space for the underline
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '200%', // Width of the underline
              height: '3px', // Thickness of the underline
              backgroundColor: '#b00020', // Red underline color
              bottom: '0', // Position the underline at the bottom
              left: '50%',
              transform: 'translateX(-50%)', // Center the underline relative to the text
            },
          }}
        >
          บุคลากร
        </Box>
      </Box>
      <Box 
        sx={{ 
          display: 'flex', 
          width: '100%', // Full width for proper spacing
          justifyContent:'center',
        }}
      > 
            <CardComponent
              image={cardData[2].image}
              title={cardData[2].title}
              subtitle={cardData[2].subtitle}
              contact={cardData[2].contact}
            />
      </Box>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'row',
          justifyContent: 'space-between',  // Ensures cards are aligned left and right
          width: '100%', // Full width for proper spacing
          gap:'20px',
          justifyContent:'center',
          marginTop:'20px'
        }}
      > 
        <CardComponent
          image={cardData[3].image}
          title={cardData[3].title}
          subtitle={cardData[3].subtitle}
          contact={cardData[3].contact}
        />
        <CardComponent
          image={cardData[4].image}
          title={cardData[4].title}
          subtitle={cardData[4].subtitle}
          contact={cardData[4].contact}
        />
      </Box>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'row',
          justifyContent: 'space-between',  // Ensures cards are aligned left and right
          width: '100%', // Full width for proper spacing
          gap:'20px',
          justifyContent:'center',
          marginTop:'20px',
          marginBottom:'40px'
        }}
      > 
        <CardComponent
          image={cardData[5].image}
          title={cardData[5].title}
          subtitle={cardData[5].subtitle}
          contact={cardData[5].contact}
        />
        <CardComponent
          image={cardData[6].image}
          title={cardData[6].title}
          subtitle={cardData[6].subtitle}
          contact={cardData[6].contact}
        />
        
      </Box>
      <Box sx={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px', height: '100px', width: '100%', position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            bottom: '50%',
            left: '50%',
            width: '30%',
            height: '5px',
            backgroundColor: '#b00020',
            transform: 'translateX(-50%)', // Center horizontally
          }}
        />
      </Box>
      <Footer />
    </div>
  );
}

export default Executive;


import Navbar from '../../component/Navbar';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
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
    title: 'รองศาสตราจารย์ ดร.ปวรุตม์ จงชาญสิทโธ\nAssociate Professor Pawarut Jongchansitto, Ph.D.',
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

function CardComponent({ image, title, subtitle, contact }:any) {
  return (
    <Card sx={{ width: '540px', height: '680px', boxShadow: 'none', border: 'none' }}>
      <CardMedia
        component="img"
        height="470"
        image={image}
        alt={title}
        sx={{ width: '450px', margin: '0 auto', boxShadow: '5', border: '2px' }}
      />
      <CardContent>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 'medium',
            fontFamily: 'Prompt',
            textAlign: 'center',
            marginBottom: '10px',
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
            marginBottom: '5px',
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
            textAlign: 'center',
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
        maxWidth: '100%',
        padding: '0',
        margin: '0',
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
            color: '#b00020',
            fontFamily: 'Prompt',
            display: 'inline-block',
            position: 'relative',
            paddingBottom: '10px',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '200%',
              height: '3px',
              backgroundColor: '#b00020',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
            },
          }}
        >
          ผู้บริหาร
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Allows wrapping of cards
          justifyContent: 'center',
          gap: '20px',
          width: '100%',
        }}
      >
        {cardData.slice(0, 2).map((data, index) => (
          <CardComponent
            key={index}
            image={data.image}
            title={data.title}
            subtitle={data.subtitle}
            contact={data.contact}
          />
        ))}
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
            color: '#b00020',
            fontFamily: 'Prompt',
            display: 'inline-block',
            position: 'relative',
            paddingBottom: '10px',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '200%',
              height: '3px',
              backgroundColor: '#b00020',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
            },
          }}
        >
          บุคลากร
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Allows wrapping of cards
          justifyContent: 'center',
          gap: '20px',
          width: '100%',
        }}
      >
        {cardData.slice(2, 3).map((data, index) => (
          <CardComponent
            key={index}
            image={data.image}
            title={data.title}
            subtitle={data.subtitle}
            contact={data.contact}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Allows wrapping of cards
          justifyContent: 'center',
          gap: '20px',
          width: '100%',
          marginTop: '20px',
        }}
      >
        {cardData.slice(3, 5).map((data, index) => (
          <CardComponent
            key={index}
            image={data.image}
            title={data.title}
            subtitle={data.subtitle}
            contact={data.contact}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Allows wrapping of cards
          justifyContent: 'center',
          gap: '20px',
          width: '100%',
          marginTop: '20px',
          marginBottom: '40px',
        }}
      >
        {cardData.slice(5, 7).map((data, index) => (
          <CardComponent
            key={index}
            image={data.image}
            title={data.title}
            subtitle={data.subtitle}
            contact={data.contact}
          />
        ))}
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
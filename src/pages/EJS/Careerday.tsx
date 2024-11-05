import { Box, Button } from '@mui/material';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer'; 
import "../../component/text.css";
import image1 from './pic/1.jpg';
import image2 from './pic/2.jpg';
import image3 from './pic/3.jpg';
import image4 from './pic/4.jpg';
import image5 from './pic/5.jpg';
import image6 from './pic/6.jpg';
import image7 from './pic/7.jpg';
import image8 from './pic/8.jpg';
import image9 from './pic/9.jpg';
import image10 from './pic/10.jpg';

const imagelist = [image1, image2, image3, image4, image5, image6, image7, image8, image9,image10];


function Careerday() {
  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: 'white' }}>
          <Navbar status={false} />
          <Box sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: { xs: "370px", sm: "700px", md: "800px", lg: "1000px" },
              marginTop: "125px",
              padding: "20px",
              boxSizing: "border-box",
              color: "#333",
          }}>
              <div className="text-topic" style={{marginTop:"10%"}} >
              CAREER DAY
              </div>
              <Box sx={{ borderBottom: '3px solid #801111', marginBottom: '40px', width: '40%' }}></Box>
              
              <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '15px',
                    width: '100%', // Ensures the button container is full-width
                }}>
                    <Button
                        href="https://careerday.eng.cmu.ac.th"
                        target="_blank"
                        className='text-topic'
                        sx={{
                            background: 'linear-gradient(to bottom, #CF4139 0%, #F09711 100%)',
                            color: 'white',
                            padding: '20px 20px', // Increased padding for a larger button
                            borderRadius: '0px',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            width: '100%', // Full width button
                            fontSize: { xs: "17px", sm: "23px", md: "25px", lg: "28px" },
                            fontWeight: 'bold',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0 0 10px 5px rgba(240, 151, 17, 0.7)', // Glow effect
                                background: 'linear-gradient(to bottom, #CC413F 10%, #F09711 100%)', // Keep gradient on hover
                            },
                        }}
                    >
                        เข้าสู่เว็บไซต์
                    </Button>
                </Box>
              
                <Box 
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr' }, // Responsive grid
                        gap: 2,
                        marginTop: '20px',
                    }}>
                    {imagelist.map((image, index) => (
                        <Box key={index} sx={{ display: 'flex', justifyContent: 'center', marginBottom: '4%' }}>
                            <img src={image} alt={`Certification ${index + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
                        </Box>
                    ))}
                </Box>

                
              <Box 
                  sx={{
                    borderBottom: '4px solid #801111',
                    marginBottom: '60px',
                    marginTop: '30%',
                    width: '40%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', // Centers content horizontally
                    marginLeft: 'auto', // Centers the box horizontally
                    marginRight: 'auto', // Centers the box horizontally
                  }}
                ></Box>
          </Box>
          <Footer/>
      </div>
    )
}

export default Careerday
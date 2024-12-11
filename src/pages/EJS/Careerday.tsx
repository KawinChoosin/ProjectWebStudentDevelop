import { Box, Button, Card } from '@mui/material';
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
import React from 'react';

const imagelist = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

function Careerday() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Preload images when the component mounts
  React.useEffect(() => {
    const preloadImages = async () => {
      const promises = imagelist.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        // Wait for all images to load
        await Promise.all(promises);
        setIsLoaded(true); // Set loaded state to true when all images are loaded
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, []);

  return (
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
        <Card sx={{pl:'7%',pr:'7%',border: "1px solid #ccc",boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.5)"}}>
        <div className="text-topic" style={{ marginTop: "10%" }} >
          CAREER DAY
        </div>
        <Box sx={{ borderBottom: '3px solid #801111', marginBottom: '40px', width: '40%' }}></Box>

        <Card sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '15px',
            width: '100%',
        }}>
          <Button
            href="https://careerday.eng.cmu.ac.th"
            target="_blank"
            className='text-topic'
            sx={{
              background: 'linear-gradient(to bottom, #CF4139 0%, #F09711 100%)',
              color: 'white',
              padding: '20px 20px',
              borderRadius: '0px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              width: '100%',
              fontSize: { xs: "17px", sm: "23px", md: "25px", lg: "28px" },
              fontWeight: 'bold',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 0 10px 5px rgba(240, 151, 17, 0.7)', 
                background: 'linear-gradient(to bottom, #CC413F 10%, #F09711 100%)', 
              },
            }}
          >
            เข้าสู่เว็บไซต์
          </Button>
        </Card>

        {/* Image grid with loading state */}
        <Box 
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr' }, 
            gap: 2,
            marginTop: '20px',
          }}>
          {isLoaded ? (
            imagelist.map((image, index) => (
              <Card key={index} sx={{ display: 'flex', justifyContent: 'center', marginBottom: '4%' }}>
                <img src={image} alt={`Certification ${index + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
              </Card>
            ))
          ) : (
            // Loading state with styles
            <div style={{
              fontFamily: 'Prompt',
              fontSize: '24px',
              color: '#333',
              fontWeight: 'bold',
              textAlign: 'center',
              animation: 'fadeIn 1s ease-in-out infinite', // Animation for loading text
            }}>
              <span>Loading images...</span>
            </div>
          )}
        </Box>

        <Box 
          sx={{
            borderBottom: '4px solid #801111',
            marginBottom: '60px',
            marginTop: '30%',
            width: '40%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        ></Box>
        </Card>
      </Box>
      <Footer />
    </div>
  );
}

export default Careerday;

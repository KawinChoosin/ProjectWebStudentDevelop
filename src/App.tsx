import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Mainpic from './pages/Homepage/mainpic';
import ButtonService from './pages/Homepage/ButtonService';
import ActivityImage from './pages/Homepage/ActivityImage'
import News from './pages/Homepage/News';
import { Box } from '@mui/material';

const App = () => {
  const slides = [
    { url: "https://www.fao.org/images/newsroomlibraries/breafing-notes/36949400340_030e4ae5f9_oab4ccd35-fd6a-4230-bd2e-f0113f50357d.jpg?sfvrsn=426ca1c_3", title: "pic1" },
    { url: "https://cdn.britannica.com/95/136995-050-6209F94F/rainforest-Malaysia.jpg", title: "pic2" },
    { url: "https://nikinclothing.com/cdn/shop/articles/die-10-grossten-walder-der-welt-671717.png?v=1713177376&width=1100", title: "pic3" },
    { url: "https://c.files.bbci.co.uk/20A4/production/_127765380_coopershillnathanmillar.jpg", title: "pic4" },
    { url: "https://www.nrdc.org/sites/default/files/styles/huge_16x9_100/public/2023-04/talmie-peak-trail-wa-0pkjf1WRkU0.jpg.jpg?h=5ef39005&itok=_yOGQ1Xi", title: "pic5" },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    
      }}
    >
      <Navbar status={true} />
      <Mainpic />
      <Box sx={{height:"800px"}}></Box>
      <ButtonService />
      <ActivityImage slides={slides} />
      <News />
      <Footer />
    </div>
  );
};

export default App;

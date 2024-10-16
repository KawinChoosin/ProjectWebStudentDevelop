import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Mainpic from './pages/Homepage/mainpic';
import ButtonService from './pages/Homepage/ButtonService';
import ActivityImage from './pages/Homepage/ActivityImage'
import News from './pages/Homepage/News';
import { Box } from '@mui/material';

const App = () => {


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
      <ActivityImage />
      <News />
      <Footer />
    </div>
  );
};

export default App;

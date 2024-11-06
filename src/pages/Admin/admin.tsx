import Navbar from '../../component/NavbarAdmin';
import Footer from '../../component/Footer';
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
      <Box sx={{height:"800px"}}></Box>
      <Footer />
    </div>
  );
};

export default App;

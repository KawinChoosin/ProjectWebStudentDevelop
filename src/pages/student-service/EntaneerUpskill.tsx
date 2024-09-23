import { Box } from '@mui/material';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer'; 
import "../../component/text.css";
import pic1 from "./upskill.png";

function EntaneerUpskill() {
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
                    Entaneer Upskill
                  </div>
                  <Box sx={{ borderBottom: '3px solid #801111', marginBottom: '40px', width: '40%' }}></Box>
                  <img src={pic1} alt="" style={{marginTop:"20px",height:"100%",width:"100%"}} />
                  
                  
                  <Box 
                      sx={{
                        borderBottom: '4px solid #801111',
                        marginBottom: '60px',
                        marginTop: '20%',
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

export default EntaneerUpskill
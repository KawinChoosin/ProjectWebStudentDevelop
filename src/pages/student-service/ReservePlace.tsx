import { Box } from '@mui/material';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer'; 
import "../../component/text.css";

function ReservePlace() {
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: 'white' }}>
              <Navbar status={false} />
              <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  maxWidth: "1000px",
                  marginTop: "125px",
                  padding: "20px",
                  boxSizing: "border-box",
                  color: "#333",
              }}>
                  <div className="text-topic" style={{marginTop:"10%"}} >
                    จองสถานที่
                  </div>
                  <Box sx={{ borderBottom: '3px solid #801111', marginBottom: '40px', width: '40%' }}></Box>
                  
                    <Box sx={{display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center', // Centers content horizontally
                        marginLeft: 'auto', // Centers the box horizontally
                        marginRight: 'auto'}}>
                            <div className="text-not">ยังไม่พร้อมใช้งาน</div>
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

export default ReservePlace
import { Box } from '@mui/material';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer'; 
import "../../component/text.css";

function Welfare() {
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
                        สวัสดิการสุขภาพนักศึกษา
                      </div>
                      <Box sx={{ borderBottom: '3px solid #801111', marginBottom: '40px', width: '40%' }}></Box>
                      <div className="text-detail-indent" >
                        สวัสดิการสุขภาพนักศึกษามุ่งเน้นการดูแลสุขภาพร่างกายของนักศึกษา ผ่านการให้บริการทางการแพทย์และสุขภาพในวิทยาเขต มีการจัดตั้งคลินิกหรือศูนย์สุขภาพที่ให้บริการตรวจสุขภาพ การรักษาเบื้องต้น และการส่งเสริมการป้องกันโรคต่างๆ นอกจากนี้ยังมีกิจกรรมส่งเสริมสุขภาพเช่นการจัดอบรมเรื่องการดูแลสุขภาพ การออกกำลังกาย และโภชนาการที่ดี เพื่อให้นักศึกษามีสุขภาพที่แข็งแรงและพร้อมที่จะเรียนรู้
                      </div>
                   
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

export default Welfare
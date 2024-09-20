import { Box, Typography } from '@mui/material';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer'; 
import "../../component/text.css";

function Aboutus() {
    return (
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
                <div className="text-topic" style={{marginTop:"10%"}} gutterBottom>
                    วิสัยทัศน์/พันธกิจ
                </div>
                <Box sx={{ borderBottom: '3px solid #801111', marginBottom: '40px', width: '40%' }}></Box>
                <div className="text-bold" >
                    พันธกิจ
                </div>
                <div className="text-detail-indent" >
                ส่งเสริมและสนับสนุนการจัดกิจกรรมพัฒนาคุณภาพนักศึกษา สร้างเสริมให้นักศึกษามีคุณลักษณะที่พึงประสงค์ จัดสวัสดิการสำหรับนักศึกษาในการใช้ชีวิตในรั้วมหาวิทยาลัย งานพัฒนาคุณภาพนักศึกษามีหน้าที่ความรับผิดชอบเกี่ยวกับ การบริหารจัดการงานด้านการส่งเสริมกิจกรรม งานด้านทุนการศึกษา งานด้านวินัยนักศึกษา และงานด้านให้คำปรึกษาและดูแลสุขภาพจิต สำหรับนักศึกษาคณะวิศวกรรมศาสตร์มหาวิทยาลัยเชียงใหม่ และบุคคลที่เกี่ยวข้อง
                </div>
                <div className="text-bold" >
                    ภารกิจ
                </div>
                <div className="text-detail-indent" >
                    +งานส่งเสริมกิจกรรม
                </div>
                <div className="text-detail-indent" >
                    +งานทุนการศึกษา
                </div>
                <div className="text-detail-indent" >
                    +งานวินัยนักศึกษา
                </div>
                <div className="text-detail-indent" >
                    +งานให้คำปรึกษาและดูแลสุขภาพจิต
                </div>
                
                <Box 
                
                
                
                
      sx={{
        borderBottom: '4px solid #801111',
        marginBottom: '60px',
        marginTop: '60px',
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
      );
}

export default Aboutus
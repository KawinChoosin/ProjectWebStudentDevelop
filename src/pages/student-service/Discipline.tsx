import { Box } from '@mui/material';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer'; 
import "../../component/text.css";

function Discipline() {
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
                งานวินัยนักศึกษา
              </div>
              <Box sx={{ borderBottom: '3px solid #801111', marginBottom: '40px', width: '40%' }}></Box>
              <div className="text-detail-indent" >
              งานวินัยนักศึกษาเน้นการเสริมสร้างความประพฤติที่ดีและการรักษาระเบียบวินัยในหมู่นักศึกษาผ่านการกำหนด
กฎระเบียบและนโยบายต่างๆ ที่นักศึกษาต้องปฏิบัติตาม ทั้งนี้ยังรวมถึงการให้คำแนะนำและการจัดการกับปัญหา
ความประพฤติที่ไม่เหมาะสม เพื่อให้นักศึกษาเรียนรู้การมีความรับผิดชอบต่อตนเองและสังคม อีกทั้งยังกำกับดูแล
ความประพฤติของนักศึกษา ภายใต้ระเบียบและข้อบังคับมหาวิทยาลัยเชียงใหม่ ว่าด้วยวินัยและการดำเนินการทางวินัย
นักศึกษา พ.ศ.2564 เพื่อให้เป็นแบบแผนอันหนึ่งอันเดียวกัน ให้เป็นนักศึกษาที่ดี มีความรับผิดชอบต่อตนเอง เคารพ
ในสิทธิและหน้าที่ของผู้อื่น อยู่ร่วมกันด้วยความสงบเรียบร้อย มีความประพฤติดี ปฏิบัติชอบธำรงไว้ซึ่งเกียรติและ
ความมีระเบียบวินัยของสถาบัน 
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

export default Discipline
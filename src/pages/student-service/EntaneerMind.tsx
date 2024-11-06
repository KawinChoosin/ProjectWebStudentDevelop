
import { Box, Card } from '@mui/material';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer'; 
import "../../component/text.css";
import pic1 from "./entaneermind.png";

function EntaneerMind() {
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
              งานให้คำปรึกษาและดูแลสุขภาพจิต
              </div>
              <Box sx={{ borderBottom: '3px solid #801111', marginBottom: '40px', width: '40%' }}></Box>
              <div className="text-detail-indent" >
              งานให้คำปรึกษาและดูแลสุขภาพจิตมีบทบาทสำคัญในการสนับสนุนนักศึกษาในการจัดการกับความเครียด ความวิตกกังวล และปัญหาทางอารมณ์อื่นๆ มีการจัดตั้งศูนย์ให้คำปรึกษาที่มีนักจิตวิทยาและผู้เชี่ยวชาญคอยให้
คำแนะนำและการสนับสนุนในเรื่องต่างๆ เพื่อให้นักศึกษามีสุขภาพจิตที่ดีและสามารถรับมือกับความท้าทายในการเรียน
และชีวิตประจำวันได้
              </div>
              <div className="text-detail-indent" >
              + บริการให้คำปรึกษาแก่นักศึกษา และบุคลากรที่ต้องการความช่วยเหลือด้านสุขภาพจิต
              </div>
              <div className="text-detail-indent" >
              + ดูแล ติดตาม ให้ความรู้ทางด้านสุขภาพจิตแก่นักศึกษา และบุคลากร
              </div>
              <div className="text-detail-indent" >
              + รณรงค์ให้นักศึกษา และบุคลากรตระหนักถึงปัญหาด้านสุขภาพจิต และทำแบบประเมิน
              </div>
              <div className="text-detail-indent" >
              + จัดกิจกรรมละลายพฤติกรรมให้แก่นักศึกษาที่จะมาเป็นผู้นำนักศึกษาในปีการศึกษาต่อไป เพื่อให้แนวทางในการทำงานร่วมกัน การเข้าอกเข้าใจผู้อื่น รวมถึงเป็นตัวอย่างในการดำเนินกิจกรรมอย่างสร้างสรรค์เพื่อสร้างความสัมพันธ์ให้กับนักศึกษาที่พึ่งมารู้จักกัน
              </div>
              <div className="text-detail-indent" >
              + เผยแพร่ความรู้ผ่านการจัดสัมมนาเชิงปฏิบัติการ การผลิตบทความเผยแพร่ผ่านFacebook และการไลฟ์สดพูดคุยผ่านFacebook:Entaneer Mind Friend
              </div>
              <Card  sx={{ display: 'flex', justifyContent: 'center', marginBottom: '4%' }}>
                  <a href="https://www.facebook.com/EntaneerMindFriendCMU" > 
                    <img src={pic1}  style={{ maxWidth: '100%', height: 'auto' }} />
                  </a>
              </Card>
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

export default EntaneerMind
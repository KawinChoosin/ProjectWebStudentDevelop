import { Box } from '@mui/material';
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
                  maxWidth: "1000px",
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
                  <div className="text-detail">• บริการให้คำปรึกษาแก่นักศึกษา และบุคลากรที่ต้องการความช่วยเหลือด้านสุขภาพจิต<br/>• ดูแล ติดตาม ให้ความรู้ทางด้านสุขภาพจิตแก่นักศึกษา และบุคลากร<br/>• รณรงค์ให้นักศึกษา และบุคลากรตระหนักถึงปัญหาด้านสุขภาพจิต และทำแบบประเมิน<br/>• จัดกิจกรรมละลายพฤติกรรมให้แก่นักศึกษาที่จะมาเป็นผู้นำนักศึกษา ในปีการศึกษาต่อไป เพื่อให้แนวทางในการทำงานร่วมกัน การเข้าอกเข้าใจผู้อื่น รวมถึงเป็นตัวอย่างในการดำเนินกิจกรรมอย่างสร้างสรรค์เพื่อสร้างความสัมพันธ์ให้กับนักศึกษาที่พึ่งมารู้จักกัน<br/>• เผยแพร่ความรู้ผ่านการจัดสัมมนาเชิงปฏิบัติการ การผลิตบทความเผยแพร่ผ่านFacebook และการไลฟ์สดพูดคุยผ่าน Facebook:Entaneer Mind Friend</div>
                  
                  <a href="https://www.facebook.com/EntaneerMindFriendCMU" ><img src={pic1} alt="" style={{marginTop:"20px",height:"100%",width:"100%"}} /></a>
                  
                  
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

export default EntaneerMind
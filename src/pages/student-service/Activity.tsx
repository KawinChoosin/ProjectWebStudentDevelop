import { Box, Card, CardMedia } from '@mui/material';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer'; 
import "../../component/text.css";
import image1 from './activity.jpg';

function Activity() {
  return (
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
        <div className="text-topic" style={{ marginTop: "10%" }}>
          งานส่งเสริมกิจกรรม
        </div>
        <Box sx={{ borderBottom: '3px solid #801111', marginBottom: '40px', width: '40%' }}></Box>
        <div className="text-detail-indent">
          งานส่งเสริมกิจกรรมนักศึกษามีเป้าหมายเพื่อพัฒนาทักษะและความสามารถของนักศึกษานอกห้องเรียน ผ่านกิจกรรมต่างๆเช่นสโมสรนักศึกษา ชมรมต่างๆ และกิจกรรมอาสาสมัคร การเข้าร่วมกิจกรรมเหล่านี้ช่วยให้นักศึกษาได้เรียนรู้การทำงานเป็นทีม การเป็นผู้นำ และการแก้ปัญหา รวมถึงการสร้างเครือข่ายทางสังคมที่มีประโยชน์ต่อการศึกษาและอาชีพในอนาคต
        </div>

        {/* Add the image here */}
       
   
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '40px' }}>
        <Card sx={{ height: "100%"}}>
            <CardMedia component="img" image={image1} alt="Activity"  />
        </Card>

        </Box>

        {/* Second divider */}
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
      <Footer />
    </div>
  );
}

export default Activity;

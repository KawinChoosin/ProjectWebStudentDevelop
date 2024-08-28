import { Box } from '@mui/material';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer'; 
import "../../component/text.css";

function History() {
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
            <div className="text-topic" style={{marginTop:"10%"}} >
                ประวัติความเป็นมา
            </div>
            <Box sx={{ borderBottom: '3px solid #801111', marginBottom: '40px', width: '40%' }}></Box>
            <div className="text-detail-indent" >
                การศึกษาประวัติความเป็นมานั้นมีความสำคัญอย่างยิ่งในการเข้าใจและเรียนรู้ถึงการเปลี่ยนแปลงและพัฒนาของสิ่งต่างๆ ทั้งในด้านสังคม วัฒนธรรม เศรษฐกิจ และการเมือง การรู้ถึงต้นกำเนิดและการเปลี่ยนแปลงของเรื่องราวต่างๆ สามารถช่วยให้เราเข้าใจถึงปัจจัยที่มีผลต่อการเปลี่ยนแปลงในปัจจุบันได้อย่างมีประสิทธิภาพ
            </div>
            <div className="text-bold" >
                การเกิดและพัฒนาของประวัติศาสตร์
            </div>
            <div className="text-detail-indent" >
                การศึกษาประวัติศาสตร์เริ่มต้นขึ้นจากการจดบันทึกเหตุการณ์สำคัญต่างๆที่เกิดขึ้นในอดีต โดยส่วนใหญ่จะมาจากบันทึกของนักประวัติศาสตร์ นักเขียน หรือผู้บันทึกเหล่านี้อาจจะเป็นลายลักษณ์อักษร หรือรูปภาพตามแต่เทคโนโลยีและวัฒนธรรมของแต่ละยุคสมัย
            </div>
            <div className="text-bold" >
                ความสำคัญของการศึกษาอดีต
            </div>
            <div className="text-detail" >
                1.การเข้าใจปัจจุบันและอนาคต:การรู้ถึงประวัติศาสตร์ช่วยให้เราเข้าใจรากฐานและปัจจัยที่ทำให้เกิดการเปลี่ยนแปลงในปัจจุบัน และสามารถกำหนดแผนในอนาคตได้ <br/>
                2.การเรียนรู้จากอดีต:การศึกษาประวัติศาสตร์ช่วยให้เราเรียนรู้จากความผิดพลาดในอดีตและสามารถหลีกเลี่ยงการทำซ้ำข้อผิดพลาดเดียวกันได้<br/>
                3.การเสริมสร้างอัตลักษณ์และความเป็นตัวตน:การรู้ถึงประวัติศาสตร์ของชุมชนหรือประเทศของเราช่วยเสริมสร้างความภาคภูมิใจ และความผูกพันต่ออัตลักษณ์ของตนเอง
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

export default History;

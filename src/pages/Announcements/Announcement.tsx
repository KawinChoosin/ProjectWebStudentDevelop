import { Box } from '@mui/material';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer'; 
import "../../component/text.css";

function Announcement() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: '#FFE6E6' }}>
      <Navbar status={false} />
      <Box sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth:{xs:"370px",sm:"700px",md:"800px",lg:"1000px"},
          marginTop: "125px",
          padding: "20px",
          boxSizing: "border-box",
          color: "#333",
      }}>
            <Box sx={{
            height: "80px",
            width: "100%",
            padding: "20px",
            backgroundColor: '#FFBBBB', // Set background color
            marginBottom: '20px',
            fontWeight: "medium",
            boxSizing: 'border-box', // Ensure padding is included in height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
                <div className="text-topic" style={{ textAlign: 'left', marginBottom: '8px' }}>
                  ประกาศ
                </div>
                <Box 
                  sx={{
                    borderBottom: '3px solid #801111',
                    width: '30%',
                    alignSelf: 'flex-start' // Align the line to the left under the text
                  }}
                ></Box>
          </Box>
          <Box sx={{
            width: "100%",
            padding: "20px",
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
                <a className="text-detail" style={{ textAlign: 'left', marginBottom: '8px' }} href="https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf">
                -ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ และเงื่อนไขการรับเงินรายได้ของมหาวิทยาลัย ฉบับที่ ร 12/2549 (อัตราค่าใช้ห้องประชุม ห้องบรรยาย ห้องเรียนและค่าบริการอื่นๆ ของส่วนราชการในสังกัดมหาวิทยาลัยเชียงใหม่)
                </a>
                <a className="text-detail" style={{ textAlign: 'left', marginBottom: '8px' }} href="https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf">
                -ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ และเงื่อนไขการรับเงินรายได้ของมหาวิทยาลัย ฉบับที่ ร 12/2549 (อัตราค่าใช้ห้องประชุม ห้องบรรยาย ห้องเรียนและค่าบริการอื่นๆ ของส่วนราชการในสังกัดมหาวิทยาลัยเชียงใหม่)
                </a>
                <a className="text-detail" style={{ textAlign: 'left', marginBottom: '8px' }} href="https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf">
                -ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ และเงื่อนไขการรับเงินรายได้ของมหาวิทยาลัย ฉบับที่ ร 12/2549 (อัตราค่าใช้ห้องประชุม ห้องบรรยาย ห้องเรียนและค่าบริการอื่นๆ ของส่วนราชการในสังกัดมหาวิทยาลัยเชียงใหม่)
                </a>
                <a className="text-detail" style={{ textAlign: 'left', marginBottom: '8px' }} href="https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf">
                -ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ และเงื่อนไขการรับเงินรายได้ของมหาวิทยาลัย ฉบับที่ ร 12/2549 (อัตราค่าใช้ห้องประชุม ห้องบรรยาย ห้องเรียนและค่าบริการอื่นๆ ของส่วนราชการในสังกัดมหาวิทยาลัยเชียงใหม่)
                </a>
                <a className="text-detail" style={{ textAlign: 'left', marginBottom: '8px' }} href="https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf">
                -ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ และเงื่อนไขการรับเงินรายได้ของมหาวิทยาลัย ฉบับที่ ร 12/2549 (อัตราค่าใช้ห้องประชุม ห้องบรรยาย ห้องเรียนและค่าบริการอื่นๆ ของส่วนราชการในสังกัดมหาวิทยาลัยเชียงใหม่)
                </a>
          </Box>

          <Box sx={{
            height: "80px",
            width: "100%",
            padding: "20px",
            backgroundColor: '#FFBBBB', // Set background color
            marginBottom: '20px',
            fontWeight: "medium",
            boxSizing: 'border-box', // Ensure padding is included in height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
                <div className="text-topic" style={{ textAlign: 'left', marginBottom: '8px' }}>
                  ระเบียบ
                </div>
                <Box 
                  sx={{
                    borderBottom: '3px solid #801111',
                    width: '30%',
                    alignSelf: 'flex-start' // Align the line to the left under the text
                  }}
                ></Box>
          </Box>
          <Box sx={{
            width: "100%",
            padding: "20px",
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
                <a className="text-detail" style={{ textAlign: 'left', marginBottom: '8px' }} href="https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf">
                -ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ และเงื่อนไขการรับเงินรายได้ของมหาวิทยาลัย ฉบับที่ ร 12/2549 (อัตราค่าใช้ห้องประชุม ห้องบรรยาย ห้องเรียนและค่าบริการอื่นๆ ของส่วนราชการในสังกัดมหาวิทยาลัยเชียงใหม่)
                </a>
                <a className="text-detail" style={{ textAlign: 'left', marginBottom: '8px' }} href="https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf">
                -ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ และเงื่อนไขการรับเงินรายได้ของมหาวิทยาลัย ฉบับที่ ร 12/2549 (อัตราค่าใช้ห้องประชุม ห้องบรรยาย ห้องเรียนและค่าบริการอื่นๆ ของส่วนราชการในสังกัดมหาวิทยาลัยเชียงใหม่)
                </a>
                <a className="text-detail" style={{ textAlign: 'left', marginBottom: '8px' }} href="https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf">
                -ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ และเงื่อนไขการรับเงินรายได้ของมหาวิทยาลัย ฉบับที่ ร 12/2549 (อัตราค่าใช้ห้องประชุม ห้องบรรยาย ห้องเรียนและค่าบริการอื่นๆ ของส่วนราชการในสังกัดมหาวิทยาลัยเชียงใหม่)
                </a>
                <a className="text-detail" style={{ textAlign: 'left', marginBottom: '8px' }} href="https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf">
                -ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ และเงื่อนไขการรับเงินรายได้ของมหาวิทยาลัย ฉบับที่ ร 12/2549 (อัตราค่าใช้ห้องประชุม ห้องบรรยาย ห้องเรียนและค่าบริการอื่นๆ ของส่วนราชการในสังกัดมหาวิทยาลัยเชียงใหม่)
                </a>
                <a className="text-detail" style={{ textAlign: 'left', marginBottom: '8px' }} href="https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf">
                -ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ และเงื่อนไขการรับเงินรายได้ของมหาวิทยาลัย ฉบับที่ ร 12/2549 (อัตราค่าใช้ห้องประชุม ห้องบรรยาย ห้องเรียนและค่าบริการอื่นๆ ของส่วนราชการในสังกัดมหาวิทยาลัยเชียงใหม่)
                </a>
          </Box>
          <Box sx={{
            height: "80px",
            width: "100%",
            padding: "20px",
            backgroundColor: '#FFBBBB', // Set background color
            marginBottom: '20px',
            fontWeight: "medium",
            boxSizing: 'border-box', // Ensure padding is included in height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
                <div className="text-topic" style={{ textAlign: 'left', marginBottom: '8px' }}>
                  ข้อบังคับ
                </div>
                <Box 
                  sx={{
                    borderBottom: '3px solid #801111',
                    width: '30%',
                    alignSelf: 'flex-start' // Align the line to the left under the text
                  }}
                ></Box>
          </Box>
          <Box sx={{
            width: "100%",
            padding: "20px",
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
                <a className="text-detail" style={{ textAlign: 'left', marginBottom: '8px' }} href="https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf">
                -ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ และเงื่อนไขการรับเงินรายได้ของมหาวิทยาลัย ฉบับที่ ร 12/2549 (อัตราค่าใช้ห้องประชุม ห้องบรรยาย ห้องเรียนและค่าบริการอื่นๆ ของส่วนราชการในสังกัดมหาวิทยาลัยเชียงใหม่)
                </a>
                <a className="text-detail" style={{ textAlign: 'left', marginBottom: '8px' }} href="https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf">
                -ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ และเงื่อนไขการรับเงินรายได้ของมหาวิทยาลัย ฉบับที่ ร 12/2549 (อัตราค่าใช้ห้องประชุม ห้องบรรยาย ห้องเรียนและค่าบริการอื่นๆ ของส่วนราชการในสังกัดมหาวิทยาลัยเชียงใหม่)
                </a>
                <a className="text-detail" style={{ textAlign: 'left', marginBottom: '8px' }} href="https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf">
                -ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ และเงื่อนไขการรับเงินรายได้ของมหาวิทยาลัย ฉบับที่ ร 12/2549 (อัตราค่าใช้ห้องประชุม ห้องบรรยาย ห้องเรียนและค่าบริการอื่นๆ ของส่วนราชการในสังกัดมหาวิทยาลัยเชียงใหม่)
                </a>
                <a className="text-detail" style={{ textAlign: 'left', marginBottom: '8px' }} href="https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf">
                -ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ และเงื่อนไขการรับเงินรายได้ของมหาวิทยาลัย ฉบับที่ ร 12/2549 (อัตราค่าใช้ห้องประชุม ห้องบรรยาย ห้องเรียนและค่าบริการอื่นๆ ของส่วนราชการในสังกัดมหาวิทยาลัยเชียงใหม่)
                </a>
                <a className="text-detail" style={{ textAlign: 'left', marginBottom: '8px' }} href="https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf">
                -ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ และเงื่อนไขการรับเงินรายได้ของมหาวิทยาลัย ฉบับที่ ร 12/2549 (อัตราค่าใช้ห้องประชุม ห้องบรรยาย ห้องเรียนและค่าบริการอื่นๆ ของส่วนราชการในสังกัดมหาวิทยาลัยเชียงใหม่)
                </a>
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

      <Footer />
    </div>
  );
}

export default Announcement;

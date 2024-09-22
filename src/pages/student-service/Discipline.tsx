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
              maxWidth: "1000px",
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
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolorum ut voluptates, eaque quas harum ducimus autem magni eveniet possimus incidunt, minima adipisci reiciendis cupiditate nisi beatae voluptatum enim, molestias accusamus maiores illo! Dolores consectetur, repellat quas vel asperiores facere eaque quisquam, nemo aperiam in sequi est perferendis at dolore minus totam voluptatem! Repudiandae cum placeat ducimus officia. Ad id quasi, culpa eligendi amet accusantium sit facilis magni, ab voluptate officiis nobis perferendis quisquam repellendus praesentium! Odio a rerum recusandae dolores perspiciatis voluptate ipsa nihil consectetur assumenda aliquam quos reiciendis expedita, ab animi quidem? Unde, culpa minus repudiandae non sunt esse deserunt. Sapiente ipsa corporis, natus iste in eius? Sunt fugit eos accusantium assumenda consectetur ullam beatae natus laudantium error, quis cupiditate aspernatur doloremque ad! Nesciunt dicta, quam provident nulla reiciendis delectus dolorum sequi quia obcaecati praesentium in consequatur laborum minus! Esse autem veritatis commodi velit vero ducimus dicta dolore fugit consectetur dolorum, necessitatibus eos nam a deserunt, nemo, quia nobis ipsa sequi adipisci. Odit aspernatur blanditiis omnis doloremque ab voluptatem nemo voluptatum eos atque eveniet, quaerat reiciendis, doloribus sed commodi ipsam corporis similique laborum in minus neque, fuga eaque aut! Eum illum vero laudantium itaque! Hic libero necessitatibus repellat.
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
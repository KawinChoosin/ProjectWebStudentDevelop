import { Box, Card, CardMedia,Grid } from '@mui/material';
import Navbar from '../../../component/Navbar';
import Footer from '../../../component/Footer'; 
import "../../../component/text.css";
import pic1 from "./pic/main.png";
import pic3 from "./pic/ทุนเรียนดี.png";
import pic7 from "./pic/ทุนกิจกรรม.png";
import pic2 from "./pic/ทุนขัดสน.png";
import pic6 from "./pic/ทุนฉุกเฉิน.png";
import pic5 from "./pic/ทุนทำงาน.png";
import pic8 from "./pic/ทุนประกวดผลงานทางวิชาการ.png";
import pic4 from "./pic/ทุนวิศวฯ ปัญญาเลิศ.png";
import pic9 from "./pic/ทุนปโท.png";
import pic10 from "./pic/contact.png";


const ScholarshipCard = ({ image, title }: { image: string; title: string; }) => (
    <Card sx={{ height: {lg:'550px',md:'450px',sm:'420px'} }}>
        <CardMedia component="img" image={image} alt={title} />
    </Card>
);

function Scholarship() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: 'white' }}>
            <Navbar status={false} />

           <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: { xs: "370px", sm: "700px", md: "800px", lg: "1200px" },
    marginTop: "125px",
    padding: "40px",
    boxSizing: "border-box",
    color: "#333",
    border: "1px solid #ccc", // Border line
    boxShadow: "0px 4px 80px rgba(0, 0, 0, 0.6)", // Shadow
    borderRadius: "8px", // Optional rounded corners
    
  }}
>
                <div className="text-topic" style={{ marginTop: "10%" }}>งานทุนการศึกษา</div>

                <Box sx={{ borderBottom: '3px solid #801111', marginBottom: '40px', width: '40%' }}></Box>
                <div className="text-detail-indent">
                ทุนการศึกษามีหลากหลายประเภทเพื่อสนับสนุนนักศึกษาในคณะวิศวกรรมศาสตร์ให้เข้าถึงการศึกษาได้โดยทั่วถึง ตั้งแต่ทุนการศึกษาขัดสนที่ช่วยเหลือค่าใช้จ่ายในการศึกษาและอุปกรณ์การเรียน ทุนการศึกษาเรียนดีที่สนับสนุนนักศึกษาที่มีผลการเรียนดีมากที่สุด และทุนการศึกษาวิศวกรรมฯที่สนับสนุนผู้มีผลการเรียนดีเด่น ความมุ่งมั่นในการศึกษา และการทำงานที่ตรงไปตรงมา ส่งเสริมและสนับสนุนนักศึกษาให้ได้มีโอกาสศึกษาเล่าเรียนจนสำเร็จการศึกษา โดยอาศัยแหล่งทุน 2 ส่วน ประกอบด้วย
                </div>
                <ScholarshipCard image={pic1} title="Scholarship Overview" />
              
                <div className="text-bold">1.ทุนการศึกษาจากคณะวิศวกรรมศาสตร์</div>
                <div className="text-detail-indent">
                หมายถึงทุนการศึกษาที่ใช้งบประมาณเงินรายได้คณะวิศวกรรมศาสตร์จัดสรรให้แก่นักศึกษาคณะวิศวกรรมศาสตร์ที่ขาดแคลนทุนทรัพย์ นักศึกษาที่มีผลการเรียนดี นักศึกษาที่ทำกิจกรรมวิชาการ กิจกรรมเสริมหลักสูตร กิจกรรมกีฬานักศึกษาที่ต้องการทำงานเพื่อช่วยเหลือและแบ่งเบาภาระของครอบครัว นักศึกษาที่ประสบปัญหาความเดือดร้อนทางเศรษฐกิจ อุบัติเหตุ วินาศภัย ทุพพลภาพ แยกประเภทได้ดังนี้
                </div>
                <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: "20px" }}>
                    {[
                        { image: pic2, title: 'ทุนการศึกษาประเภทขัดสน' },
                        { image: pic3, title: 'ทุนการศึกษาประเภทเรียนดี' },
                        { image: pic4, title: 'ทุนการศึกษาประเภทวิศวฯปัญญาเลิศ' },
                        { image: pic5, title: 'ทุนการศึกษาประเภททำงาน' },
                        { image: pic6, title: 'ทุนการศึกษาประเภทฉุกเฉิน' },
                        { image: pic7, title: 'ทุนการศึกษาประเภทกิจกรรมวิชาการ' },
                        { image: pic8, title: 'ทุนการศึกษาประเภทผลงานประกวด' },
                        { image: pic9, title: 'ทุนการศึกษาสำหรับผู้มีผลการเรียนดีเยี่ยมเพื่อศึกษาต่อปริญญาโท' },
                        { image: pic10, title: 'ช่องทางการติดต่อ' },
                    ].map((scholarship, index) => (
                        <Grid item xs={12} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <ScholarshipCard image={scholarship.image} title={scholarship.title} />
                        </Grid>
                    ))}
                </Grid>
                <div className="text-bold">2.ทุนการศึกษาจากหน่วยงานภายนอก</div>
                <div className="text-detail-indent"> หมายถึงทุนการศึกษาที่ใช้งบประมาณบริจาคจากมูลนิธิ บริษัท ห้าง ร้าน สมาคมนักศึกษาเก่าคณะวิศวกรรมศาสตร์และผู้มีจิตศรัทธาที่บริจาคสนับสนุนการศึกษาแก่นักศึกษาคณะวิศวกรรมศาสตร์ จัดสรรให้แก่นักศึกษาที่ขาดแคลนทุนทรัพย์ นักศึกษาที่มีผลการเรียนดี และนักศึกษาที่ทำกิจกรรมวิชาการกิจกรรมเสริมหลักสูตร กิจกรรมกีฬา ตามความประสงค์ของผู้บริจาค </div>
            </Box>
            <Box sx={{ textAlign: 'center', marginTop: '20px', marginBottom: '10px', height: '100px', width: '100%', position: 'relative' }}>
                <Box sx={{ position: 'absolute', bottom: '50%', left: '50%', width: '30%', height: '5px', backgroundColor: '#b00020', transform: 'translateX(-50%)' }} />
            </Box>
            <Footer />
        </div>
    );
}

export default Scholarship;

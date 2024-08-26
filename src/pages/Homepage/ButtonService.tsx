import { Box, Button } from '@mui/material';

function ButtonService() {
  return (
    <>
    <Box
        sx={{
          textAlign: 'center',
          marginTop: '40px',
          marginBottom: '20px',
        }}
      >
        <Box
          sx={{
            fontSize: '40px',
            fontWeight: 'Medium',
            color: '#b00020', // Red text color
            fontFamily: 'Prompt',
            display: 'inline-block',
            position: 'relative',
            paddingBottom: '10px', // Space for the underline
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '125%', // Width of the underline, 125% of the text
              height: '3px', // Thickness of the underline
              backgroundColor: '#b00020', // Red underline color
              bottom: '0', // Position the underline at the bottom
              left: '50%',
              transform: 'translateX(-50%)', // Center the underline relative to the text
            },
          }}
        >
          บริการนักศึกษา
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '30px',
          padding: '40px 0',
          backgroundColor: 'white',
        }}
      >
        {['งานทุนการศึกษา', 'งานส่งเสริมกิจกรรมนักศึกษา', 'งานวิชาการนักศึกษา', 'งานให้คำปรึกษาและดูแลสุขภาพจิต', 'สวัสดิการสุขภาพนักศึกษา', 'จองสถานที่', 'หนังสือรับรอง', 'Entaneer Upskill'].map((text, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{
              width: '310px', // Fixed width
              height: '170px', // Fixed height
              fontSize: '18px',
              backgroundColor: '#b00020', // Base color
              color: 'white',
              '&:hover': {
                backgroundColor: '#ff4d4d', // Hover color
              },
              fontFamily: 'Prompt',
              textAlign: 'center',
              lineHeight: '1.5', // Adjusts line height for better text spacing
            }}
          >
            {text}
          </Button>
        ))}
      </Box>
      </>
  )
}

export default ButtonService
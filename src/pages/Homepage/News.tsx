import { Box, Card } from '@mui/material';
import { FacebookEmbed } from 'react-social-media-embed';

const FacebookPosts = ({ postUrls }: any) => {
 

  return (
    <Box
      sx={{
        zIndex: 22,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px',
        justifyContent: 'center',
        margin: '20px auto',
        marginBottom: '100px',
        '@media (max-width: 600px)': { // Adjust this breakpoint as needed
          gridTemplateColumns: 'repeat(2, 1fr)', // Change to 2 columns
        },
        '@media (max-width: 500px)': { // Another breakpoint for smaller screens
          gridTemplateColumns: '1fr', // Change to 1 column
        },
      }}
    >
      {postUrls.map((url: any, index: any) => (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          style={{ textDecoration: 'none' }}
        >
          <Card
            sx={{
              maxWidth: {
                xs: '300px', // mobile phones
                sm: '200px', // tablets
                md: '250px', // desktops
                lg: '400px', // large desktops
              },
              boxShadow: 8,
              maxHeight: {
                xs: '200px', // mobile phones
                sm: '300px', // tablets
                md: '300px', // desktops
                lg: '500px', // large desktops
              },
              userSelect: 'none',
              pointerEvents: 'none', // Disable pointer events on the card itself
              '& *': {
                pointerEvents: 'auto', // Allow pointer events on embedded content
              },
              cursor: 'pointer', // Make the entire card appear clickable
              ':hover': {
                boxShadow: 12, // Add a hover effect for better UX
              },
            }}
          >
            {/* Responsive FacebookEmbed width and height */}
            <FacebookEmbed
              url={url}
              linkText={url}
            />
          </Card>
        </a>
      ))}
    </Box>
  );
};

const News = () => {
  const postUrls = [
    'https://www.facebook.com/photo.php?fbid=909915987835075&set=a.546737444152933&type=3&ref=embed_post',
    'https://www.facebook.com/photo/?fbid=953633139896543&set=a.534792155113979',
    'https://www.facebook.com/photo?fbid=955424436384080&set=a.534792155113979',
  ];

  return (
    <>
      <Box
        sx={{
          zIndex: 21,
          padding: '20px',
          fontFamily: 'Prompt',
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            marginLeft: '10%',
            fontWeight: 'Medium',
            color: '#b00020',
            marginBottom: '20px',
            position: 'relative',
            display: 'inline-block',
            fontFamily: 'Prompt',
            fontSize: {
              xs: '24px', // mobile phones
              sm: '30px', // tablets
              md: '35px', // desktops
              lg: '40px', // large desktops
              xl: '45px'  // larger screens
            },
            '&:after': {
              content: '""',
              display: 'block',
              width: '125%',
              height: '3px',
              backgroundColor: '#b00020',
              marginTop: '5px',
              position: 'absolute',
              left: '0',
            },
          }}
        >
          ข่าวประชาสัมพันธ์
        </Box>
        <Box sx={{ display: "flex" }}>
          <FacebookPosts postUrls={postUrls} />
        </Box>
      </Box>
    </>
  );
};

export default News;

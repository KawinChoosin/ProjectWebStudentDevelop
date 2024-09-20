import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { FacebookEmbed } from 'react-social-media-embed';

const FacebookPosts = ({ postUrls }:any) => {
  return (
    <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
      justifyContent: 'center',
      margin: '20px auto',
      marginBottom: '100px',
      '@media (max-width: 1100px)': { // Adjust this breakpoint as needed
        gridTemplateColumns: 'repeat(2, 1fr)', // Change to 2 columns
      },
      '@media (max-width: 800px)': { // Another breakpoint for smaller screens
        gridTemplateColumns: '1fr', // Change to 1 column
      },
    }}
    >
      {postUrls.map((url, index) => (
        <Card key={index} sx={{ maxWidth: '400px', boxShadow: 4, maxHeight: '500px' }}>
          <FacebookEmbed url={url} width={400} height={500}  />
        </Card>
      ))}
      
    </Box>
  );
};

const News = () => {
  const postUrls = [
    'https://www.facebook.com/photo?fbid=957979282795262&set=a.534792155113979',
    'https://www.facebook.com/photo/?fbid=953633139896543&set=a.534792155113979',
    'https://www.facebook.com/photo?fbid=955424436384080&set=a.534792155113979',
  ];

  return (
    <>
      <Box
        sx={{
          textAlign: 'left',
          padding: '20px',
          marginLeft: '10%',
          fontFamily: 'Prompt',
        }}
      >
            
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 'Medium',
            color: '#b00020',
            marginBottom: '20px',
            position: 'relative',
            display: 'inline-block',
            fontFamily: 'Prompt',
            fontSize: '40px',
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
        </Typography>
      </Box>
      <FacebookPosts postUrls={postUrls} />
    </>
  );
};

export default News;

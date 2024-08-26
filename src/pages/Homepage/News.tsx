import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { FacebookEmbed } from 'react-social-media-embed';

const FacebookPosts = ({ postUrls }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px',
        justifyContent: 'center',
        margin: '20px auto',
        marginBottom: '100px',
      }}
    >
      {postUrls.map((url, index) => (
        <Card key={index} sx={{ maxWidth: '400px', boxShadow: 4, maxHeight: '500px' }}>
          <FacebookEmbed url={url} width={400} height={500} lazyLoad={true} showText={true} />
        </Card>
      ))}
      
    </Box>
  );
};

const News = () => {
  const postUrls = [
    'https://www.facebook.com/photo?fbid=957979282795262&set=a.534792155113979',
    'https://www.facebook.com/photo/?fbid=950167523576438&set=a.534792155113979',
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
            '&:after': {
              content: '""',
              display: 'block',
              width: '125%',
              height: '3px',
              backgroundColor: '#b00020',
              marginTop: '5px',
              position: 'absolute',
              left: '0',
              bottom: '-5px',
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

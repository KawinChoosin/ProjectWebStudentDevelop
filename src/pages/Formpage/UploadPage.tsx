import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

function UploadPage() {
    return (
        <Tabs aria-label="Basic tabs" defaultValue={0}>
          <TabList>
            <Tab>ImgSlideMain</Tab>
            <Tab>FB_Post</Tab>
            <Tab>ประกาศ/ข้อบังคับ/ระเบียบ</Tab>
          </TabList>
          <TabPanel value={0}>
            <b>First</b> tab panel
          </TabPanel>
          <TabPanel value={1}>
            <b>Second</b> tab panel
          </TabPanel>
          <TabPanel value={2}>
            <b>Third</b> tab panel
          </TabPanel>
        </Tabs>
      );
}

export default UploadPage
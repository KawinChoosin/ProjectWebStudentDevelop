import React, { useState } from 'react';
import Editor from '../../../component/Editor';
import Display from '../../../component/Display';

const textrich = () => {
  const pageId = 1;

  return (
    <div>
          <h1>Page {pageId}</h1>
          {/* <Editor pageId={pageId} />
          <Display pageId={pageId} /> */}
    </div>
  );
};

export default textrich;

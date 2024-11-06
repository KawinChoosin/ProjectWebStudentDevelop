// import React, { useState } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// const Editor = () => {
//   const [editorData, setEditorData] = useState('');

//   return (
//     <div>
//       <h2>CKEditor 5 in React</h2>
//       <CKEditor
//         editor={ClassicEditor}
//         data={editorData}
//         onChange={(event, editor) => {
//           const data = editor.getData();
//           setEditorData(data);
//         }}
//         onReady={(editor) => {
//           console.log('Editor is ready to use!', editor);
//         }}
//         onBlur={(event, editor) => {
//           console.log('Blur.', editor);
//         }}
//         onFocus={(event, editor) => {
//           console.log('Focus.', editor);
//         }}
//       />
//       <p>Editor Data:</p>
//       <div>{editorData}</div>
//     </div>
//   );
// };

// export default Editor;

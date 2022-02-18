import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from '@chakra-ui/react'

class Posts extends Component {
    constructor(props) { 
        super(props); 
        this.state = {
          content:""
        }
      }
  render() {
    return (
      <div className='App' style={{ width: '80%', margin: '0 auto' }}>
        <h2>Post Important/Urgent Notices</h2>
        <CKEditor
          editor={ClassicEditor}
          
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
          //  console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            this.setState({content:data})
           //  console.log(this.state.content);
          }}
          onBlur={(event, editor) => {
            //console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            //console.log('Focus.', editor);
          }}
        />
      <div  >
      <Button colorScheme='teal' onClick={() => {
          console.log("sd")
      }}>
          Submit
        </Button>
      </div>
      </div>
    );
  }
}

export default Posts;

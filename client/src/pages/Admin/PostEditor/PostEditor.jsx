import React from 'react';
import "./PostEditor.sass"
import { TextEditor } from "./components";


const PostEditor = () => {

  return (
    <div className="post-editor-container">
      <div className="w-100">
      <TextEditor/>
      </div>
    </div>
  )
}

export default PostEditor

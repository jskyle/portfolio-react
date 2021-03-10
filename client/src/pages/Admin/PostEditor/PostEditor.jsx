import React, { useRef, useState, useEffect } from 'react';
import "./PostEditor.sass"
import { TextEditor } from "./components";
import { Input, FormGroup, Button } from "reactstrap"


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

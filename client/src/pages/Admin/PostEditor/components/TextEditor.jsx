/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable-next-line */
import React, { Component } from 'react';
import './sass/TextEditor.sass';
import {
  convertToRaw, convertFromRaw, createWithContent, EditorState,
} from 'draft-js';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import createInlineToolbarPlugin, {
  Separator,
} from '@draft-js-plugins/inline-toolbar';
import { FormGroup, Input, Button } from 'reactstrap';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from '@draft-js-plugins/buttons';

import HeadlinesButton from './HeadlinesButton';

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];

export class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.state.editorState = EditorState.createEmpty();
  }

  saveContent = (content) => {
    const contentState = this.state.editorState.getCurrentContent();

    // createPost({
    //   title: 'test', body: JSON.stringify(convertToRaw(contentState)), uid: 1, username: 'kyle',
    // });
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <>
        <FormGroup>
          <Input type="text" name="title" placeholder="Title" className=" title-input" />
        </FormGroup>
        <FormGroup>
          <Input type="select">
            <option value="1">this week</option>
            <option value="2">next week</option>
            <option value="3">two weeks</option>
            <option value="4">three weeks</option>
            <option value="5">a month</option>
          </Input>
        </FormGroup>
        <div className="editor" onClick={this.focus}>
          <Editor
            editorKey="CustomInlineToolbarEditor"
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => {
              this.editor = element;
            }}
          />
          <InlineToolbar>
            {
              // may be use React.Fragment instead of div to improve perfomance after React 16
              (externalProps) => (
                <div>
                  <BoldButton {...externalProps} />
                  <ItalicButton {...externalProps} />
                  <UnderlineButton {...externalProps} />
                  <CodeButton {...externalProps} />
                  <Separator {...externalProps} />
                  <HeadlinesButton {...externalProps} />
                  <UnorderedListButton {...externalProps} />
                  <OrderedListButton {...externalProps} />
                  <BlockquoteButton {...externalProps} />
                  <CodeBlockButton {...externalProps} />
                </div>
              )
            }
          </InlineToolbar>
        </div>
        <Button block color="primary" onClick={this.saveContent}>Publish</Button>
      </>
    );
  }
}

export default TextEditor;

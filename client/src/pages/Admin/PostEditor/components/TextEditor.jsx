import React, { Component } from 'react';
import './sass/TextEditor.sass';
import { EditorState, convertToRaw  } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createInlineToolbarPlugin, {
  Separator,
} from '@draft-js-plugins/inline-toolbar';
import { FormGroup, Input, Button } from 'reactstrap';
import axios from 'axios';
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
    this.state = {
      title: '',
      summary: '',
      slug: '',
      publishDate: '',
    };

    this.state.editorState = EditorState.createEmpty();
  }

    componentDidMount() {
    this.setState({
      publishDate: this.getNextDayOfWeek(new Date(), 1, 1)
    })
  }

  saveContent = () => {
    const contentState = this.state.editorState.getCurrentContent();

    axios.post('/api/post/create', {
      title: this.state.title,
      summary: this.state.summary,
      slug: this.state.slug,
      publishDate: this.state.publishDate,
      content: JSON.stringify(convertToRaw(contentState)),
      userId: 1,
    }).then((res) => { console.log(res)}).catch((err) => console.log(err))
  };

 getNextDayOfWeek(date, dayOfWeek, weeks) {
    // Code to check that date and dayOfWeek are valid left as an exercise ;)

    var resultDate = new Date(date.getTime());

    resultDate.setDate(date.getDate() + (weeks * 7 + dayOfWeek - date.getDay()) % (weeks * 7));

    resultDate.setHours(9, 0, 0)
    return resultDate;
}

  onSelect = (e) => {

    this.setState({
      publishDate: this.getNextDayOfWeek(new Date(), 1, e.target.value)
    })
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  inputChange = (e, input) => {
    this.setState({[e.target.name]: e.target.value})
  }

  focus = () => {
    this.editor.focus();
  };

  render() {

    return (
      <>
        <FormGroup>
          <Input type="text" name="title" placeholder="Title" className="title-input" value={this.state.title} onChange={this.inputChange}/>
        </FormGroup>
        <FormGroup>
          <Input type="select" onChange={(e) => this.onSelect(e)}>
            <option value={1}>This coming Monday</option>
            <option value={2}>The following Monday</option>
            <option value={3}>Two Mondays from now</option>
            <option value={4}>three Mondays from now</option>
          </Input>
        <FormGroup>
          <Input type="text" name="slug" placeholder="URL Slug" className="slug-input" value={this.state.slug} onChange={this.inputChange}/>
        </FormGroup>
        <FormGroup>
          <Input type="textarea" name="summary" placeholder="Summary" className="summary-input" value={this.state.summary} onChange={this.inputChange}/>
        </FormGroup>

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

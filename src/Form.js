import React, { Component } from 'react';
import RichTextEditor from 'react-rte';
import { addTemplate, addNote } from "./actions";

class FormRTE extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.input.value === '' ?
        RichTextEditor.createEmptyValue() :
        RichTextEditor.createValueFromString(this.props.input.value, 'html'),
      temp: {}
    };
  }


  componentWillReceiveProps(nextProps) {
    const isPristine = nextProps.meta.pristine;

    if (nextProps.input.value && isPristine) {
      this.setState({
        value: this.RichTextEditor.createValueFromString(nextProps.input.value, "html")
      });
    }
    this.state.value.setContentFromString(nextProps.value, "html");
  }

  onClick(template) {
    console.log('on click ', template)
    addTemplate(template)
    this.setState({
      temp: template
    })
    // loop list of templates and store as id and add this to that loop and do it
  }

  onImpClick(myRestoredTemplate) {
    this.setState({
      value: myRestoredTemplate,
    })
  }

  onNoteSave() {
    // use new content to save a note - use dispatch to reduxify
    let editorState = this.state.value.getEditorState();
    let newContent = editorState.getCurrentContent().getPlainText();
    addNote({
      text: newContent
    })
    console.log('New Content', newContent);
  }

  onChange(value) {
    const isTextChanged = this.state.value.toString('html') !== value.toString('html');
    let editorState = this.state.value.getEditorState();
    let contentState = window.contentState = editorState.getCurrentContent().toJS();
    console.log('content state ', contentState);
    console.log('value ', value);


    // when typing put the value into local state
    // console.log('is text Changed ', isTextChanged);
    //console.log('get current content ', getCurrentContent());
    console.log('editorState ', editorState);
    this.setState({ value }, e => isTextChanged && this.props.input.onChange(value.toString('html')));
  };

  render() {
    return (
      <div>
        <RichTextEditor value={this.state.value} onChange={this.onChange.bind(this)} />
        {/* This button needs to call an add template form*/}
        <button onClick={() => this.onClick(this.state.value)}>Save as a Template</button>
        <button onClick={() => this.onNoteSave()}>Save as a Note</button>
        <button onClick={() => this.onImpClick(this.state.temp)} >Implement</button>
      </div>
    );
  }
}

export default FormRTE;

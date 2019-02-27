import React, { Component } from 'react';
import RichTextEditor from 'react-rte';
import { addTemplate, addNote } from "./actions/actions";
import MyTemplates from "./MyTemplates";
import { connect } from "react-redux";

class FormRTE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.input.value === '' ?
        RichTextEditor.createEmptyValue() :
        RichTextEditor.createValueFromString(this.props.input.value, 'html'),
      stateName: "",
    };
  }

  getTemplateName(event) {
    this.setState({
      stateName: event.target.value,
    })
    //console.log('Name changed', this.state.stateName)
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

  // save a template click - needs to get the name from the form
  onClick(event, template) {
    event.preventDefault();
    // console.log('on click ', template)
    let myNewTemplate = {
      name: this.state.stateName,
      templateState: template
    }
    // console.log('on click ', myNewTemplate)
    this.props.dispatch(addTemplate(myNewTemplate))
    /*     this.setState({
          temp: template
        }) */
    // loop list of templates and store as id and add this to that loop and do it
  }

  // restore template click function
  onImpClick(myRestoredTemplate) {
    console.log('my Restored template', myRestoredTemplate);
    this.setState({
      value: myRestoredTemplate.templateState,
    })
  }

  onNoteSave() {
    let editorState = this.state.value.getEditorState();
    let newContent = editorState.getCurrentContent().getPlainText();
    this.props.dispatch(addNote({
      text: newContent,
      saveState: editorState
    }));
    // console.log('New Content', newContent);
  }

  onChange(value) {
    const isTextChanged = this.state.value.toString('html') !== value.toString('html');
    // let editorState = this.state.value.getEditorState();
    // let contentState = window.contentState = editorState.getCurrentContent().toJS();
    // console.log('content state ', contentState);
    // console.log('value ', value);


    // when typing put the value into local state
    // console.log('is text Changed ', isTextChanged);
    //console.log('get current content ', getCurrentContent());
    // console.log('editorState ', editorState);
    this.setState({ value }, e => isTextChanged && this.props.input.onChange(value.toString('html')));
  };

  render() {
    return (
      <div>
        <RichTextEditor value={this.state.value} onChange={this.onChange.bind(this)} />
        <button onClick={() => this.onNoteSave()}>Save as a Note</button>
        <form>
          <fieldset>
            <label htmlFor="templateName">
              Name Your Template:{" "}
              <input id="templateName" defaultValue="Name Your Template" name="templateName"
                onChange={e => this.getTemplateName(e)} />
            </label>
            <input
              onClick={(e) => this.onClick(e, this.state.value)
              }
              id="templateSaveSubmit"
              className="submit"
              type="submit"
              name="submit"
            />
          </fieldset>
        </form>
        {/* I need the buttons in the My templates to call this callback
        <button onClick={() => this.onImpClick(this.state.temp)} >Implement</button>
        () => this.onImpClick(this.props.temp)
        */}
        <MyTemplates onImpClick={(template) => this.onImpClick(template)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  temp: state.crud.templates,
})

export default connect(mapStateToProps)(FormRTE);

import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "../node_modules/draft-js/dist/Draft.css"
import "./css/AddNote.css"

export default class AddNote extends React.Component {
constructor(props) {
  super(props);
  this.state = { editorState: EditorState.createEmpty()};
  this.onChange = (editorState) => this.setState({editorState});
  this.handleKeyCommand = this.handleKeyCommand.bind(this);
}

handleKeyCommand(command, editorState) {

  const newState = RichUtils.handleKeyCommand(editorState, command);
  if (newState) {
    this.onChange(newState);
    return 'handled';
  }
  return 'not-handled';
}

render () {
  return <section>
      <header className="banner" role="banner">
        <h1>Add Notes Here</h1>
      </header>
      <Editor editorState={this.state.editorState}
      onChange={this.onChange}
      handleKeyCommand={this.handleKeyCommand}
      />
            {/* Template is another or different form - for low number create buttons for each template 
            <form>
        <fieldset>
          <label htmlFor="note">
                   <input id="note" defaultValue="Add a Note Here" name="" />
          </label>
        </fieldset>
        </form>
            */}
     
      
    </section>

}
}

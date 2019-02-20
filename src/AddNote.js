import React from "react";
import { Editor, EditorState } from "draft-js";
import "./css/AddNote.css"

export default class AddNote extends React.Component {
constructor(props) {
  super(props);
  this.state = { editorState: EditorState.createEmpty()};
  this.onChange = (editorState) => this.setState({editorState})
}

render () {
  return <section>
      <header className="banner" role="banner">
        <h1>Add Notes Here</h1>
      </header>
      <Editor editorState={this.state.editorState}
      onChange={this.onChange}
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

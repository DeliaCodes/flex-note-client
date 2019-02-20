import React from "react";
import RichTextEditor from "react-rte";
import PropTypes from "prop-types";
import "./css/AddNote.css"

export default class AddNote extends React.Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    value: RichTextEditor.createEmptyValue()
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  };

render () {
  return <section>
      <header className="banner" role="banner">
        <h1>Add Notes Here</h1>
      </header>
      <RichTextEditor value={this.state.value} onChange={this.onChange} />
      
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

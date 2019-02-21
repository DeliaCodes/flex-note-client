import React from "react";
import { connect } from "react-redux";
import FormRTE from "./Form";
import {Field, reduxForm } from "redux-form";
import "./css/AddNote.css"

export class AddNote extends React.Component {

render () {
  return <section>
      <header className="banner" role="banner">
        <h1>Add Notes Here</h1>
      </header>
      <Field name="description" component={FormRTE} />
      
            {/* Template is another or different form - for low number create buttons for each template 
            <form>
        <fieldset>
          <label htmlFor="note">
                   <input id="note" defaultValue="Add a Note Here" name="" />
          </label>
        </fieldset>
        </form>

        add some sort of dispatch to dispatch into state
            */}
     
      
    </section>

}
}

const mapStateToProps = state => ({
value: state.value,
})

export default connect(mapStateToProps)(reduxForm({
  form: 'AddNote'
})(AddNote));

import React from "react";
import { connect } from "react-redux";


export function MyTemplates(props) {
  const templateButtons = props.savedTemplates.map((item, index) => <button onClick={() => this.props.OnImpClick} key={index} className="templateButton" id={item.id}>{item.name}</button>)

  const checkIfAnyTemplatesAreSaved = () => {
    if (props.savedTemplates[0].id === 1) {
      return <p>Save Some Templates Using the Form Above</p>
    }
    return templateButtons;
  }

  return (
    <section className="templateSection">
      <div>
        {checkIfAnyTemplatesAreSaved()}
      </div>
    </section>
  )
}

MyTemplates.defaultProps = {
  savedTemplates: [{
    id: 1,
    name: "Not a saved template"
  }]
}

const mapStateToProps = state => ({
  savedTemplates: state.templates
})

export default connect(mapStateToProps)(MyTemplates);

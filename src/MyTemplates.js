import React from "react";
import { connect } from "react-redux";


export function MyTemplates(props) {
  const templateButtons = (templatesToProcess) => {
    let usersTemplates = templatesToProcess.filter((item) => item.id !== 1);

    return usersTemplates.map((item, index) => <button onClick={() => props.onImpClick(props.savedTemplates[index + 1])} key={index} className="templateButton" id={item.id}>{item.name}</button>)
  }

  const checkIfAnyTemplatesAreSaved = () => {
    // console.log('Check if any templates ', props.savedTemplates)
    if (props.savedTemplates.length === 1) {
      return <p>Your custom templates will display here. Save some using the form above.</p>
    }
    else { return templateButtons(props.savedTemplates) }
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
    name: "default template placeholder"
  }]
}

const mapStateToProps = state => {
  // console.log('map to state ', state)
  return { savedTemplates: state.crud.templates }
}

export default connect(mapStateToProps)(MyTemplates);

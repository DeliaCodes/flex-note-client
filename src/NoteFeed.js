import React from "react";
import { connect } from "react-redux";
import "./css/NoteFeed.css";

/* const generateFeed = notesArray => {
  return notesArray.map(item => `<div className="note" id="${item.id}"><p className="title">${item.title}</p><p className="text">${item.text}</p></div>`)
} */


export function NoteFeed(props) {
  const myNotes = array => {
    if (array.length < 2) {
      return <p>Click on the Add Note link above to create some notes!</p>
    }

    else {
      let userNotes = array.filter((item) => item.id !== 1);
      return userNotes.map((item, index) => <div key={index + 1} className="note" id={item.id}><p className="text">{item.text}</p></div>)
    }
  }

  return (
    <section className="notes">
      <header className="banner" role="banner">
        <h1>My Notes</h1>
      </header>
      {/*        
      */}
      <div>
        {myNotes(props.notes)}
      </div>
    </section>
  );
}
NoteFeed.defaultProps = {
  notes: [{
    id: 1,
    text: `Tu quoque litoribus nostris, Aeneia nutrix,
aeternam moriens famam, Caieta, dedisti;
et nunc servat honos sedem tuus, ossaque nomen
Hesperia in magna, si qua est ea gloria, signat.`
  }]
};

const mapStateToProps = state => ({
  notes: state.crud.notes,
})

export default connect(mapStateToProps)(NoteFeed);

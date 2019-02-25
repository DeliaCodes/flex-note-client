import React from "react";
import { connect } from "react-redux";
import "./css/NoteFeed.css";

/* const generateFeed = notesArray => {
  return notesArray.map(item => `<div className="note" id="${item.id}"><p className="title">${item.title}</p><p className="text">${item.text}</p></div>`)
} */


export function NoteFeed(props) {
  const myNotes = props.notes.map(item => <div className="note" id={item.id}><p className="title">{item.title}</p><p className="text">{item.text}</p></div>)

  return (
    <section className="notes">
      <header className="banner" role="banner">
        <h1>My Notes</h1>
      </header>
      {/*        
      */}
      <div>
        {myNotes}
      </div>
    </section>
  );
}
NoteFeed.defaultProps = {
  notes: [{
    id: 1,
    title: "Today's Aeneid Reading",
    text: `Tu quoque litoribus nostris, Aeneia nutrix,
aeternam moriens famam, Caieta, dedisti;
et nunc servat honos sedem tuus, ossaque nomen
Hesperia in magna, si qua est ea gloria, signat.`
  }]
};

const mapStateToProps = state => ({
  notes: state.notes,
})

export default connect(mapStateToProps)(NoteFeed);

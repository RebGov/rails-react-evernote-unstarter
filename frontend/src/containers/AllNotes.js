import React, { Component }from 'react';
import BriefNote from '../components/BriefNote';

export default class AllNotes extends Component {
  constructor(props) {
    super(props);

  }
  getUserNotes = ()=>  {
    return this.props.userNotes.map( (note) => {
      return<BriefNote key={note.id} note={note} />
    })
  }

  render() {
    const style = { border: "1px solid brown", padding: "1rem" };
    console.log("noteList: ", this.props.userNotes)
    return (
      <div className="All-notes" style={style}>
        {this.getUserNotes()}
      </div>

    )
  }
}

//due to issue with state Daniel said to make it an src container (fat arrow) to keep the state from overriding
//this works
// const AllNotes = (props) => {
//   const style = { border: "1px solid brown", padding: "1rem" };
//   const getUserNotes = ()=>  {
//     return props.userNotes.map( (note) => {
//       return<OneNote key={note.id} note={note} />
//     })
//   }
//   console.log("noteList: ",props.userNotes)
//   return (
//     <div className="All-notes" style={style}>
//       {getUserNotes()}
//     </div>
//
//   )
// }
// export default AllNotes;

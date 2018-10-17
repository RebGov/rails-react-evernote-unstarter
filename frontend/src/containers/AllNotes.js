import React from 'react';
import OneNote from '../components/OneNote';
//due to issue with state Daniel said to make it an src container (fat arrow) to keep the state from overriding

const AllNotes = (props) => {
  const style = { border: "1px solid brown", padding: "1rem" };
  const getUserNotes = ()=>  {
    return props.userNotes.map( (note) => {
      return<OneNote key={note.id} note={note} />
    })
  }
  console.log("noteList: ",props.userNotes)
  return (
    <div className="All-notes" style={style}>
      {getUserNotes()}
    </div>

  )
}
export default AllNotes;






// export default class AllNotes extends Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//         userSignedIn: this.props.userSignedIn,
//         currentUser: this.props.currentUser
//     }
//   }
//   render() {
//     console.log("AllNotesPg: ",  this.props.userNotes)
//     const style = { border: "1px solid brown", padding: "1rem" };
//     return(
//       <div className="All-notes" style={style}>
//         {/* {this.getNotes()} */}
//       </div>
//     )
//   }
// }

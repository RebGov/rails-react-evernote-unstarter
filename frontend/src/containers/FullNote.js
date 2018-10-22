import React from "react";

class FullNote extends React.Component {

  render () {

      return (
        <div>

        <div key={this.props.currentNote.id}>
          <h1>{this.props.currentNote.title}</h1>
          <h3>{this.props.currentNote.location}</h3>
          <p>{this.props.currentNote.content}</p>

        </div>
      </div>
      );
  }
}

// const FullNote = ({currentNote: {id, title, location, content}}) => {
//   // const style = {
//   //   border: "1px solid purple",
//   //   padding: "1rem",
//   //   margin: "1rem"
//   // };
// // console.log("FullNote-currentNote: ", currentNote)
//   return (
//
//     <div key={id} >
//       <h1>{title}</h1>
//       <h2>{location}</h2>
//       <p>{content}</p>
//     </div>
//   );
// };

export default FullNote;

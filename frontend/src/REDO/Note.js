// import React, { Component } from 'react';


 class Note extends Component {
   handleClick = e => {
       const id = this.props.note.id;
       const title = this.props.note.title;
       const content = this.props.note.content
       const contentTruncated = this.props.note.content;

       this.props.handleUpdateVideo(id, title, content, contentTruncated);
     };

   render() {
     const style = {
       border: "1px solid lavender",
       padding: "1rem",
       margin: "1rem"
     };

     return (
       <div onClick={this.handleClick} style={style}>
         <h2>{this.props.note.title}</h2>
         <p>{this.props.note.contentTruncated}</p>
       </div>
     );
   }
 }





export default Note;

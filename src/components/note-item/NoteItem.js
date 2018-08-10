import React from 'react'
// import { Link } from 'react-router-dom'
import NoteUpdateForm from '../note-update-form/NoteUpdateForm.js'


/*

If the user double clicks on the notes content it should switch to the Edit View

    Default view
        Display the notes content and a delete button
        Display a delete button that will remove the Note from the application's state

    Edit View
        Show the NoteUpdateForm and a Cancel Button
            onSubmit or click of the cancel button in NoteUpdateForm it should switch back to the default view

    
*/
class NoteItem extends React.Component {
    constructor(props) {
        super(props)
        this.removeItem = this.removeItem.bind(this)
    }

    removeItem(event) {
        // have the note selected already??
        // how to get id to pass to removeNote function from Dashboard element
        console.log('Delete Note',event.target.name)
        event.preventDefault();
        let id = event.target.name
        this.props.removeNote(id);
    }

    render() {
        return (
            <React.Fragment>
                
                {
                    this.props.notesArr.map((id) =>
                        <li key={id.id}>
                            {/* <Link to={`/item/${id.id}`}>{id.title}</Link> */}
                            <h3>{id.title}</h3>
                            <p>{id.content}</p>
                            <input type="button" onClick={this.removeItem} name={id.id} value="delete"/>
                            {this.props.condition && this.props.children}
                        </li>
                    )
                }
              
                {/* {this.props.condition && this.props.children} */}

            </React.Fragment>
        )
    }
}

export default NoteItem;


/* <h2>Note Item</h2> */
/* <input type="button" name="delete" onClick={this.extractId}/> */
/* there is the curly braces here because we are writing a vanilla JS expression where JSX is normally written */
/* onSubmit it needs to do something and we need to pass it a note */
/* <NoteUpdateForm updateContent={this.updateContent} /> */
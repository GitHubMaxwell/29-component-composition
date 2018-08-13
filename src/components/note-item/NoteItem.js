import React from 'react';
// import NoteUpdateForm from '../note-update-form/NoteUpdateForm.js'

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
        this.editView = this.editView.bind(this)
        // this.expandUpdatePanel = this.expandUpdatePanel.bind(this)
    }
    removeItem(e) {
        // console.log('Delete Note',e.target.name)
        e.preventDefault();
        let id = e.target.name
        this.props.removeNote(id);
    }
    editView(e) {
        // console.log('event target name',event.target.getAttribute("name"))
        //forgot to put paranthesis on updateStatus
        this.props.updateMode(e)
        // this.expandUpdatePanel()
    }
    // expandUpdatePanel() {
    //     console.log('expandPanel')
    //     console.log('notesArr:',this.props.notesArr)
    //     console.log('notesArr:',this.props.updateId)

    //     this.props.notesArr.forEach(note => {
    //         if(this.props.updateId === note.id){
    //             console.log('expand note:',note.id)
    //             this.setState((prevState) => ({
    //                 update : !prevState.update
    //             }),()=> {console.log('update:',this.state.update)})
    //         }
    //     });
    // }

    // {this.props.updateId && this.props.children}

    render() {
        return (
            <React.Fragment>
                {
                    this.props.notesArr.map((note) =>
                        <li className="note" name={note.id} key={note.id} onDoubleClick={this.editView}>
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                            <input type="button" onClick={this.removeItem} name={note.id} value="delete"/>
                            {this.props.updateId === note.id && this.props.children}
                        </li>
                    )
                }
            </React.Fragment>
        )
    }
}
export default NoteItem;
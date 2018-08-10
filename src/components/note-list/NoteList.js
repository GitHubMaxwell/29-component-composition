import React from 'react'
import NoteItem from '../note-item/NoteItem.js'
import NoteUpdateForm from '../note-update-form/NoteUpdateForm.js';

class NoteList extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h2>Note List</h2>
                <ul>
                    {/* <NoteItem condition = {this.props.notesArr.length > 2}notesArr = {this.props.notesArr} removeNote = {this.props.removeNote} updateContent={this.updateContent}> */}

                    <NoteItem condition = {this.props.notesArr.length > 2} {...this.props} >

                        <NoteUpdateForm />
                    </NoteItem>
                    {/* <NoteUpdateForm condition={this.props.notesArr.length > 0}/> */}
                </ul>
            </React.Fragment>
        )
    }
}

export default NoteList;
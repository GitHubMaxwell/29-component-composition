import React from 'react'
import NoteItem from '../note-item/NoteItem.js'
import NoteUpdateForm from '../note-update-form/NoteUpdateForm.js';

export default class NoteList extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h2>Note List</h2>
                <ul>
                    <NoteItem {...this.props}>
                        <NoteUpdateForm {...this.props}/>
                    </NoteItem>
                </ul>
            </React.Fragment>
        )
    }
}
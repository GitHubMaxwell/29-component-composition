/*
Create a NoteUpdateForm component that inherits a note through props and onSubmit is able to update the App's state with an updated note.
*/

import React from 'react'

export default class NoteUpdateForm extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit = event => {
        console.log('NoteUpdateForm handleSubmit')
        this.props.updateContent();
    }

    render() {
        return (
            // <h2 onClick={this.handleSubmit}>NoteUpdateForm</h2>
            <React.Fragment>
            {/* <textarea onChange={this.handleContent}></textarea>
            <button>Submit</button> */}
            <h2>Update</h2>
            </React.Fragment>
        )
    }
}
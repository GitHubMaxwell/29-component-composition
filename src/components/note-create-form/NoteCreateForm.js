import React from 'react'

class NoteCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.formComplete = this.formComplete.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    //refactor these two function out and switch the onSubmit and onChange to directly to the props over in Dashboard

    formComplete(event) {
        event.preventDefault();
        this.props.addNote()
        document.getElementById('form').reset()
    }

    handleChange(e) {
        e.preventDefault()
        this.props.updateNote(e)
    }
    render() {
        return (
            <React.Fragment>
                <h2>Create Note</h2>
                <form id="form" onSubmit={this.formComplete} onChange={this.handleChange}>
                
                <label>Note Title:</label>
                <input name="title" type="text" />
                <label>Note Content:</label>
                <textarea name="content"></textarea>
                <input name="editing" type="checkbox" />
                <input name="completed" type="checkbox" />

                <button>Submit</button>

                </form>

            </React.Fragment>
        )
    }
}

export default NoteCreateForm;
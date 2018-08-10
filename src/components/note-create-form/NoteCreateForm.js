import React from 'react'

// onComplete the NoteForm should add a note to the application state

class NoteCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.formComplete = this.formComplete.bind(this);
        // this.handleTitle = this.handleTitle.bind(this)
        // this.handleContent = this.handleContent.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    formComplete(event) {
        event.preventDefault();
        // console.log(event.target.name)
        this.props.addNote()
        document.getElementById('form').reset()
    }

    // handleTitle(e) {
    //     this.props.updateTitle(e.target.value)
    // }
    // handleContent(e) {
    //     this.props.updateContent(e.target.value)
    // }

    // refactor this into just one and send it e.target

    handleChange(e) {
        e.preventDefault()
        this.props.updateState(e)
    }
    //add checkbox input
    // put event listener on <form> to fire handlChange and remove onChange={this.handleContent} from individual inputs
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
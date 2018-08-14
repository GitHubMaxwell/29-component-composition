import React from 'react'

export default class NoteUpdateForm extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.props.updateNote(e);
    }
    handleUpdate(e) {
        e.preventDefault();
        this.props.addNote();
        document.getElementById('form').reset();
    }

    render() {
        return (
            <React.Fragment>
            <h2>Update</h2>
            <form id="form" onSubmit={this.handleUpdate} onChange={this.handleChange}>
                
                <label>Note Title:</label>
                <input name="title" type="text" />
                <label>Note Content:</label>
                <textarea name="content" ></textarea>
                <input name="editing" type="checkbox" />
                <input name="completed" type="checkbox" />
                <button>Update</button>
                </form>
            <input onClick={()=>{this.props.cancelUpdate()}}type="button" value="cancel"/>
            </React.Fragment>
        )
    }
}
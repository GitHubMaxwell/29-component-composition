import React from 'react'

export default class NoteUpdateForm extends React.Component {
    constructor(props){
        super(props)
        this.formComplete = this.formComplete.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    //have to change this to reset but not call addNote
    formComplete(event) {
        event.preventDefault();
        // this.props.addNote()
        document.getElementById('form').reset()
    }

    handleChange(e) {
        e.preventDefault()
        console.log('handleChange')
        this.props.reWriteNote(e)
    }

    render() {
        return (
            // <h2 onClick={this.handleSubmit}>NoteUpdateForm</h2>
            <React.Fragment>
            {/* <textarea onChange={this.handleContent}></textarea>
            <button>Submit</button> */}
            <h2>Update</h2>
            <form id="form" onSubmit={this.formComplete} onChange={this.handleChange}>
                
                <label>Note Title:</label>
                <input name="title" type="text" placeholder={this.props.oldContent}/>
                <label>Note Content:</label>
                <textarea name="content" placeholder={this.props.oldContent}></textarea>
                <input name="editing" type="checkbox" />
                <input name="completed" type="checkbox" />
                <button>Update</button>
                </form>
            <input onClick={()=>{this.props.cancelUpdate()}}type="button" value="cancel"/>
            </React.Fragment>
        )
    }
}
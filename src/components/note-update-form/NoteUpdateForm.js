import React from 'react'

export default class NoteUpdateForm extends React.Component {
    constructor(props){
        super(props)
        // this.formComplete = this.formComplete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    //this is an old note when i wanted the onChange to be making direct changes to the notes array but now i want to split up the functionality to have form complete only write the contents of the note on press of the update button
    //have to change this to reset but not call addNote

    // formComplete(event) {
       
    // }

    handleChange(e) {
        e.preventDefault()
        console.log('handleChange')
        // refactor reWriteNote to update the note only and not be rewriting to the notes array
        // 
        this.props.updateNote(e)
        // this.props.reWriteNote(e)
        //handle change will be applied to the note object. spreading it and make updates and then setting state
    }
    handleUpdate(e) {
        console.log('handleUpdate')
        //fire off the addNote function in the Dashboard
        e.preventDefault();
        this.props.addNote()
        document.getElementById('form').reset()
    }

    // componentDidMount() {
    //     //call a function in Dashboard to populate the note object with the information found by spreading apart the notes array by the id of the list item (the function is already sortof written in the reWrite function in dashboard)
    //     // document.setAttributeValue('this.props.title').value
    //     // something like this to happen

    //     //then all updates can happen to the note state object in dashboard
    //     //if you press cancel just set the note object back to default values
    //     //on 'update' button press spread the notes array and on the matching id overwrite that object and setState the notes array back onto itself
    //     console.log('component did mount')
    //     // this.props.oldContent()

    // }

    // componentWillUnmount() {
    //     console.log('unmounted')
    //     //happend when when i switch doubleclick another li to expand the updating panel
    //     // clear the object (will this conflict with the Didmount that simply overwriting that update to the this.state.note object in dahsboard)
    // }

    render() {
        return (
            // <h2 onClick={this.handleSubmit}>NoteUpdateForm</h2>
            <React.Fragment>
            {/* <textarea onChange={this.handleContent}></textarea>
            <button>Submit</button> */}
            <h2>Update</h2>
            <form id="form" onSubmit={this.handleUpdate} onChange={this.handleChange}>
                
                <label>Note Title:</label>
                <input name="title" type="text" />
                <label>Note Content:</label>
                <textarea name="content" ></textarea>
                <input name="editing" type="checkbox" />
                <input name="completed" type="checkbox" />
                {/* <input name="completed" type="button" value="Update"/> */}
                <button>Update</button>
                </form>
            <input onClick={()=>{this.props.cancelUpdate()}}type="button" value="cancel"/>
            </React.Fragment>
        )
    }
}
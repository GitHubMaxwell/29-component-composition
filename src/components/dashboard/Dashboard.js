import React from 'react'
import NoteList from '../note-list/NoteList.js'
import NoteCreateForm from '../note-create-form/NoteCreateForm.js'
import uuidv1 from 'uuid/v1'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            note: {
                id: '',
                editing: false,
                completed: false,
                content: '',
                title: '',
            },
            notes: [],
            updateId: ''
        }
        this.addNote = this.addNote.bind(this)
        this.removeNote = this.removeNote.bind(this)
        this.updateNote = this.updateNote.bind(this)
        this.updateStatus = this.updateStatus.bind(this)
        this.reWriteNote = this.reWriteNote.bind(this)
        this.cancelUpdate = this.cancelUpdate.bind(this)
        this.oldContent = this.oldContent.bind(this)
    }

    updateNote(event) {
        const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({note: {...this.state.note,[event.target.name] : val}})
    }

    updateStatus(e) {
        let updateId = e.target.getAttribute('name')
        this.setState({
            updateId
        })
    }
    cancelUpdate() {
        // needs to clear whatever temporary cache ive populated with content from notes array
        this.setState({
            updateId : ''
        })
    }

    oldContent() {
        // has to be a string
        return 'Hello';
    }

    //on doubleclick and the opening of the updatenote the id will be appended to the state and the NoteUpdateFrom will access that per props

    //maybe combine this with updateNote but id have to send info with it to send through a conditional in order to differentiate between the original note submission or a rewrite
    //not getting access to the 

    //rewrite this to update the values in note and then on update button press it does the for loop stuff
    reWriteNote(e) {

        // let updateId = event.target.getAttribute("key")
        const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        // do i need to go up a level and spread apart notes manipulate and then rewrite to the notes
        // reassign the value of this.state note to equal these
        let notes = [...this.state.notes];
        // console.log(newNotes)
        // let targetName = e.target.name;

        for(let note of notes) {
            
            if(note.id === this.state.updateId) {
                // let targetName = e.target.name;
                // console.log('target name',targetName)
                // this.setState({
                //     //i think i need to break apart val and reset
                //     //{...this.state.note,[event.target.name] : val
                //     // [e.target.name] : val
                //     // was using event instead of e
                //     ...note, [e.target.name] : val
                // })
                //,()=>{console.log(note)}
                // needs to be an equal sign because im targeting a special position in the object in the array and reassigning its value
                note[e.target.name] = val
                // below was trying to 
                // note.targetName = val
                this.setState({notes});
            }
        }
    }

    addNote() {
        let id = uuidv1();
        let newNote = {...this.state.note, id}
        this.setState({notes : [...this.state.notes, newNote]})
    }

    removeNote(note) {
        let newArr = [...this.state.notes]
        let index;

        for ( let i of this.state.notes) {
          if(i['id'] === note) {
            index = newArr.indexOf(i)
          }
        }
        newArr.splice(index,1)
        this.setState(() => ({
            notes: newArr
        }))
    }
    render() {
        return (
            <React.Fragment>
                <h2>Dashboard</h2>

                <NoteCreateForm updateNote={this.updateNote} addNote={this.addNote} />

                <NoteList notesArr={this.state.notes} removeNote={this.removeNote} updateNote={this.updateNote} updateId={this.state.updateId} updateStatus={this.updateStatus} reWriteNote={this.reWriteNote} addNote={this.addNote} cancelUpdate={this.cancelUpdate} oldContent={this.oldContent}/>

            </React.Fragment>
        )
    }
}

export default Dashboard;
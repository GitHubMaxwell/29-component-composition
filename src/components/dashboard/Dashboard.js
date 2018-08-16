import React from 'react'
import NoteList from '../note-list/NoteList.js'
import NoteCreateForm from '../note-create-form/NoteCreateForm.js'
import uuidv1 from 'uuid/v1'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            note: {
                id: '',
                title: '',
                content: '',
                editing: false,
                completed: false,
            },
            notes: [],
            updateId: ''
        }
        this.addNote = this.addNote.bind(this)
        this.removeNote = this.removeNote.bind(this)
        this.updateNote = this.updateNote.bind(this)
        this.updateMode = this.updateMode.bind(this)
        this.cancelUpdate = this.cancelUpdate.bind(this)
        this.populateNoteObj = this.populateNoteObj.bind(this)
    }

    updateNote(e) {
        console.log('name',e.target.name)
        console.log('value',e.target.value)
        console.log('type',e.target.type)


        const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({note: {...this.state.note,[e.target.name] : val}})
    }

    updateMode(e) {
        let updateId = e.target.getAttribute('name')
        this.setState({
            updateId
        })
        // need to do this in a callback back in NoteUpdateForm?
        this.populateNoteObj(updateId);
    }
    cancelUpdate() {
        let id = '';
        let editing = false;
        let completed= false;
        let content= '';
        let title= '';
        let note = {...this.state.note, id, editing, completed, content, title}
        this.setState({
            note,
            updateId : ''
        })
    }

    populateNoteObj(updateId) {
        for(let note of this.state.notes) {
            if(note.id === updateId) {
                this.setState({note});
            }
        }
    }

    addNote() {
        let id;
        if(!this.state.updateId){
            id = uuidv1();
            let newNote = {...this.state.note, id}
            this.setState({notes : [...this.state.notes, newNote]})
        } else {
            id = this.state.updateId
            let newArr = this.state.notes.map( note => {
                if(note.id === this.state.updateId){
                     note = {...this.state.note,id}
                }
                return note
            })
            this.setState({
                notes : newArr,
                updateId : ''
            })
        }
    }

    removeNote(note) {
        //could [...state.notes],filter
        
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
                <NoteList notesArr={this.state.notes} removeNote={this.removeNote} updateNote={this.updateNote} updateId={this.state.updateId} updateMode={this.updateMode} addNote={this.addNote} cancelUpdate={this.cancelUpdate}/>
            </React.Fragment>
        )
    }
}
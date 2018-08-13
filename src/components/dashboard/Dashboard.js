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
                title: '',
                content: '',
                editing: false,
                completed: false,
            },
            notes: [],
            updateId: ''
        }
        this.addNote = this.addNote.bind(this)
        // this.oldContent = this.oldContent.bind(this)
        this.removeNote = this.removeNote.bind(this)
        this.updateNote = this.updateNote.bind(this)
        // this.reWriteNote = this.reWriteNote.bind(this)
        this.updateMode = this.updateMode.bind(this)
        this.cancelUpdate = this.cancelUpdate.bind(this)

        this.populateNoteObj = this.populateNoteObj.bind(this)

    }

    updateNote(e) {
        console.log(e.target.value)
        console.log(this.state.note.title)
        const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({note: {...this.state.note,[e.target.name] : val}})
    }

    updateMode(e) {
        let updateId = e.target.getAttribute('name')
        this.setState({
            updateId
        })
        // need to do this in a callback back in NoteUpdateForm?
        // setState in object form like this ISNT asynchronous so i dont think so
        // console.log('updateNote ID:',this.state.updateId)
        this.populateNoteObj(updateId);
    }
    cancelUpdate() {
        // needs to clear whatever temporary cache ive populated with content from notes array
        // set the note object back to default values (need to make a copy of note object???)
        let id = '';
        let editing = false;
        let completed= false;
        let content= '';
        let title= '';
        let note = {...this.state.note, id, editing, completed, content, title}
        this.setState({
            note,
            // note : {
            //     id: '',
            //     editing: false,
            //     completed: false,
            //     content: '',
            //     title: '',
            // },

            updateId : ''
        }, console.log())
    }
    // oldContent() {
    //     // has to be a string
    //     return 'Hello';
    // }

    //on doubleclick and the opening of the updatenote the id will be appended to the state and the NoteUpdateFrom will access that per props

    //maybe combine this with updateNote but id have to send info with it to send through a conditional in order to differentiate between the original note submission or a rewrite
    //not getting access to the 

    //rewrite this to update the values in note and then on update button press it does the for loop stuff
    populateNoteObj(updateId) {
        // this function is called on doubleclick of the LI
        // maybe move this to the updateStatus function above and rename it?
        // iterate over this.state.notes array to find the note you double clicked on 
        // then populate the note object that
        // make updates to that note object using the already mad updateNote method

        // i dont need to make a copy of the array yet
        // let notes = [...this.state.notes];
        console.log('note before pop:',this.state.note)
        console.log('updateId before pop:',updateId)

        // console.log('pop note updateId:', this.state.updateId)
        //updateId cant be scoped inside variable
        // let upId = this.state.updateId

        for(let note of this.state.notes) {
            //to spread the note open and replace a field in it
            // this.setState({note: {...this.state.note,[e.target.name] : val}})


            if(note.id === updateId) {
                //when you match the note populate the note.state.note object with the details
                // console.log('pop note if')
                this.setState({note});
                //to prevent continuing through the array
                // break;
                // console.log('note:',this.state.note)
            }
        }
        // console.log('note after for',this.state.note)
    }


    // dont think ill use this since i now have adjusted and split up the functionality between updateNote and addNote 
    // reWriteNote(e) {

    //     // let updateId = event.target.getAttribute("key")
    //     const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    //     // do i need to go up a level and spread apart notes manipulate and then rewrite to the notes
    //     // reassign the value of this.state note to equal these
    //     let notes = [...this.state.notes];
    //     // console.log(newNotes)
    //     // let targetName = e.target.name;

    //     for(let note of notes) {
    //         if(note.id === this.state.updateId) {
    //             // let targetName = e.target.name;
    //             // console.log('target name',targetName)
    //             // this.setState({
    //             //     //i think i need to break apart val and reset
    //             //     //{...this.state.note,[event.target.name] : val
    //             //     // [e.target.name] : val
    //             //     // was using event instead of e
    //             //     ...note, [e.target.name] : val
    //             // })
    //             //,()=>{console.log(note)}
    //             // needs to be an equal sign because im targeting a special position in the object in the array and reassigning its value
    //             note[e.target.name] = val
    //             // below was trying to 
    //             // note.targetName = val
    //             this.setState({notes});
    //         }
    //     }
    // }

    addNote() {

        let id;
        if(!this.state.updateId){
            console.log('addNote NEW')

            id = uuidv1();
            let newNote = {...this.state.note, id}
            this.setState({notes : [...this.state.notes, newNote]})
        } else {
            console.log('addNote Update')
            // is this making a copy / allowed in React
            // in this else im going to have to ahve another setState that directly updates the
            // check this
            id = this.state.updateId

            //dont think this is right
            // let newNote = {...this.state.note, id}
            // let newNote = {...this.state.note, id}

            // instead of this i think i need to spread notes, replace the note with the same id, and then 
            // this.setState({notes : [...this.state.notes, newNote]})
            // let notes = [...this.state.notes]

            // this for loop isnt updating anything
            // need to to an index of to get the correct

            ///////////////////////
            /*
            1. adds a whole new note to the array insted of updating the same one
            2. populate isnt populating the this.state.note

            */
            // for(let note of this.state.notes) {
            //     if(note.id === this.state.updateId) {
            //         let index = this.state.notes.indexOf(note)
            //         console.log('indexOf:',index)
            //         console.log('note at index:',{...this.state.notes[index]})
            //         let 
            //         this.setState({
            //             // do both the 
            //             notes : [...this.state.notes,{...this.state.notes[index] , ...this.state.note}]
            //         },()=>{console.log(this.state.notes)});
            //         //to prevent continuing through the array
            //         // break;
            //         // console.log('note:',this.state.note)
            //     }
            // }
            // let newArr = this.state.notes.map( note => {
            //     if(note.id === this.state.updateId){
            //         return this.setState({...this.state.note,id})
            //     }
            // })
            let newArr = this.state.notes.map( note => {
                if(note.id === this.state.updateId){
                    return note = {...this.state.note,id}
                }
                return note
            })

            console.log('newArr',newArr)

            //maybe reset updateId and the note object (like in cancel)

            this.setState({
                notes : newArr,
                updateId : ''
            })

            // this.setState({notes},()=>{console.log(this.state.notes)})
        }
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
                <NoteList notesArr={this.state.notes} removeNote={this.removeNote} updateNote={this.updateNote} updateId={this.state.updateId} updateMode={this.updateMode} addNote={this.addNote} cancelUpdate={this.cancelUpdate}/>
            </React.Fragment>
        )
    }
}
export default Dashboard;
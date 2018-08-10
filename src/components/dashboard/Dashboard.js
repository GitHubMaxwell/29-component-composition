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
            notes: []
        }
        this.addNote = this.addNote.bind(this)
        this.removeNote = this.removeNote.bind(this)
        // this.updateTitle = this.updateTitle.bind(this)
        // this.updateContent = this.updateContent.bind(this)
        this.updateState = this.updateState.bind(this)

    }

    updateState(event) {
        // add "name" attributes to all the input values that match the key names here in the state

        // let id = '';
        // let completed = false;
        // let editing= true;
        // let title = event;
        // console.log('updateState')

        // console.log('type',event.target.type)

        //first check what event type and store value in variable
        // had event.target.type === 'checked' instead of checkbox
        const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        // console.log('val',val)
        // console.log('event.target',event.target)
        // console.log('type',event.target.type)



        //dynamically target the state's key name and value
        // directly making changes to state
        // cant do here i have to make a copy of the state and apply the change to that
        // const changedState = {
        //     [event.target.name] : val
        // }

        //pass the state change to setState function
        // this.setState({...this.state, note: {...this.state.note,[event.target.name] : val}})

        this.setState({note: {...this.state.note,[event.target.name] : val}})

        // this.setState(
        //     {...this.state, note: {...this.state.note, title, editing, id, completed}}
        // )
    }

    //adjusted the below two into the dynamic one above

    // updateTitle(event) {
    //     let id = '';
    //     let completed = false;
    //     let editing= true;
    //     let title = event;

    //     this.setState(
    //         {...this.state, note: {...this.state.note, title, editing, id, completed}}
    //     )
    // }

    // updateContent(event) {
    //     let id = '';
    //     let completed = false;
    //     let editing= true;
    //     let content = event;

    //     this.setState(
    //         {...this.state, note: {...this.state.note, content, editing, id, completed}}
    //     )
    // }

    addNote() {
        //dont want to use the current one / make a copy and manipulate that
        let id = uuidv1();
        // let completed = true;
        // let editing= false;
        let newNote = {...this.state.note, id}
        //add the new note into our array


        // this.setState(

            // {...this.state, 
            // note: {...this.state.note, id, editing, completed}, 
            // notes : this.state.notes.push(this.state.note)}, () => {console.log(this.state)}
            // not push because push returns the length value
            // we dont want to 
        // )

        // want all the old array
        // first argument is always previous state and second argument is props?? and you can name them whatever
        // have to put in return and wrap in curly braces
        // setState expects an object so the goal of the function should be to reutrn an object
        // setState can take a CB (a console log if you want to grab the exact state at the time of setting) as a second argument 
        // this.setState((prevState) => {
        //     return {notes : [...prevState.notes, newNote]}
        // }, () => console.log(this.state))
        //the below is equivalent
        this.setState({notes : [...this.state.notes, newNote]})
    }

    removeNote(note) {
        // removes a note from state.notes based on its id
        // might not have to do note.id but just note
        // console.log('removeNote')
        let newArr = [...this.state.notes]

        let index;
        // console.log('index',index)

        for ( let i of this.state.notes) {
          if(i['id'] === note) {
            index = newArr.indexOf(i)
            // index = this.state.notes.indexOf(i)
          }
        }
        // console.log('INDEX',index)

        // let notes = this.state.notes.splice(index, 1)
        // let notes = this.state.notes.splice(0, note)
        // let newArr = this.state.notes.splice(index, 1)
        newArr.splice(index,1)
        // console.log('newArr',newArr)

        // console.log('SPLICE',notes)

        // this.setState((prevState) => {
        //     return {notes : [...prevState.notes, newNote]}
        // }, () => console.log(this.state))

        this.setState(() => ({
            notes: newArr
        }))
          

        // this.setState({
        //     notes
        // })
        // console.log('DELETE after',notes)

    }
    render() {
        return (
            <React.Fragment>
                <h2>Dashboard</h2>
                <NoteCreateForm updateState={this.updateState} updateContent={this.updateContent} updateTitle={this.updateTitle} addNote={this.addNote} />

                <NoteList notesArr={this.state.notes} removeNote={this.removeNote} updateContent={this.updateContent}/>
            </React.Fragment>
        )
    }
}

export default Dashboard;
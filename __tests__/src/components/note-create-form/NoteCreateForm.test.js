// Test your onChange handler
// Test your onSubmit handler
import React from 'react'
// import renderer from 'react-test-renderer';
// import NoteCreateForm from '../../../../src/components/note-create-form/NoteCreateForm.js'
import Dashboard from '../../../../src/components/dashboard/Dashboard.js'


xdescribe('NoteCreateForm', () => {
    it('Test - POL render NoteCreateForm', ()=> {
    //    shallow(<NoteCreateForm/>)
       shallow(<Dashboard/>)

    })

    it('Test - NoteCreateForm onChange Handler', ()=> {
        // because the state is held in Dashboard and the NoteCreateForm onChange is an interaction between two components im going to have to shallow load Dashboard, access the NoteCreateForm component there, utilize the props ON/that are being passed to the NoteCreateForm
        const e = {
            target : {
                name : "title",
                value : "CHANGE",
                type : "text",
            }
        }
        //checking if the state in Dashboard is empty or not 
        // const wrapper = shallow(<NoteCreateForm/>);
        const dashboard = shallow(<Dashboard/>)
        // const wrapper = shallow(<NoteCreateForm updateNote={this.updateNote} addNote={this.addNote}/>);
        const noteCreateForm = dashboard.find('NoteCreateForm').first()
        noteCreateForm.props().updateNote(e)

        // NoteCreateForm updateNote={this.updateNote} addNote={this.addNote}
        // const instance = wrapper.instance();
        // wrong way to do target
        // you have to write it like its the event object so you have to add the name attribute by which the updateNote function in Dashboard checks, then add the user input in the "value" field, and give the value type = "text" as opposed to "checkbox"

        // const event = {
        //     target : {
        //         title : "title",
        //         content : "content",
        //         editing : "true",
        //         completed : "false"
        //     }
        // }
        //not onChange??
        // might have to be actual function handleChange
        // instance.onChange(event);
        // instance.handleChange(e);


        //maybe instead have to not target wrapper.state but a new wrapper thats the Dashboard because thats where the state is held
        //  expect(wrapper.state().note.title).toBe("TTTTT");

        expect(dashboard.state().note.title).toBe("CHANGE");
        // so that we can see if the 
        expect(dashboard.state().note.id).toBeDefined();

    })

    it('Test - NoteCreateForm onSubmit Handler', ()=> {
        // specifically the id is present
        const e = {
            target : {
                name : "title",
                value : "SUBMIT",
                type : "text",
            }
        }
        const dashboard = shallow(<Dashboard/>)
        const noteCreateForm = dashboard.find('NoteCreateForm').first()
        noteCreateForm.props().updateNote(e)
        noteCreateForm.props().addNote()

        expect(dashboard.state().note.title).toBe("SUBMIT");
        expect(dashboard.state().note.id).toBeDefined();

        expect(dashboard.state().notes.length).toBe(1);
        expect(dashboard.state().notes[0].title).toBe("SUBMIT");
        expect(dashboard.state().notes[0].id).toBeDefined();
    })
})
// Test the NoteUpdatesForm's ability to update a note in the App's state

import React from 'react'
// import renderer from 'react-test-renderer';
import NoteUpdateForm from '../../../../src/components/note-update-form/NoteUpdateForm'
import Dashboard from '../../../../src/components/dashboard/Dashboard.js'
import NoteItem from '../../../../src/components/note-item/NoteItem'



describe('NoteUpdateForm', () => {
    let dashboard;
    let dashInstance;

    beforeEach(() => {
        dashboard = shallow(<Dashboard/>)
        dashInstance = dashboard.instance()
    });

    it('Test - POL render NoteUpdateForm', ()=> {
       shallow(<NoteUpdateForm/>)
    //    expect(wrapper).toExist()
    })

    it('Test - should UPDATE a note from from the Dashboard\'s state', ()=> {

        const e = {
            target : {
                name : "title",
                value : "UPDATE",
                type : "text",
            }
        }
        // console.log('NOTES ARRAY: ',dashInstance.state.notes)
        const noteCreateForm = dashboard.find('NoteCreateForm').first()
        noteCreateForm.props().updateNote(e)
        noteCreateForm.props().addNote()
        // console.log('NOTES ARRAY: ',dashInstance.state.notes)

        //test to make sure the notes array has the new item that we will remove
        expect(dashboard.state().note.title).toBe("UPDATE");
        expect(dashboard.state().note.id).toBeDefined();
        expect(dashboard.state().notes.length).toBe(1);
        expect(dashboard.state().notes[0].title).toBe("UPDATE");

        const noteItem = shallow(<NoteItem removeNote={dashInstance.removeNote} updateNote={dashInstance.updateNote} notesArr={dashInstance.state.notes}/>)
        //now item instance has the notes array notesArr as a props to access
        // const itemInstance = noteItem.instance();

        // console.log(noteItem.find('li').html());

        /////////
        const noteUpdate= shallow(<NoteUpdateForm updateMode={dashInstance.updateMode} updateNote={dashInstance.updateNote} addNote={dashInstance.addNote} notesArr={dashInstance.state.notes}/>)
        //now item instance has the notes array notesArr as a props to access
        const updateInstance = noteUpdate.instance();

        //after target this name property needs to be inside an "Attribute" object

        // const mode = noteItem.find('li').html();
        const mode = {
            // have to send it the LI html
            target : {
                id : dashboard.state().notes[0].id,
            }
        }
        
        const event = {
            target : {
                name : "title",
                value : "NEW",
                type : "text",
            }
        }
        // remember to put .props to access the method
        updateInstance.props.updateMode(mode)
        updateInstance.props.updateNote(event)
        updateInstance.props.addNote()
        // console.log('Note: ',dashboard.state().note.title)
        // console.log('Note: ',dashboard.state().notes[0])

        expect(dashboard.state().notes[0].title).toBe('NEW');
        expect(dashboard.state().notes.length).toBe(1);
    })
})
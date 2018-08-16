// Test the NoteUpdatesForm's ability to update a note in the App's state

import React from 'react'
import NoteUpdateForm from '../../../../src/components/note-update-form/NoteUpdateForm'
import Dashboard from '../../../../src/components/dashboard/Dashboard.js'


describe('NoteUpdateForm', () => {
    let dashboard;
    let dashInstance;

    beforeEach(() => {
        dashboard = shallow(<Dashboard/>)
        dashInstance = dashboard.instance()
    });

    it('Test - POL render NoteUpdateForm', ()=> {
       shallow(<NoteUpdateForm/>)
    })

    it('Test - should UPDATE a note from from the Dashboard\'s state', ()=> {

        const e = {
            target : {
                name : "title",
                value : "UPDATE",
                type : "text",
            }
        }
        const noteCreateForm = dashboard.find('NoteCreateForm').first()
        noteCreateForm.props().updateNote(e)
        noteCreateForm.props().addNote()

        expect(dashboard.state().note.title).toBe("UPDATE");
        expect(dashboard.state().note.id).toBeDefined();
        expect(dashboard.state().notes.length).toBe(1);
        expect(dashboard.state().notes[0].title).toBe("UPDATE");

        const noteUpdate= shallow(<NoteUpdateForm updateMode={dashInstance.updateMode} updateNote={dashInstance.updateNote} addNote={dashInstance.addNote} notesArr={dashInstance.state.notes}/>)
        const updateInstance = noteUpdate.instance();

        const mode = {
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
        updateInstance.props.updateMode(mode)
        updateInstance.props.updateNote(event)
        updateInstance.props.addNote()

        expect(dashboard.state().notes[0].title).toBe('NEW');
        expect(dashboard.state().notes.length).toBe(1);
    })
})
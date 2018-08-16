// Test the NoteItem's ability to REMOVE a note from the App's state

import React from 'react'
import NoteItem from '../../../../src/components/note-item/NoteItem'
import Dashboard from '../../../../src/components/dashboard/Dashboard.js'

describe('NoteItem', () => {
    let dashboard;
    let dashInstance;

    beforeEach(() => {
        dashboard = shallow(<Dashboard/>)
        dashInstance = dashboard.instance()
    });

    it('Test - POL render NoteItem', ()=> {
       shallow(<NoteItem notesArr={dashInstance.state.notes}/>)
    })

   it('Test - should REMOVE a note from from the Dashboard\'s state', ()=> {

        const e = {
            target : {
                name : "title",
                value : "REMOVE",
                type : "text",
            }
        }
        const noteCreateForm = dashboard.find('NoteCreateForm').first()
        noteCreateForm.props().updateNote(e)
        noteCreateForm.props().addNote()

        expect(dashboard.state().note.title).toBe("REMOVE");
        expect(dashboard.state().note.id).toBeDefined();
        expect(dashboard.state().notes.length).toBe(1);
        expect(dashboard.state().notes[0].title).toBe("REMOVE");

        const noteItem = shallow(<NoteItem removeNote={dashInstance.removeNote} updateNote={dashInstance.updateNote} notesArr={dashInstance.state.notes}/>)
        const itemInstance = noteItem.instance();

        // const event = {
        //     target : {
        //         name : dashboard.state().notes[0].id
        //     }
        // }
        
        itemInstance.props.removeNote(dashboard.state().notes[0].id)
        expect(dashboard.state().notes.length).toBe(0);
    })
})
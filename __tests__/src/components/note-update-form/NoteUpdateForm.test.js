// Test the NoteUpdatesForm's ability to update a note in the App's state

import React from 'react'
// import renderer from 'react-test-renderer';
import NoteUpdateForm from '../../../../src/components/note-update-form/NoteUpdateForm'
import Dashboard from '../../../../src/components/dashboard/Dashboard.js'


xdescribe('NoteUpdateForm', () => {
    it('Test - POL render NoteUpdateForm', ()=> {
       shallow(<NoteUpdateForm/>)
    //    expect(wrapper).toExist()
    })

    it('Test - should UPDATE pdate note in the Dasboard\'s state', ()=> {
        // have to enter note into Dashboard note > then submit into notes array
        // target notes[0].id and make an update
        const e = {
            target : {
                name : "title",
                value : "UPDATE",
                type : "text",
            }
        }
        const dashboard = shallow(<Dashboard/>)
        const noteCreateForm = dashboard.find('NoteCreateForm').first()
        noteCreateForm.props().updateNote(e)
        noteCreateForm.props().addNote()

    })
})
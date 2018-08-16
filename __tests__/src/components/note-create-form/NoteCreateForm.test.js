// Test your onChange handler
// Test your onSubmit handler
import React from 'react'
// import renderer from 'react-test-renderer';
// import NoteCreateForm from '../../../../src/components/note-create-form/NoteCreateForm.js'
import Dashboard from '../../../../src/components/dashboard/Dashboard.js'


describe('NoteCreateForm', () => {
    it('Test - POL render NoteCreateForm', ()=> {
       shallow(<Dashboard/>)

    })

    it('Test - NoteCreateForm onChange Handler', ()=> {
        const e = {
            target : {
                name : "title",
                value : "CHANGE",
                type : "text",
            }
        }
        const dashboard = shallow(<Dashboard/>)
        const noteCreateForm = dashboard.find('NoteCreateForm').first()
        noteCreateForm.props().updateNote(e)

        expect(dashboard.state().note.title).toBe("CHANGE");
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
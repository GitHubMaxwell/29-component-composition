// Test the NoteItem's ability to REMOVE a note from the App's state

// what are the steps that have to be taken adn then information transferred/mutated between those steps to accomplish removing an item
//need to import all the way from App, Dashboard

import React from 'react'
import NoteItem from '../../../../src/components/note-item/NoteItem'
import NoteList from '../../../../src/components/note-list/NoteList'
import Dashboard from '../../../../src/components/dashboard/Dashboard.js'
// do i need NoteList ?


describe('NoteItem', () => {
    let dashboard;
    let dashInstance;

    beforeEach(() => {
        dashboard = shallow(<Dashboard/>)
        dashInstance = dashboard.instance()
    });

    xit('Test - POL render NoteItem', ()=> {
       shallow(<NoteItem/>)
    })

    xit('Test - should REMOVE a note from from the Dashboard\'s state', ()=> {
        // make a fake state holding an object with the correct data shape
        // whats the info i need to remove it - the id
        // what method is fired from what component carrying that data
        // first put something in the Dashboard state notes array to be removed with the submit
        // then use state(Dashboard) to access the state (specifically the notes[0].id 
        // and apply the remove 

        const e = {
            target : {
                name : "title",
                value : "REMOVE",
                type : "text",
            }
        }

        const dashboard = shallow(<Dashboard/>)
        const noteCreateForm = dashboard.find('NoteCreateForm').first()
        const noteList = dashboard.find('NoteList').first()

        // can i derive noteItem from noteList
        // const noteItem = noteList.find('NoteItem').first();

        // console.log('noteList', noteList)
        // console.log('noteItem', noteItem)


        noteCreateForm.props().updateNote(e)
        noteCreateForm.props().addNote()

        const noteItem = noteList.find('li').html;
        // const noteItem = dashboard.state().notes[0];
        const noteId = dashboard.state().notes[0].id;
        // console.log('dashboard', dashboard)
        // console.log('noteList child', noteList.find('li')[0])

        console.log('noteItem', noteItem)
        // console.log('noteId', noteId)
        // expect(dashboard.state().note.title).toBe("REMOVE");
        // expect(dashboard.state().note.id).toBeDefined();
        // expect(dashboard.state().notes.length).toBe(1);
        // expect(dashboard.state().notes[0].title).toBe("REMOVE");
        expect(dashboard.state().notes[0].id).toBeDefined();

        //not props but an attribute maybe
        noteItem.props().removeItem(noteId)
        // expect(dashboard.state().notes[0].title).toBe("REMOVE");
        expect(dashboard.state().notes[0].id).not.toBeDefined();
    })




    it('Test - should REMOVE a note from from the Dashboard\'s state', ()=> {
        //shallow render wont render the list so i cant access it without calling shallow() on NoteList and NoteItem?

        const e = {
            target : {
                name : "title",
                value : "REMOVE",
                type : "text",
            }
        }
        // console.log('NOTES ARRAY: ',dashInstance.state.notes)
        const noteCreateForm = dashboard.find('NoteCreateForm').first()
        noteCreateForm.props().updateNote(e)
        noteCreateForm.props().addNote()
        // console.log('NOTES ARRAY: ',dashInstance.state.notes)

        //test to make sure the notes array has the new item that we will remove
        expect(dashboard.state().note.title).toBe("REMOVE");
        expect(dashboard.state().note.id).toBeDefined();
        expect(dashboard.state().notes.length).toBe(1);
        expect(dashboard.state().notes[0].title).toBe("REMOVE");

        const noteItem = shallow(<NoteItem removeNote={dashInstance.removeNote} updateNote={dashInstance.updateNote} notesArr={dashInstance.state.notes}/>)
        //now item instance has the notes array notesArr as a props to access
        const itemInstance = noteItem.instance();
        const event = {
            target : {
                name : dashboard.state().notes[0].id
            }
        }
        // remember to put .props to access the method
        itemInstance.props.removeNote(event)
        // final test to see that item was removed
        expect(dashboard.state().notes.length).toBe();
    })
})
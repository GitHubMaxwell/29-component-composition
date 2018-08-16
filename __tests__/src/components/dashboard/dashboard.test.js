import React from 'react'
import Dashboard from '../../../../src/components/dashboard/Dashboard.js'


describe('Dashboard', () => {
    it('Test - POL render Dashboard', ()=> {
       shallow(<Dashboard/>)
    })
    it('Test - Dashboard Children exist', ()=> {
           const wrapper = shallow(<Dashboard/>)
           //Jest doesnt support toExist() anymore according to docs its toBeTruthy()
           expect(wrapper.find("NoteCreateForm")).toBeTruthy()
           expect(wrapper.find("NoteList")).toBeTruthy()
    })
    it('Test - Dashboard updateNote Handler (initiated by the ', ()=> {

        const wrapper = shallow(<Dashboard/>);
        const instance = wrapper.instance();
        const e = {
            target : {
                name : "title",
                value : "TTTTT",
                type : "text",
            }
        }
        instance.updateNote(e);
        // console.log(wrapper.state().note.title)
        expect(wrapper.state().note.title).toBe("TTTTT");
    })

})
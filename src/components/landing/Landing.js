// The Landing component should display a brief description of the notes app
import React from 'react'

class Landing extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <React.Fragment>
                <h2>Landing</h2>
                <p>This is a ToDo app. Please select "Dashboard" from the menu above to navigate to the main UI. From there, add, update, and remove notes at will. To update, double click the note to open update mode per that note. Enjoy </p>
            </React.Fragment>
        )
    }
}

export default Landing;
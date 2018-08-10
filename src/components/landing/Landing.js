import React from 'react'

// The Landing component should display a brief description of the notes app

class Landing extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <React.Fragment>
                <h2>Landing</h2>
                <p>Should display a brief description of the notes app.</p>
            </React.Fragment>
        )
    }
}

export default Landing;
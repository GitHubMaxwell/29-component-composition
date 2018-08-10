import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Landing from '../landing/Landing.js'
import Dashboard from '../dashboard/Dashboard.js'
import '../../style/main.scss'

/*
    The App component should manage the frontend routes and have a navbar
    the / route should display the Landing component
    the /dashboard route should display the Dashboard component

*/
class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <main>
                        <nav>
                            <ul className="navbar">
                                <li className="navitem"><Link to={'/'}>Home</Link></li>
                                <li className="navitem"><Link to={'/dashboard'}>Dashboard</Link></li>
                            </ul>
                            <h2>Testing Enzyme</h2>
                        </nav>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/dashboard" component={Dashboard} />
                    </main>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default App;
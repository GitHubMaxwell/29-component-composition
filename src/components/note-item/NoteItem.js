import React from 'react';

export default class NoteItem extends React.Component {
    constructor(props) {
        super(props)
        this.removeItem = this.removeItem.bind(this)
        this.editView = this.editView.bind(this)
    }
    removeItem(e) {
        // e.preventDefault();
        let id = e.target.name
        this.props.removeNote(id);
    }
    editView(e) {
        this.props.updateMode(e)
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.notesArr.map((note) =>
                        <li className="note" name={note.id} id={note.id} key={note.id} onDoubleClick={this.editView}>
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                            <input type="button" onClick={this.removeItem} name={note.id} value="delete"/>
                            {this.props.updateId === note.id && this.props.children}
                        </li>
                    )
                }
            </React.Fragment>
        )
    }
}
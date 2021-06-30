import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Notes from './Notes'
import fetchNotes from '../actions/fetchNotes'

class NotesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchNotes()
    }

    render() {
        return (
            <>
                <Switch>
                    <Route path="/notes/new">
                        <NoteForm />
                    </Route>
                    <Route path="/notes">
                        <Notes />
                    </Route>
                </Switch>
            </>
        )
    }

}

export default connect(null, {fetchNotes})(NotesContainer)
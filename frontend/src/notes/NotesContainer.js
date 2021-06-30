import React from 'react'
import {Route, Switch} from 'react-router-dom'
import NoteForm from './NoteForm'

class NotesContainer extends React.Component {

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

export default NotesContainer
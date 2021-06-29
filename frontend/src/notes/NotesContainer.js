import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

class NotesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchNotes()
    }

    render() {
        return (
            <>
                <Switch>
                    <Route path="/notes">
                        <Notes />
                    </Route>
                </Switch>
            </>
        )
    }

}

export default connect()(NotesContainer)
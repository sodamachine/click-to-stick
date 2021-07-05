import {Link} from 'react-router-dom'

export default function NavBar(props) {
    return (
    <>
        <Link to="/notes">All Notes</Link>
        <Link to="/notes/new">New Note</Link>
    </>
    )
}
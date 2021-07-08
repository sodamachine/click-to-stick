import {Link} from 'react-router-dom'

export default function NavBar(props) {
    return (
    <>
    <div className="navbar">
        <Link to="/notes">All Notes</Link>
        <Link to="/notes/new">New Note</Link>
        <Link to="/notes/trash">Trash</Link>
    </div>
    </>
    )
}
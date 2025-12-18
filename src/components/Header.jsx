import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-light">
            <nav className="navbar navbar-light" >
                <div className="container">
                    <NavLink to='/'>
                        <img src="/Bool-road.png" alt="Bool Road" style={{ height: "150px" }} />
                    </NavLink>
                    <NavLink className='nav-link active text-warning' to='/'><h4>Home</h4></NavLink>
                </div>
            </nav>
        </header>
    )
}
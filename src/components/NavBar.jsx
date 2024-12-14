import { NavLink } from "react-router-dom"
const NavBar = () => {
    return (<div>
        <NavLink className={({ isActive }) => isActive ? 'text-red-500' : ''
        } to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-red-500' : ''
        } to='/about'>About</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-red-500' : ''
        } to='/posts'>Posts</NavLink>
    </div>)
}

export default NavBar
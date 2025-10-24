import { NavLink } from "react-router";




export function Header() {
    return (
        <div className="h-13 bg-amber-200 flex justify-between items-center pl-20 pr-20" >
            <h2>my react app</h2>
            <ul className="flex gap-2">
                <NavLink to="/register">
                    register
                </NavLink>
                <NavLink to="/login">
                    login
                </NavLink>
            </ul>
        </div>
    )
}
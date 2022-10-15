import {Link} from "react-router-dom";

export const Menu = () => {

    return (
        <ul>
            <li>
                <Link to="/">Portfolio Page</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/posts">Posts Page</Link>
            </li>
        </ul>
    )
}
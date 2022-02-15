import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Simple Notes</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All notes</Link>
                    </li>
                    <li>
                        <Link to="/new-note">Create new note</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;

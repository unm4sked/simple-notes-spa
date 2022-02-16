import { Link } from "react-router-dom";
import classes from "./NoteItem.module.css";
import Card from "../ui/Card";

function NoteItem(props) {
    if (props.id) {
        return (
            <li className={classes.item}>
                <Card>
                    <div className={classes.content}>
                        <h3>{props.title}</h3>
                        <p>created: {props.createdAt}</p>
                    </div>
                    <div className={classes.actions}>
                        <Link to={`/note/${props.id}`} state={{ id: props.id }}>
                            <button>Show full note</button>
                        </Link>
                    </div>
                </Card>
            </li>
        );
    } else {
        return (
            <li className={classes.item}>
                <Card>
                    <div className={classes.content}>
                        <h3>{props.title}</h3>
                        <p>{props.createdAt}</p>
                    </div>
                </Card>
            </li>
        );
    }
}

export default NoteItem;

import classes from "./NoteItem.module.css";
import Card from "../ui/Card";

function NoteItem(props) {
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

export default NoteItem;

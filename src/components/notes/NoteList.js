import NoteItem from "./NoteItem";
import classes from "./NoteList.module.css";

function NoteList(props) {
    return (
        <ul className={classes.list}>
            {props.notes.map((note) => (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    createdAt={note.createdAt}
                />
            ))}
        </ul>
    );
}

export default NoteList;

import NoteItem from "./NoteItem";
import classes from "./NoteList.module.css";
import { toReadFormat } from "../../shared/date";

function NoteList(props) {
    const data = props.notes.length
        ? props.notes
        : [
              {
                  attributes: {
                      title: "No note found ¯\\_( ͡° ͜ʖ ͡°)_/¯",
                      createdAt: new Date().toISOString(),
                  },
              },
          ];

    return (
        <ul className={classes.list}>
            {data.map((note) => (
                <NoteItem
                    key={note.attributes.id}
                    id={note.attributes.id}
                    title={note.attributes.title}
                    createdAt={toReadFormat(note.attributes.createdAt)}
                />
            ))}
        </ul>
    );
}

export default NoteList;

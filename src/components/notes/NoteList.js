import { DateTime } from "luxon";
import NoteItem from "./NoteItem";
import classes from "./NoteList.module.css";

function NoteList(props) {
    const data = props.notes.length ? props.notes : [
              {
                  attributes: {
                      id: "1",
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
                    createdAt={DateTime.fromISO(note.attributes.createdAt).toFormat("DD HH:mm:ss")}
                />
            ))}
        </ul>
    );
}

export default NoteList;

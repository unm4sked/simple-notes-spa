import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewNoteForm.module.css";

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const textInputRef = useRef();
    const passwordInputRef = useRef();
    const expirationDateInputRef = useRef();

    const submitNoteHandler = (event) => {
        event.preventDefault();
        const title = titleInputRef.current.value;
        const text = textInputRef.current.value;
        const password = passwordInputRef.current.value;
        const expirationDate = expirationDateInputRef.current.value || undefined;

        const noteData = {
            title,
            text,
            password,
            expirationDate,
        };

        props.onAddNote(noteData)
    };

    return (
        <Card>
            <form className={classes.form} onSubmit={submitNoteHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Note Title</label>
                    <input
                        type="text"
                        required
                        id="title"
                        ref={titleInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="text">Note content</label>
                    <textarea rows="5" required id="text" ref={textInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        required
                        id="password"
                        ref={passwordInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="expirationDate">Expired at</label>
                    <input type="datetime-local" id="expirationDate" ref={expirationDateInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Add</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;

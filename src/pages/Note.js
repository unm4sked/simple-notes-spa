import axios from "axios";
import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";

import Card from "../components/ui/Card";
import classes from "../components/notes/NewNoteForm.module.css";
import FullNote from "../components/notes/FullNote";
import Error from "../components/ui/Error";
import { mapHttpError } from "../shared/error";

function NotePage() {
    const notePasswordRef = useRef();
    const location = useLocation();
    const [fetchedNote, setFetchedNote] = useState({});
    const [isFetched, setIsFetched] = useState(false);
    const [error, setError] = useState({ appears: false });

    const noteId = location.pathname.split("/")[2];

    const submitPasswordHandler = (event) => {
        event.preventDefault();

        const password = `${notePasswordRef.current.value}`;
        axios
            .get(`${process.env.REACT_APP_API_URL}/notes/${noteId}`, {
                headers: { authorization: password },
            })
            .then((response) => {
                setFetchedNote({ ...response.data.data, password });
                setIsFetched(true);
            })
            .catch((err) => {
                setError(mapHttpError(err));
            });
    };

    if (error.appears) {
        return <Error data={error}></Error>;
    }

    if (isFetched) {
        return <FullNote note={fetchedNote} />;
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitPasswordHandler}>
                <div className={classes.control}>
                    <label htmlFor="password">Provide note password</label>
                    <input
                        type="password"
                        required
                        id="password"
                        ref={notePasswordRef}
                        placeholder="Note password..."
                    />
                </div>
                <div className={classes.actions}>
                    <button>Submit</button>
                </div>
            </form>
        </Card>
    );
}
export default NotePage;

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import NewMeetupForm from "../components/notes/NewNoteForm";
import Error from "../components/ui/Error";
import { mapHttpError } from "../shared/error";

function NewNotePage() {
    const navigate = useNavigate();
    const [error, setError] = useState({ appears: false });

    const addNoteHandler = (noteData) => {
        axios
            .post(`${process.env.REACT_APP_API_URL}/notes`, noteData, {
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => console.log(res))
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                setError(mapHttpError(err));
            });
    };

    if (error.appears) {
        return <Error data={error}></Error>;
    }
    return (
        <section>
            <h1>Add new note</h1>
            <NewMeetupForm onAddNote={addNoteHandler} />
        </section>
    );
}
export default NewNotePage;

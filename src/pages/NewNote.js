import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/notes/NewNoteForm";
import axios from "axios";

function NewNotePage() {
    const navigate = useNavigate();

    const addNoteHandler = (noteData) => {
        axios
            .post(`${process.env.REACT_APP_API_URL}/notes`, noteData, {
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => console.log(res))
            .then(() => {
                navigate("/");
            })
            .catch((e) => console.log(e));
    };

    return (
        <section>
            <h1>Add new note</h1>
            <NewMeetupForm onAddNote={addNoteHandler} />
        </section>
    );
}
export default NewNotePage;

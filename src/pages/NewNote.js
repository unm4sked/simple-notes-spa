import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/notes/NewNoteForm";
import axios from "axios";

function NewNotePage() {
    const navigate = useNavigate();

    const addNoteHandler = (noteData) => {
        axios
            .post("http://localhost:4040/dev/notes", noteData, {
                headers: { "Content-Type": "application/json",  },
            })
            .then((res) => console.log(res))
            .then(() => {navigate("/")});
    };

    return (
        <section>
            <h1>Add new note</h1>
            <NewMeetupForm onAddNote={addNoteHandler} />
        </section>
    );
}
export default NewNotePage;

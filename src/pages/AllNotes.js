import { useState, useEffect } from "react";
import axios from "axios";
import NoteList from "../components/notes/NoteList";

function AllNotesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedNotes, setFetchedNotes] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`${process.env.REACT_APP_API_URL}/notes`)
            .then((response) => {
                return response.data.data;
            })
            .then((data) => {
                setIsLoading(false);
                setFetchedNotes(data);
            })
            .catch((e) => console.log(e));
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    } else {
        return (
            <section>
                <h1>All notes</h1>
                <NoteList notes={fetchedNotes} />
            </section>
        );
    }
}

export default AllNotesPage;

import { useState, useEffect } from "react";
import axios from "axios";

import NoteList from "../components/notes/NoteList";
import Error from "../components/ui/Error";
import { mapHttpError } from "../shared/error";

function AllNotesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedNotes, setFetchedNotes] = useState([]);
    const [error, setError] = useState({ appears: false });

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
            .catch((err) => {
                setError(mapHttpError(err));
            });
    }, []);

    if (error.appears) {
        return <Error data={error}></Error>;
    }

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

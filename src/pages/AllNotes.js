import NoteList from "../components/notes/NoteList";

const data = [
    { id: "1", title: "Title1", createdAt: new Date().toISOString() },
    { id: "2", title: "Title2", createdAt: new Date().toISOString() },
    { id: "3", title: "Title3", createdAt: new Date().toISOString() },
];

function AllNotesPage() {
    return (
        <section>
            <h1>All notes</h1>
            <NoteList notes={data} />
        </section>
    );
}

export default AllNotesPage;

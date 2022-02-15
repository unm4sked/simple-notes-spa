import * as React from "react";
import { Routes, Route } from "react-router-dom";

import AllNotesPage from "./pages/AllNotes";
import NotePage from "./pages/Note";
import NewNotePage from "./pages/NewNote";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<AllNotesPage />} />
                <Route path="/note" element={<NotePage />} />
                <Route path="/new-note" element={<NewNotePage />} />
            </Routes>
        </Layout>
    );
}

export default App;

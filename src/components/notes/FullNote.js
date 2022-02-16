import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";

import classes from "./FullNote.module.css";
import { toReadFormat } from "../../shared/date";
import Card from "../ui/Card";
import { mapHttpError } from "../../shared/error";
import Error from "../../components/ui/Error";

function FullNote(props) {
    const [error, setError] = useState({ appears: false });

    const password = props.note.password;
    const note = {
        ...props.note.attributes,
        expirationDate: toReadFormat(props.note.attributes.expirationDate),
        createdAt: toReadFormat(props.note.attributes.createdAt),
        updatedAt: toReadFormat(props.note.attributes.updatedAt),
    };

    const downloandMarkdownHandler = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/notes/${note.id}/markdown`, {
                headers: { authorization: password },
            })
            .then((response) => {
                console.log(response);
                return response.data.data;
            })
            .then((data) => {
                window.location.href = data.attributes.url;
            })
            .catch((err) => {
                setError(mapHttpError(err));
            });
    };

    if (error.appears) {
        return <Error data={error}></Error>;
    }

    return (
        <Card>
            <div className={classes.form}>
                <Typography variant="h1">{note.title}</Typography>
                <Typography variant="h6">(ID: {note.id})</Typography>

                <Typography variant="body1">{note.text}</Typography>

                <Typography variant="caption">
                    <div>Created at: {note.createdAt}</div>
                </Typography>
                <Typography variant="caption">
                    <div>Created at: {note.expirationDate}</div>
                </Typography>
                <Typography variant="caption">
                    <div>Last updated: {note.updatedAt}</div>
                </Typography>
                <div className={classes.actions}>
                    <button className="btn" onClick={downloandMarkdownHandler}>
                        Downloand markdown
                    </button>
                </div>
            </div>
        </Card>
    );
}

export default FullNote;

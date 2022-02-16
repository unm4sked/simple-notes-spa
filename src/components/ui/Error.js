import classes from "./Error.module.css";
function Error(props) {
    console.log(props.data);
    return (
        <div className={classes.content}>
            <div>
                <h1>Error {props.data.status}</h1>
            </div>
            <div>
                <h2>
                    {props.data.messages.map((message) => (
                        <ul>{message}</ul>
                    ))}
                </h2>
            </div>
        </div>
    );
}

export default Error;

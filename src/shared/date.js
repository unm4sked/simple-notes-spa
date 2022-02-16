import { DateTime } from "luxon";

export const toReadFormat = (date) =>
    DateTime.fromISO(date).toFormat(
        "DD HH:mm:ss"
    );

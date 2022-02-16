export const mapHttpError = (err) => ({
    appears: true,
    status: err.response.status || 500,
    messages: err.response.data?.errors?.map((err) => err.message) || [
        "Unknown error",
    ],
});

module.exports = async function (context, req) {
    context.log(`x-ms-client-principal-name: ${req.headers['x-ms-client-principal-name']}`);

    const user_id = req.headers['x-ms-client-principal-name'];

    if (user_id == null && (req.body == null || req.body.id == null)) {
        context.res = {
            status: 400,
            body: `login or enter id`,
        };
        return;
    }

    if (req.body == null || req.body.text == null) {
        context.res = {
            status: 400,
            body: `missing text`,
        };
        return;
    }

    

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
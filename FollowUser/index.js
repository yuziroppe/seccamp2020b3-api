module.exports = async function (context, req) {
    context.log(`x-ms-client-principal-name: ${req.headers['x-ms-client-principal-name']}`);

    if (req.headers['x-ms-client-principal-name'] == null) {
        context.res = {
            status: 403,
        };
        return;
    }

    if (req.body == null || req.body.follow_id == null) {
        context.res = {
            status: 400,
            body: `missing follow id`,
        };
        return;
    }

    console.log(req.headers)
    const user_id = req.headers['x-ms-client-principal-name'];
    const timestamp = Date.now();
    const follow_id = req.body.follow_id;

    context.bindings.outputDocument = {
        id: `${user_id}_${follow_id}`,
        user_id,
        follow_id,
        timestamp
    }

    context.res = {
        status: 201,
    };
}
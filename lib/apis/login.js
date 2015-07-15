module.exports = function(router) {

    router.post('/admin', function(req, res) {
        if (req.body.username === process.env.ADMIN_USERNAME && req.body.password === process.env.ADMIN_PASSWORD) {
            res.jsend.success(true);
        } else {
            res.jsend.success(false);
        }
    });

    router.post('/home', function(req, res) {
        if (req.body.username === process.env.USERNAME && req.body.password === process.env.PASSWORD) {
            res.jsend.success(true);
        } else {
            res.jsend.success(false);
        }
    });
};
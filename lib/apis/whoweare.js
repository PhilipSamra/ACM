var fs = require('fs');

module.exports = function (router) {

    router.get('/whoweare-data', function (req, res) {
        var file = fs.readFileSync('data/whoweare-data.json', 'utf8');
        var events = JSON.parse(file);
        res.jsend.success(events);
    });

    router.post('/whoweare-data', function (req, res) {
        var file = fs.readFileSync('data/whoweare-data.json', 'utf8');
        var events = JSON.parse(file);
        events.unshift(req.body.event);
        var configJSON = JSON.stringify(events);
        fs.writeFileSync('data/whoweare-data.json', configJSON);
        res.jsend.success(configJSON);
    });

    router.put('/whoweare-data', function (req, res) {
        var file = fs.readFileSync('data/whoweare-data.json', 'utf8');
        var events = JSON.parse(file);
        events[req.body.index] = req.body.event;
        var configJSON = JSON.stringify(events);
        fs.writeFileSync('data/whoweare-data.json', configJSON);
        res.jsend.success(configJSON);
    });

    router.delete('/whoweare-data/:index', function (req, res) {
        var file = fs.readFileSync('data/whoweare-data.json', 'utf8');
        var events = JSON.parse(file);
        events.splice(req.params.index, 1);
        var configJSON = JSON.stringify(events);
        fs.writeFileSync('data/home/home-data.json', configJSON);
        res.jsend.success(configJSON);
    });

    router.get('/whoweare-images', function (req, res) {
        var file = fs.readFileSync('data/whoweare-images.json', 'utf8');
        var images = JSON.parse(file);
        res.jsend.success(images);
    });
};

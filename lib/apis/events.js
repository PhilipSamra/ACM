var fs = require('fs');

module.exports = function(router) {

    router.get('/events-data', function(req, res) {
        var file = fs.readFileSync('data/events-data.json', 'utf8');
        var events = JSON.parse(file);
        res.jsend.success(events);
    });

    router.post('/events-data', function(req, res) {
        var file = fs.readFileSync('data/events-data.json', 'utf8');
        var events = JSON.parse(file);
        events.unshift(req.body.event);
        var configJSON = JSON.stringify(events);
        fs.writeFileSync('data/events-data.json', configJSON);
        res.jsend.success(configJSON);
    });

    router.put('/events-data', function(req, res) {
        var file = fs.readFileSync('data/events-data.json', 'utf8');
        var events = JSON.parse(file);
        events[req.body.index] = req.body.event;
        var configJSON = JSON.stringify(events);
        fs.writeFileSync('data/events-data.json', configJSON);
        res.jsend.success(configJSON);
    });

    router.delete('/events-data/:index', function(req, res) {
        var file = fs.readFileSync('data/events-data.json', 'utf8');
        var events = JSON.parse(file);
        events.splice(req.params.index, 1);
        var configJSON = JSON.stringify(events);
        fs.writeFileSync('data/events-data.json', configJSON);
        res.jsend.success(configJSON);
    });

    router.get('/events-images', function(req, res) {
        var file = fs.readFileSync('data/events-images.json', 'utf8');
        var images = JSON.parse(file);
        res.jsend.success(images);
    });
};
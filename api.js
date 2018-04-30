var express = require("express");
var app = express();

var routes = express.Router();

routes.get('/', function(req, res) {
    res.json({ name: "Roman"});
});

app.use('/api', routes);

app.listen(3000, function() {
    console.log('listening on port ' + process.env.PORT);
});
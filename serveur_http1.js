var express = require('express');
var app = express();
app.get('/', function(req, res) {
res.setHeader('Content-Type', 'text/plain; charset=utf-8');
res.end('Vous êtes à l\'accueil de l\' API');
});
app.get('/sous-sol', function(req, res) {
res.setHeader('Content-Type', 'text/plain; charset=utf-8');
res.end('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
});
app.get('/etage/:etagenum/chambre/:num', function(req, res) {
res.setHeader('Content-Type', 'text/plain; charset=utf-8');
res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum+ 'eet le num de chambre'+req.params.num );
});

app.use(function(req, res, next){
res.setHeader('Content-Type', 'text/plain; charset=utf-8');
res.send(305, 'Page introuvable !');
});
app.listen(8080);

var express = require('express');
var truckRoutes = require('./truckRoutes');

var app = express();

app.set('port', 3000);
app.use(express.static('public'));

app.use('/trucks', truckRoutes);

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
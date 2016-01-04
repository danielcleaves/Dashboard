var dashboards = require('../controllers/dashboards.js')

module.exports = function(app) {

app.get('/', function(req, res) {
	dashboards.home(req,res)
})	

app.get('/new', function(req, res) {
    res.render('new');
})
app.get("/show/:id", function(req, res) {
	dashboards.show_id(req,res)
})
app.get("/edit/:id", function(req, res) {
	dashboards.edit_id(req,res)
})
app.post('/new', function(req, res) {
	dashboards.create(req,res)
})
app.post('/edit/:id', function(req,res) {
	dashboards.edit(req,res)
});
app.get('/remove/:id', function(req,res) {
	dashboards.remove_id(req,res)
});






}
// require mongoose
var mongoose = require('mongoose');
// create the schema
var DashboardSchema = new mongoose.Schema({
 name: String,
 email: String,
 color: String,
 created_at: {type: Date, default: Date.now},
 updated_at: {type: Date}
})

mongoose.model('Dashboard', DashboardSchema);
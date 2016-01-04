var mongoose = require('mongoose');
var Dashboard = mongoose.model('Dashboard'); 

module.exports = {
	show_id: function(req, res){
		Dashboard.findOne({_id: req.params.id}, function (err, user){
    		res.render('show', {user: user});
    	})
	},

  home: function(req,res){
  Dashboard.find({}, function(err, user) {
      if(user){
        res.render('index',{userinfo:user});
      }
      else if(err){
        res.render('index',{userinfo:err});
      }
      else{
        res.render('index',{userinfo: "No user has been added"})
      }

    });
},

	edit_id: function(req,res){
    Dashboard.findOne({_id: req.params.id}, function (err, user){
    res.render('edit', {user: user});
      })
	},

	remove_id: function(req, res){
		Dashboard.remove({_id: req.params.id},  function(err,user){
  		console.log('Their gone!')
  		res.redirect('/');
  		});
	},

	edit: function(req, res){
		console.log("POST DATA", req.body);
  		Dashboard.update({_id: req.params.id, name: req.body.name, email: req.body.email, color: req.body.color},  function(err,user){
  		res.redirect('/');
  		});
	},

	create: function(req, res) {
		console.log("POST DATA", req.body);
  		var user = new Dashboard({name: req.body.name, email: req.body.email, color: req.body.color});
  		user.save(function(err) {
    		if(err) {
      			console.log('something went wrong',err);
    		} else { 
      			console.log('successfully added quote to database!');
      		res.redirect('/')
    		}
 		 })	
	}



}
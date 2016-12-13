var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodeParser = bodyParser.urlencoded({extended: false});

// connect to database      username : password  
mongoose.connect('mongodb://todo_user:2209@ds119598.mlab.com:19598/todo_sujal');

var todoSchema = new mongoose.Schema({
    item: String
});

var TodoModel = mongoose.model('TodoModel', todoSchema);

//var itemOne = TodoModel({item: 'Item1'}).save(function(err){
//   if(err) throw err;
//   console.log('Item Added');
//});

module.exports = function(app){
    app.get('/todo',function(req,res){
        TodoModel.find({}, function(err,data){
           if(err) throw err;
           res.render('todo',{items:data});
        });
    });
    
    app.post('/todo',urlencodeParser,function(req,res){
        TodoModel({item: req.body.item}).save(function(err,data){
            if(err) throw err;
            res.json(data);
        });
    });
    
    app.delete('/todo/:item',function(req,res){
        TodoModel.find({item: req.params.item}).remove(function(err,data){
           if(err) throw err;
           res.json(data);
        });
    });
}


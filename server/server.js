var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text:{
        type: String
    },
    completed:{
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc)=>{
//     console.log('Save todo', doc);
// },(e)=>{
//     console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//     text: 'Feed the cat',
//     completed: true,
//     completedAt: 123
// });

// otherTodo.save().then((doc)=>{
//     console.log('Save todo', doc);
// },(e)=>{
//     console.log('Unable to save todo');
// });

// challenge
var User = mongoose.model('user',{
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email:{
        type: String,
        require: true,
        trim: true,
        minlength: 1
    },
    password: {
        type: String
    }
});

var newUser = new User({
    email: 'rikito0113@gmail.com'
});

newUser.save().then((doc)=>{
    console.log('Save User',doc);
},(e)=>{
    console.log('Unable to save user');
});
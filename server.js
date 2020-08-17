const express = require ('express');
const app = express();

app.use(express.static('public'));

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


const url = "mongodb+srv://nimer:N1N1N1N1@cluster0.tejcy.mongodb.net/toDo";

const User = Mongoose.model("User", {
    userEmail: String,
    firstName: String,
    lastName: String,
    imgUrl: String,
    password: String
})

const Task = Mongoose.mode("Task", {
    user: {
        userEmail: String,
        firstName: String,
        lastName: String,
        imgUrl: String,
        password: String
    },
    taskTitle: String,
    taskContent: String,
    done: Boolean
})



const biadsy1 = new User({ userEmail:'abdalla@gmail.com',firstName:'abdalla',lastName:'biadsy',imgUrl:'https://www.emojirequest.com/images/PirateEmoji.jpg',password:'abdalla'});
const sabik = new User({ userEmail:'rwad@gmail.com',firstName:'rwad',lastName:'sabik',imgUrl:'https://i.pinimg.com/originals/46/c0/f0/46c0f06e676106c548f230c4a8541361.png',password:'rwad'});
const abdalhi = new User({ userEmail:'mahran@gamil.com',firstName:'mhran',lastName:'abdalhi',imgUrl:'https://i.pinimg.com/236x/10/92/84/1092848eae1e106a6443bafa71ba4605.jpg',password:'mhran'});








const port = process.env.PORT || 4000;
app.listen(port,()=>{console.log(' listen on port', port)});



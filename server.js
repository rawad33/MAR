const express = require('express');
const app = express();

app.use(express.static('public'));

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const url = "mongodb+srv://nimer:N1N1N1N1@cluster0.tejcy.mongodb.net/toDo";

const Mongoose = require('mongoose');
Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });




const User = Mongoose.model("User", {
    userEmail: String,
    firstName: String,
    lastName: String,
    imgUrl: String,
    password: String
})

const Task = Mongoose.model("Task", {
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


const biadsy1 = new User({ userEmail: 'abdalla@gmail.com', firstName: 'abdalla', lastName: 'biadsy', imgUrl: 'https://www.emojirequest.com/images/PirateEmoji.jpg', password: 'abdalla' });
const biadsy2 = new User({ userEmail: 'mhmd@gmail.com', firstName: 'mhmd', lastName: 'biadsy', imgUrl: 'https://www.emojirequest.com/images/PirateEmoji.jpg', password: 'mhmd' });
const sabik = new User({ userEmail: 'rwad@gmail.com', firstName: 'rwad', lastName: 'sabik', imgUrl: 'https://i.pinimg.com/originals/46/c0/f0/46c0f06e676106c548f230c4a8541361.png', password: 'rwad' });
const abdalhi = new User({ userEmail: 'mahran@gamil.com', firstName: 'mhran', lastName: 'abdalhi', imgUrl: 'https://i.pinimg.com/236x/10/92/84/1092848eae1e106a6443bafa71ba4605.jpg', password: 'mhran' });




const task1 = new Task({ user: biadsy1, taskTitle: 'Exam', taskContent: 'doing exam thirsday', done: false });
const task2 = new Task({ user: sabik, taskTitle: 'Exam', taskContent: 'doing exam thirsday', done: false });
const task3 = new Task({ user: abdalhi, taskTitle: 'Exam', taskContent: 'doing exam thirsday', done: false });
const task4 = new Task({ user: biadsy2, taskTitle: 'Exam', taskContent: 'doing exam thirsday', done: false });




app.post('/api/login', (req, res) => {
    const { firstName, lastName, password } = req.body;
    User.findOne({ firstName: firstName }, { lastName: lastName }, { password: password }).then(doc => {
        console.log(doc);
        let errMsg = 'RONG USER - משתמש לא נכון - مستخدم غير موجود ';
        console.log(doc.lastName);
        if (doc == null) {

             res.send({errMsg, login:false});
         }
        else {
            let lastName = doc.lastName;
            res.send( {lastName, login:true});

         }
    })
})



app.post('/api/register', (req, res) => {
    const { userEmail, firstName, lastName, imgUrl, password } = req.body;
    let newUser = new User({ userEmail: userEmail, firstName: firstName, lastName: lastName, imgUrl: imgUrl, password: password })
    newUser.save().then(doc => {
        console.log(doc)
        res.send({ login: true })
    })
})


app.post('/api/todo',async (req, res) => {
    const {lastName} = req.body;
    let docs =await Task.aggregate([
        { $match:{name:lastName}},
        {
            $group:{
                _id:'$lastName',
                users:{$push:"$$ROOT"}
            }
        }
    ])
    res.send(docs)
})









const port = process.env.PORT || 4001;
app.listen(port, () => { console.log(' listen on port', port) });



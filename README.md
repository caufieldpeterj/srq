# srq


# project-2.1

---
# Selling SRQ '22
## Problem:
My fiancé and I grew up in New Jersey, and we're getting married on the west coast of Florida due to venue restrictions. Few wedding guests are familiar with our wedding destination of Sarasota, FL.
## General App Idea
Educate our families and friends highlighting our favorite cultural, dining, sporting, and leisure options!
## Users
Our guests, and other couples planning a wedding in SRQ. 

## Stretch Goals
* Next-level styling, which has been an area I have neglected until now. 
* [Include Google Maps API on show page](https://developers.google.com/maps/gmp-get-started)
* [Include Yelp API on dining show pages](https://www.yelp.com/fusion)
* Mobile friendly design thru media queries
* Authentication
* EJS partials


# SETUP
---

<!-- https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line -->

$ cd Desktop
$ mkdir srq
$ cd srq/
$ echo "# srq" >> README.md
$ git init
$ git add README.md
$ git commit -m "first commit"
$ git branch -M main
$ git remote add origin https://github.com/caufieldpeterj/srq.git
$ git push -u origin main

enter username and pw

<!-- check github to see whether the commit was received -->

$ touch server.js
$ mkdir views
$ touch views/index.ejs views/show.ejs views/new.ejs .gitignore

<!-- initially, adjusted the readme online and in the text editor, caused a merge conflict... -->

$ git status
$ git merge --abort
$ git status
$ git add .
$ git commit -m ""
$ git push origin main

<!-- intialize npm -->
$ npm init -y
<!-- terminal install express ejs and method-override-->
$ npm i express ejs method-override

<!-- server.js -->
const express = require('express');

const PORT = 3000;
const APP = express();

APP.listen(PORT, ()=> {
    console.log('server is up and running');
});

<!-- terminal -->
node server.js
ctrl + C

<!-- server.js -->
// Index
APP.get('/srq', (req, res) => {
    res.send('here for you')
})

<!-- index ejs -->
Shift + I for html boilerplate

<!-- server.js -->
// Index Route
APP.get('/srq', (req, res) => {
    res.render('index.ejs')
});

<!-- refresh localhost:3000/ to verify ejs template is being rendered-->

<!-- server.js -->
// New Route
APP.get('/srq/new', (req, res) => {
    res.send('new')
});

<!-- refresh localhost:3000/ to verify ejs template is being rendered-->

<!-- server.js -->
// New Route
APP.get('/srq/new', (req, res)=>{
    res.render('new.ejs');
});


<!-- new.ejs -->

        <form action="/srq" method="POST">
            Name: <input type="text" name="name" /><br/>
            Description: <input type="text" name="color" /><br/>
            <input type="submit" name="" value="Create Activity"/>
        </form>

<!-- server.js -->

// Include middleware
app.use(express.urlencoded({extended:true}));

// Create Route
APP.post('/srq', (req,res) => {
    res.send(req.body);
})

<!-- Connect Express to Mongo -->
$ npm i mongoose

<!-- server.js -->
// @ top of file, below express
const mongoose = require('mongoose');


//... and then below middleware

// Database connection
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

<!-- Create a model for DB schema -->

$ mkdir models
$ touch models/options.js

<!-- options.js -->

const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    Name: {type: String, required: true},
    Description: {type: String, required: true}
});

const Options = mongoose.model('Options', optionSchema);

module.exports = Options;

---
Adding CSS
<!-- https://git.generalassemb.ly/seir-1-19/student-resources/blob/main/2_full_stack_dev/w05d03/instructor_notes/static.md -->
mkdir public
cs public
mkdir css
cd css
touch app.css
code app.css

<!-- app.css -->
body { background-color: green}

<!-- server.js / middleware -->
APP.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'

<!-- index.ejs -->
<link rel="stylesheet" href="/css/app.css">    
---

Styling inspo
- https://www.sitebuilderreport.com/inspiration/wedding-websites-examples
- https://fonts.google.com/specimen/Dancing+Script?preview.text_type=custom&preview.text=Joyfully%20invite%20you%20to%20their%20wedding%20celebration&sidebar.open=true&selection.family=Dancing+Script:wght@700


<!-- npm i dotenv -->
https://git.generalassemb.ly/seir-1-19/student-resources/blob/main/2_full_stack_dev/w07d01/instructor_notes/heroku.md
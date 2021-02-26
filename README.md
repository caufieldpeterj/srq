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
APP.get('/', (req, res) => {
    res.send('here for you')
})

<!-- index ejs -->
Shift + I for html boilerplate

<!-- server.js -->
// Index
APP.get('/', (req, res) => {
    res.render('index.ejs')
});

<!-- refresh localhost:3000/ to verify ejs template is being rendered-->
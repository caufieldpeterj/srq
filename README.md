# Selling SRQ '22
## Problem:
My fiancé and I grew up in New Jersey, and we're getting married on the west coast of Florida due to venue restrictions. Few wedding guests are familiar with our wedding destination of Sarasota, FL.
## General App Idea
Educate our families and friends highlighting our favorite cultural, dining, sporting, and leisure options!
## Users
Our guests, and other couples planning a wedding in SRQ. 

## Stretch Goals
[x] Clean styling, dig in with CSS 

[x] [Include Google Maps API on show page](https://developers.google.com/maps/gmp-get-started)

[ ] [Include Yelp API on dining show pages](https://www.yelp.com/fusion)

[x] Mobile friendly design thru media queries (thanks Skeleton!)

[x] Authentication

[ ] EJS partials

## What I Used

Bcrypt

Dotenv

EJS

Express & Express Session

Method-override

Mongoose

Node.js

MVC file structure to keep my code organized, much easier to debug!

Skeleton CSS boilerplate, which made life much easier in the beginning. I had trouble pathing to the unzipped files so used the Skeleton CDN for a few days. I had a few different CSS pages where I spent a lot of time and effort to make things look clean. Ultimately, I was able to scrap the CDN and use the zip folder provided by Skeleton and re-readjusted the layout. Lastly, I'm pretty please with scroll-snap and how the index page flows. There is a bug whereby my mousewheel causes me to skip over a section (which shouldn't be the case), I believe this is a Chrome issue vs. a personal issue.

Eventually, I'd like to add to the "suggestion" sections of my index page along with the nav bar.  I wasn't ready to create another host of routes, so left the nav buttons as placeholders for now.

At the last minute I made a push to require authentication, fortunately I was able to get things working the morning of my presentation. Try it out!

## What I'd like to improve

I'd like to revisit the show page for each activity. I was hoping to perform a google maps query using the name of the activity page. I wasn't able to get there, but it is something I hope to address in the near future. As a result, the styling on these pages needs some work. Also, trimming the date on the show pages to reflect just the date and time is an improvement I intend to make.


## Feedback

All comments and questions are welcome!

## Access

Although you don't get access to the wedding without a formal written invitation... [check out my application here!](https://dashboard.heroku.com/apps/stormy-hollows-21883)
# PingHeroku
According to [Heroku Free Dyno Hours Policies](https://devcenter.heroku.com/articles/free-dyno-hours)
free dynos will go to sleep after 30 minutes of inactivity.  
This js will register a timer self-pinging your app every 30 minutes.
## Installation
Install via git clone

     $ git clone https://github.com/LeoLiu1209/PingHeroku.git
     $ cd PingHeroku
     $ npm install
     
## Parameters
+ url : your heroku app url
+ intervalTime : number of ms between two heartbeats calls. Default to 25 * 60 * 1000 (25 minutes).
+ stop_time_from : stop ping time from HH:MM (24 Hour Clock) 
+ top_time_end : stop ping time end HH:MM (24 Hour Clock)

## Return
the function returns "url can't be requested" when error happen for the request

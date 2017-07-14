var moment = require('moment')
var request =require('request')
const url='' 		       //Heroku url
const intervalTime=25*60*1000 //ping every 25 mins

setInterval(() => {
    getTime((InStopPingTime, currentTime) => {
        if(!InStopPingTime){
		reqHeroku(currentTime)
        	return
        }
    console.log(currentTime+' is not in ping time')
    })
  }, intervalTime)

function getTime(callback){
	let currentTime = moment()
	let extra = moment().format('YYYY-MM-DD') + ' '
	let stop_time_from = moment(extra + '00:30')
	let stop_time_end = moment(extra + '08:30')
    	let InStopPingTime=moment(currentTime).isBetween(stop_time_from,stop_time_end)
	currentTime=currentTime.format('hh:mm:ss a')
    	callback(InStopPingTime,currentTime)
}

function reqHeroku(currentTime){
  	request(url, (err)=>{
  		if(err) {
  			console.log("url can't be requested")
  			return
  		}
  		console.log(currentTime + ' Heroku-self-ping: ' + url)
  	})
}


function getTime(uptime){
	var hrs = parseInt(uptime/3600);
	var min = parseInt((uptime- hrs*3600)/60);
	var sec = (uptime - hrs*3600 -min*60).toFixed(0);
	console.log('Uptime:' .green, hrs, 'h', min, 'm', sec, 's')
};

exports.print = getTime;

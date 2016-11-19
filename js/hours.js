var goal = new Date("Sun Nov 20 2016 14:30:00 GMT+0900 (Seoul Time)");

var DateDiff = {

	inSeconds: function(d1, d2) {
		var t2 = d2.getTime();
		var t1 = d1.getTime();

		var result = parseInt((t2-t1)/1000%60);

		if(t2 - t1 < 0)
			result = 0;

		return result > 9? result : "0" + result;
	},

	inMinutes: function(d1, d2) {
		var t2 = d2.getTime();
		var t1 = d1.getTime();

		var result = parseInt((t2-t1)/(1000*60) % 60);

		if(t2 - t1 < 0)
			result = 0;

		return result > 9? result : "0" + result;
	},

	inHours: function(d1, d2) {
		var t2 = d2.getTime();
		var t1 = d1.getTime();

		var result = parseInt((t2-t1)/(1000*60*60) % 24);

		if(t2 - t1 < 0)
			result = 0;

		return result > 9? result : "0" + result;
	},

    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        var result = parseInt((t2-t1)/(24*3600*1000));

        return result > 9? result : "0" + result;
    },

    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000*7));
    },

    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();

        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },

    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}

var setTime = function() {
	var current = new Date();
	var time = document.getElementById("time");
	time.innerHTML = DateDiff.inHours(current, goal) + ":" + DateDiff.inMinutes(current, goal) + ":" + DateDiff.inSeconds(current, goal);
}

setInterval(setTime, 100);
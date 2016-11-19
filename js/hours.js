var goal = new Date(2016, 11, 20, 14, 30, 0, 0);

var DateDiff = {

	inSeconds: function(d1, d2) {
		var t2 = d2.getTime();
		var t1 = d1.getTime();

		return parseInt((t2-t1)/1000%60);
	},

	inMinutes: function(d1, d2) {
		var t2 = d2.getTime();
		var t1 = d1.getTime();

		return parseInt((t2-t1)/(1000*60) % 60);
	},

	inHours: function(d1, d2) {
		var t2 = d2.getTime();
		var t1 = d1.getTime();

		return parseInt((t2-t1)/(1000*60*60) % 48);
	},

    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000));
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

	alert(goal);

	time.innerHTML = DateDiff.inHours(current, goal) + ":" + DateDiff.inMinutes(current, goal) + ":" + DateDiff.inSeconds(current, goal);
}

setInterval(setTime, 100);
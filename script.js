function show() {
	var date = new Date();

	var h = date.getHours('');
	var m = date.getMinutes('');
	var s = date.getSeconds('');
	var ap = "AM";

	if (h == 0) {
		h = 12;
	}
	if (h>12)
	 {
	 	h = h - 12;
	 	ap = "PM";
	 }
	 h = (h<10) ? "0" + h: h;
	 m = (m<10) ? "0" + m: m;
	 s = (s<10) ? "0" + s: s;

	 var thoigian = h + ":" + m + ":" + s +ap;
	 document.getElementById('show').innerHTML=thoigian;
	 setTimeout(show,1000)
	}
	show()
{
	function currentDate()
	{
		var d=new Date();
		var day=d.getDay();
		var date=d.getDate();
		var mt=d.getMonth();
		var year=d.getFullYear();

		if(day==0) day="sunday";
	else if(day==1) day="monday";
	else if(day==2) day="tuesday";
	else if(day==3) day="wednesday";
	else if(day==4) day="thursday";
	else if(day==5) day="friday";
	else day="saturday";
	
	if(mt==0) mt="january";
	else if(mt==1) mt="february";
	else if(mt==2) mt="march";
	else if(mt==3) mt="april";
	else if(mt==4) mt="may";
	else if(mt==5) mt="june";
	else if(mt==6) mt="july";
	else if(mt==7) mt="august";
	else if(mt==8) mt="september";
	else if(mt==9) mt="octuber";
	else if(mt==10) mt="november";
	else if(mt==11) mt="december";
	document.getElementById('currentDate').innerHTML=day+ ", "+" "+ date+ " "+ mt+ " "+ year;
	refreshTime();
	}
	function currentTime()
	{
		var t=new Date();
		var hh=t.getHours();
		var mm=t.getMinutes();
		var ss=t.getSeconds();
		var ampm= hh<=11 ? "AM":"PM";
		
	document.getElementById('hh').innerHTML=hh;
	document.getElementById('mm').innerHTML=mm;
	document.getElementById('ss').innerHTML=ss;
	}
	function refreshTime()
	{
		setInterval(currentTime, 1000);
	}
}
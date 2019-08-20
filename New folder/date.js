function currentDate(){
	var d;
	d=new Date();
	yr=d.getFullYear();
	mt=d.getMonth();
	dat=d.getDate();
	day=d.getDay();
	
	if(day==0) day="sunday";
	else if(day==1) day="monday";
	else if(day==2) day="tuesday";
	else if(day==3) day="wednesday";
	else if(day==4) day="thursday";
	else if(day==5) day="friday";
	else day="saturday";

	if(mt==0) mt="january";
	else if(mt==1) mt="february"
	else if(mt==2) mt="mar"
	else if(mt==3) mt="april"
	else if(mt==4) mt="may"
	else if(mt==5) mt="june"
	else if(mt==6) mt="july"
	else if(mt==7) mt="agus"
	else if(mt==8) mt="sept"
	else if(mt==9) mt="octu"
	else if(mt==10) mt="nov"
	else if(mt==11) mt="dec"			

	document.getElementById("date").innnerHTML=day+" "+dat+" "+mt+" "+yr;
}
function curentTime(){
	t=new Date();
	hh=t.gethours()
	mm=t.getMinutes()
	ss=t.getseconds()

	document.getElementById('hh').innerHTML=hh
	document.getElementById('mm').innerHTML=hh
	document.getElementById('ss').innerHTML=hh
	

}
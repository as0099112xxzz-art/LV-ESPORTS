let arabic = false;

const btn = document.getElementById("languageBtn");

btn.onclick = () => {

arabic = !arabic;

if(arabic){

document.documentElement.lang="ar";
document.documentElement.dir="rtl";

btn.innerHTML="English";

document.getElementById("title").innerHTML="LV ESPORTS";

document.getElementById("subtitle").innerHTML="اصنع مستقبل الأبطال";

document.querySelector(".join").innerHTML="انضم الآن";

document.querySelector(".members").innerHTML="الأعضاء";

}else{

document.documentElement.lang="en";
document.documentElement.dir="ltr";

btn.innerHTML="العربية";

document.getElementById("title").innerHTML="LV ESPORTS";

document.getElementById("subtitle").innerHTML="Build the Future of Champions";

document.querySelector(".join").innerHTML="Join Clan";

document.querySelector(".members").innerHTML="View Members";

}

}

let names = document.getElementById("name");
let kid = document.getElementById("kid");
let email = document.getElementById("email");
let no = document.getElementById("no");
let course = document.getElementById("course");
let submit = document.getElementById("submit");
let load = document.getElementById("load");
let semester = document.getElementById("semester");
let header = document.getElementById("header");
let main = document.getElementById("main");
let loadinggif = document.getElementById("loadinggif");
let skill = document.getElementById("skill");




setTimeout(loadt, 333)

function loadt() {
    clearTimeout(1300)
    loadinggif.style.display = "none"
    header.style.visibility = "visible"
    main.style.visibility = "visible"

}



let tg = {
    token: "6178294062:AAEi72UVOgyEm_RhZqilO_ANsKcRcW06C-0",
    chat_id: "5766558074"
}
function sendMessage(text) {

    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${encodeURIComponent(text)}`; // The url to request
    const xht = new XMLHttpRequest();
    xht.open("GET", url);
    xht.send();
}

let fullName = names.value;
let kidId = kid.value;
let userEmail = email.value;
let phoneNo = no.value;
let userCourse = course.value;
let userSemester = semester.value;


submit.onclick = async () => {
   


    let fullName = names.value;
    let kidId = kid.value;
    let userEmail = email.value;
    let phoneNo = no.value;
    let userCourse = course.value;
    let userSemester = semester.value;
    let userskill = skill.value;

    if (
        !fullName.trim() ||
        !kidId.trim() ||
        !userEmail.trim() ||
        !phoneNo.trim() ||
        !userCourse.trim() ||
        !userSemester.trim() ||
        !userskill.trim()
    ) {
       
        return; 
    }
    else{
     submit.innerHTML="Sending!"
   
    let messagebe = `
        Full Name :  ${fullName}
KID :  ${kidId}
Email :  ${userEmail}
Phone No :  ${phoneNo}
Course :  ${userCourse}
Semester :  ${userSemester}
Level :  ${userskill}
    `;
    try {
        
        sendMessage(messagebe);
        submit.innerHTML="sent!"
      
      
       
        sendmail()
       

    } catch (error) {
       
        alert("Message sending failed. Please try again.");
       
        load.style.display = "none";
        submit.innerHTML="Netwrok Error";
    }
    setTimeout(()=>{
        
     names.value=""
   kid.value=""
   email.value=""
   no.value=""
 course.value=""
     semester.value=""
     submit.innerHTML = "Join!";
     load.style.display = "none";

    },3000)
}

}


 async function sendmail(){

    (function(){
        emailjs.init("phdjshhBVInY3PcM-");
    })();

    var params = {
    names: names.value,
      to: email.value,

      

    };

    var serviceID = "service_vxzcjmc";
    var templateID = "template_rtn5h7s";
    emailjs.send(serviceID,templateID,params)
    .then( res => {
        window.location.href="checkmail.html"
       console.log("sent")

    })
   
}



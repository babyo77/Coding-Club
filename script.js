// define 

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
let whytojoin = document.getElementById("whytojoin");
let stars = document.getElementById("stars");
let stars2 = document.getElementById("stars2");

const timeoutId = setTimeout(loadt, 444) // staring animtion of page 

function loadt() {
    clearTimeout(timeoutId)
    stars.style.display="block"
    stars2.style.display="block"
    whytojoin.style.visibility="visible"
    loadinggif.style.display = "none"
    header.style.visibility = "visible"
    main.style.visibility = "visible"

}



// funtion to send message to telegram

function sendMessage(text) {

    const url = `https://api.telegram.org/bot6178294062:AAEi72UVOgyEm_RhZqilO_ANsKcRcW06C-0/sendMessage?chat_id=5356614395&text=${encodeURIComponent(text)}`; // The url to request
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

//  join button event 

submit.onclick = async () => {
   

// getting all values

    let fullName = names.value;
    let kidId = kid.value;
    let userEmail = email.value;
    let phoneNo = no.value;
    let userCourse = course.value;
    let userSemester = semester.value;
    let userskill = skill.value;

    // checking for blank and blank spaces

    if (
        !fullName.trim() ||
        !kidId.trim() ||
        !userEmail.trim() ||
        !phoneNo.trim() ||
        !userCourse.trim() ||
        !userSemester.trim() ||
        !userskill.trim()
    ) {
       alert("Please Fill The Blank")
        return; 
    }
    // sending form data to

    else{
        load.style.display = "block"
        header.style.display = "none"
        main.style.display = "none"
        whytojoin.style.display="none"
   
    // what to send on telegram and formating the mesasge 
        
    let messagebe = `       
        Full Name :  ${fullName}
College :  ${kidId}
Email :  ${userEmail}
Phone No :  ${phoneNo}           
Course :  ${userCourse}                 
Semester :  ${userSemester}
Level :  ${userskill}
    `;
    try {
        
        sendMessage(messagebe);     // sending to telegram
        submit.innerHTML="sent!"
      
      
       sendmail()   // calling to send mail to user 
        
       

    } catch (error) {
       
        alert("Message sending failed. Please try again.");   // on error sending message 
        load.style.display = "none"
        header.style.display = "block"
        main.style.display = "block"
        whytojoin.style.display="block"   
        submit.innerHTML="Netwrok Error";
    }
    setTimeout(()=>{
        
     names.value=""
   kid.value=""
   email.value=""
   no.value=""                        // from will clear after 3s when user submit form 
     submit.innerHTML = "Join!";         
     load.style.display = "none";

    },3000)
}

}


 async function sendmail(){         //sending mail funtion 

    (function(){
        emailjs.init("phdjshhBVInY3PcM-");
    })();

    var params = {
    names: names.value,              // what to send
      to: email.value,

      

    };

    var serviceID = "service_vxzcjmc";
    var templateID = "template_rtn5h7s";

    
    emailjs.send(serviceID,templateID,params) 
    .then( res => {
        window.location.href="checkmail.html"      //on success
       console.log("sent")

    })
    .catch( res=> {
        alert("Check You internet Connection Or Try again later");
        load.style.display = "none"
        header.style.display = "block"
        main.style.display = "flex"                         //on error 
        load.style.display = "none";
        whytojoin.style.display="block"
        submit.innerHTML="Netwrok Error";
 })

}

// code by babyo7_
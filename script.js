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





setTimeout(loadt, 333)

function loadt() {
    clearTimeout(1300)
    loadinggif.style.display = "none"
    header.style.visibility = "visible"
    main.style.visibility = "visible"

}



let tg = {
    token: "6178294062:AAEi72UVOgyEm_RhZqilO_ANsKcRcW06C-0",
    chat_id: "5356614395"
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


submit.onclick = () => {


    let fullName = names.value;
    let kidId = kid.value;
    let userEmail = email.value;
    let phoneNo = no.value;
    let userCourse = course.value;
    let userSemester = semester.value;

    if (
        !fullName.trim() ||
        !kidId.trim() ||
        !userEmail.trim() ||
        !phoneNo.trim() ||
        !userCourse.trim() ||
        !userSemester.trim()
    ) {
       
        return; 
    }
    else{
     submit.innerHTML=""
     load.style.display="block"
    let messagebe = `
        Full Name :  ${fullName}
KID :  ${kidId}
Email :  ${userEmail}
Phone No :  ${phoneNo}
Course :  ${userCourse}
Semester :  ${userSemester}
    `;

    
    sendMessage(messagebe);
    setTimeout(()=>{
        load.style.display="none"
        submit.innerHTML="Sent!"
        
    },1000)
   }
}



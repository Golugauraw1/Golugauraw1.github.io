


// console.log("hello")

document.querySelector(".cross").style.display="none"
document.querySelector(".hemburger").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebargo")
    if(document.querySelector(".sidebar").classList.contains("sidebargo")){
        document.querySelector(".hem").style.display='inline'
        document.querySelector(".cross").style.display="none"
    }
    else{
        document.querySelector(".hem").style.display="none"
        setTimeout(()=>{
            document.querySelector(".cross").style.display="inline"
        },400)
       
    }
})

let ResumeBtn=document.getElementById("homeBtndiv")
ResumeBtn.onclick=()=>{
  window.open("./fw21_1111-Golu-Gauraw-Resume.pdf", "_blank")
}


let navResume=document.getElementById("navResume")
navResume.onclick=()=>{
  window.open("./fw21_1111-Golu-Gauraw-Resume.pdf", "_blank")
}
let sideR=document.getElementById("sideResume")
sideR.onclick=()=>{
  window.open("./fw21_1111-Golu-Gauraw-Resume.pdf", "_blank")
}
let aboutR=document.getElementById("aboutResumepdf")
aboutR.onclick=()=>{
  window.open("./fw21_1111-Golu-Gauraw-Resume.pdf", "_blank")
}
let ofON = document.querySelector(".middle > span");
let saveBtn = document.querySelector(".save");
let stoop = document.querySelector(".stop");
let x = document.getElementById("x")

// ofON.addEventListener("click",function(){
//     if(ofON.classList === ""){
//         saveBtn.style.display = "block"
//         stoop.style.display = "none"
//     }
//     if(ofON.classList.contains("active")){
//         saveBtn.style.display = "none"
//         stoop.style.display = "block"
//     }
//     ofON.classList.toggle("active")
// })
ofON.onclick = ()=>{
    ofON.classList.toggle("active")
    if(ofON.classList == ""){
        saveBtn.style.removeProperty("display");
        stoop.style.removeProperty("display");
    }
    if(ofON.classList.contains("active")){
        saveBtn.style.cssText = "display: none;"
        stoop.style.cssText = "display: block;"
    }
    
}
// setting butom
let setting = document.querySelector(".setting")
let alertt = document.querySelector(".alert")
console.log(setting)
setting.onclick = function(){
    alertt.classList.add("show-alert")
}
x.addEventListener("click",function(){
    alertt.classList.remove("show-alert")
})
saveBtn.addEventListener("click",function(){
    alertt.classList.remove("show-alert")
})
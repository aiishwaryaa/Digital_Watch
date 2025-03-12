//day,date
// let dayName=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// // let month=['January','February','March','April','May','June','July','August','September','October','November','December'];
// let d= new Date(). getDay();
// day.innerHTML=`${dayName[d]}`
// date.innerHTML= new Date().toLocaleDateString();

//time
setInterval(()=>{
const d = new Date().toLocaleTimeString();
document.getElementById("time").innerHTML= d;
},1000);


function changecolor(){
    // let colors = ['grey','blue','yellow','violet','pink','orange','green'];
    // let i=0;
    let dayName=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// let month=['January','February','March','April','May','June','July','August','September','October','November','December'];
let d= new Date(). getDay();
day.innerHTML=`${dayName[d]}`
date.innerHTML= new Date().toLocaleDateString();
}

let a =0
function changeimage(){
    let images = ["./1.jpg","./black.jpg","red","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"]
    document.querySelector(".color").style=`background-image:url('${images[a%images.length]}')`
    a=a+1
}
// let a =0
// function changeimage(){
//     let colors = ["green","pink","red","blue","yellow","orange","grey","violet","cadetblue"]
//     document.querySelector(".color").style=`background-color:${colors[a%colors.length]}`
//     a=a+1
// }



 
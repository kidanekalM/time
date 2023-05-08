function rand() {
    return Math.floor(Math.random()*180).toString();
  }
lswrapper = document.getElementsByClassName("leaf")
tree = document.getElementsByClassName("tree")
sun = document.getElementById("sun");
leafs = document.getElementsByClassName("leaves");
time = 10000;
interval = 100;
for(i=0;i<tree.length;i++){
    tree[i].style.left=Math.random()*100+"vw";
    tree[i].style.width=Math.random()*10+"vw";
}
for(i=0;i<leafs.length;i++){
    leafs[i].style.height=Math.random()*10+"vw";
    leafs[i].style.width=Math.random()*200+"vw";
}
setInterval(function () {
    sun.animate({top:"15vh",left:"0px"},1000)
sun.animate({top:"0vh",left:"50vw"},1000)
sun.animate({top:"0vh",left:"50vw"},1000)
sun.animate({top:"15vh",left:"100vw"},1000)
// lswrapper[0].animate({ top:"400vh"},100)
for(i=0;i<lswrapper.length;i++){
     lswrapper[i].animate({ top:Math.random()*100+"vh"},time+Math.floor(Math.random()*10080));
     lswrapper[i].animate({ top:0+"vh"},1);
     lswrapper[i].style.transform="rotate("+rand()+"deg"}

},2000)


    // setInterval(function(){
    //     for(i=0;i<lswrapper.length;i++){
    //     lswrapper[i].animate({ top:"400vh"},100);}
    // },2)
// for(i=0;i<lswrapper.length;i++){
//     // lswrapper[i].style.top=rand()+"%";
//     // lswrapper[i].style.left=rand()+"%";
//     // lswrapper[i].style.top="400vh";
//     // lswrapper[i].style.transform="rotate("+rand()+"deg)";

//     // console.log("object");
//  /*   lswrapper[i].addEventListener('mouseover',function () {
//         console.log(this);
//         time=time+interval;
//         this.animate({position:"absolute", top:"40vh"},1);
//         // setTimeout(goDown,time++);        
//     });*/
// }
function goDown() {
    // console.log(getComputedStyle(this).animationName+"  ");
    // console.log(this.style.animationName);
    // this.style.animationName = "goDown";
    // getComputedStyle(this).animationName="goDown"
}


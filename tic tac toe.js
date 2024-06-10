var boxes= document.querySelectorAll(".btn");
var reset=document.querySelector(".reset");
   var msg= document.querySelector(".msg");
   var newbtn= document.querySelector(".newbtn");

var turno=true;
boxes.forEach ((btn) => {
 btn.addEventListener("click", ()=>{
    if(turno=== true){
        btn.innerText="o";
        turno=false;
    }
    else{
        btn.innerText="x";
        btn.style.color="black";
        turno=true;
    }
    btn.disabled =true;
    win();
 });
 });
var winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],
[2,5,8],[3,4,5],[6,7,8],[2,4,6]];

const win=()=>{
    for( let patern of winpattern){
   let pos1val = boxes[patern[0]].innerText;
   let pos2val = boxes[patern[1]].innerText;
   let pos3val =boxes[patern[2]].innerText;
   if(pos1val !="" && pos2val !="" && pos3val !=""){
   if(pos1val===pos2val && pos2val===pos3val){
    console.log("winner",pos1val);
    showwinner(pos1val);
   
   }}}};
   const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }};
   const showwinner=(winner)=>{
     msg.innerText=`winner is ${winner}`;
     msg.classList.remove("hide");
     disableBoxes();
    
   };
   const resetgame =()=>{
   turno=true;
   enable();
   msg.classList.add("hide");

   }
   const enable=()=>{
    for(let box of boxes){
        box.disabled = false ;
    box.innerText = "";
}};
   
reset.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);
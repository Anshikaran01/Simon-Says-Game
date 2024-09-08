let gameseq =[];
let userseq =[];

let started = false;
let level=0;

let btns = ["yellow","red","purple","green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("started");
        started = true;
    }
    levelUp();
    
});

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash")
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);
}


let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
   btn.addEventListener("click",btnPress);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}
function checkAns(idx){

    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over!Your score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },1000);
        reset();
    }
   
}

function btnPress(idx){
    let btn = (this);
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userColor);

    checkAns(userseq.length-1);
}
function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
};

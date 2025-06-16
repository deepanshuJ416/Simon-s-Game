let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","blue","green"];
let started = false;

let level=0;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function GameFlash(btn){
    btn.classList.add("Gameflash");
    setTimeout(function(){
        btn.classList.remove("Gameflash");
    },250);
}

function UserFlash(btn){
    btn.classList.add("Userflash");
    setTimeout(function(){
        btn.classList.remove("Userflash");
    },250);
}

let heading2 = document.querySelector("h2");

function levelUp(){
    userSeq = [];
    level++;
    heading2.innerText = `Level = ${level}`;

    //random button flash
    let randInx = Math.floor(Math.random()*3);
    let randColor = btns[randInx];
    
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    GameFlash(randBtn);
}

function btnPress(){
    console.log("button was pressed");
    let btn = this;
    UserFlash(btn);

    let UserPressColor = btn.getAttribute("id");
    // console.log(UserPressColor);
    userSeq.push(UserPressColor); 

    checkAns(userSeq.length-1);
}

function checkAns(idx){

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        heading2.innerHTML = `GameOver! Your Score was  <b> ${level - 1} </b> <br> Press Any Key to Restart again..`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

let Allbtns = document.querySelectorAll(".btn");
for(btn of Allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
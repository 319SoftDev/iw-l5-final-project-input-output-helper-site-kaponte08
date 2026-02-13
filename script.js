const end = document.querySelector("#end");
const answer = document.querySelector(".ans")
const ansSet = document.querySelector(".answerset");
let dhlpoints = 0;
let chrypoints = 0;
let spdpoints = 0;
let sunpoints = 0;
let larkpoints = 0;
let hibipoints = 0;
let ranpoints = 0;
let n = 1;
let ans = {
        1: document.querySelector("#ans1"),
        2: document.querySelector("#ans2"),
        3: document.querySelector("#ans3"),
        4: document.querySelector("#ans4"),
        5: document.querySelector("#ans5"),
        6: document.querySelector("#ans6"),
        7: document.querySelector("#ans7"),
        8: document.querySelector("#ans8"),
        9: document.querySelector("#ans9"),
        10: document.querySelector("#ans10"),
        11: document.querySelector("#ans11"),
        12: document.querySelector("#ans12"),
        13: document.querySelector("#ans13"),
        14: document.querySelector("#ans14"),
        15: document.querySelector("#ans15"),
        16: document.querySelector("#ans16"),
        17: document.querySelector("#ans17")        
}
let summit ={
    1:document.querySelector("#summit1"),
    2:document.querySelector("#summit2"),
    3:document.querySelector("#summit3"),
    4:document.querySelector("#summit4")
}
summit.forEach((btn) =>{
    btn.disabled =true;
}
)
let back ={
    2:document.querySelector("#back2"),
    3:document.querySelector("#back3"),
    4:document.querySelector("#back4")
}
let quests ={
    "q1":document.querySelector("#q1"),
    "q2":document.querySelector("#q2"),
    "q3":document.querySelector("#q3"),
    "q4":document.querySelector("#q4")
}
const declarePoints = () => {
    console.log(" dhl "+ dhlpoints, " - spd "+ spdpoints," - sun"+ sunpoints," - lark " + larkpoints, " - chry " + chrypoints, " - hibi " + hibipoints, " - ran " + ranpoints); 
}
const toZero = () =>{
    if(dhlpoints<0){
        dhlpoints = 0;
    }
    if(sunpoints<0){
        sunpoints = 0;
    }
    if(chrypoints<0){
        chrypoints = 0;
    }
    if(spdpoints<0){
        spdpoints = 0;
    }
    if(larkpoints<0){
        larkpoints = 0;
    }
    if(ranpoints<0){
        ranpoints = 0;
    }
    if(hibipoints<0){
        hibipoints = 0;
    }
}
const lowerPoints = () =>{
    if(dhlpoints>0){
        dhlpoints -= 1;
    }
    if(sunpoints>0){
        sunpoints -= 1;
    }
    if(chrypoints>0){
        chrypoints -= 1;
    }
    if(spdpoints>0){
        spdpoints -= 1;
    }
    if(larkpoints>0){
        larkpoints -=1;
    }
    if(ranpoints>0){
        ranpoints -= 1;
    }
    if(hibipoints>0){
        hibipoints -= 1;
    }
}
const choose = (e) =>{
    i = e.target.value;
    ans[i].classList.toggle("chosen");
    console.log(n);
    let hihihi = document.querySelector(`.answerbox${n}`);
    console.log(hihihi);
    let elems = document.querySelectorAll(`.answerbox${n} .chosen`);
    console.log(elems);
    if(elems.length > 1){
        summit[n].disabled = true;
        elems.forEach((items) =>{
            lowerPoints()
            items.classList.remove("chosen");
            toZero();
        })       
        console.log(" dhl "+ dhlpoints, " - spd "+ spdpoints," - sun"+ sunpoints," - lark " + larkpoints, " - chry " + chrypoints, " - hibi " + hibipoints, " - ran " + ranpoints); 
    }
}

console.log("wrefewrwr");

const hiding = (e) =>{
    quests[`q${n}`].classList.toggle("hidden");
    
    n+=1;
    quests[`q${n}`].classList.toggle("hidden");
    console.log(n);
    if(e.target == summit[4]){
        if(dhlpoints > hibipoints && dhlpoints > ranpoints && dhlpoints > spdpoints && dhlpoints > sunpoints && dhlpoints > chrypoints){
            document.querySelector("#dahlia").classList.remove("hidden");
            document.querySelector("#flowerAns").innerHTML = "You got Dahlia flower!";
        }
    }
}
const goingBack = () =>{
    quests[`q${n}`].classList.toggle("hidden");
    n-= 1;
    quests[`q${n}`].classList.toggle("hidden");
    console.log(n);
}


summit[1].addEventListener("click", hiding);
summit[2].addEventListener("click", hiding);
summit[3].addEventListener("click", hiding);
summit[4].addEventListener("click", hiding);

back[2].addEventListener("click", goingBack);
back[3].addEventListener("click", goingBack);
back[4].addEventListener("click", goingBack);
ans[1].addEventListener("click", function(e){
    n = 1;
    choose(e);
    if(e.target.classList.contains("chosen")){
        dhlpoints += 1;
        chrypoints += 1;
        console.log(dhlpoints);
        console.log("chry " + chrypoints);
    }
    else{
        dhlpoints -= 1;
        chrypoints -= 1;
        toZero();
        console.log("chry " + chrypoints);
        console.log(dhlpoints);
    }    
    declarePoints();
})
ans[2].addEventListener("click", function(e){
    n = 1
    choose(e);
    if(e.target.classList.contains("chosen")){
        spdpoints += 1;
        larkpoints += 1;
        console.log("spd " + spdpoints);
        console.log("lark " + larkpoints);
    }
    else{
        spdpoints -= 1;
        larkpoints -= 1;
        toZero();
        console.log("spd " + spdpoints);
        console.log("lark " + larkpoints);
    }    
    declarePoints();
})
ans[3].addEventListener("click", function(e){
    n = 1;
    choose(e);
    if(e.target.classList.contains("chosen")){
        sunpoints += 1;
        hibipoints += 1;
        console.log("sun " + sunpoints);
        console.log("hibi " + hibipoints);
    }
    else{
        sunpoints -= 1;
        hibipoints -= 1;
        toZero();
        console.log("sun " + sunpoints);
        console.log("hibi " + hibipoints);
    }
    declarePoints();
})
ans[4].addEventListener("click", function(e){
    n = 1
    choose(e);
    if(e.target.classList.contains("chosen")){
        ranpoints += 1;
        console.log("ran  " + ranpoints);
        
    }
    else{
        ranpoints -= 1;
        toZero();
        console.log("ran " + ranpoints);
    }    
    declarePoints();
})
ans[5].addEventListener("click", function(e){
    choose(e);
    if(e.target.classList.contains("chosen")){
        hibipoints += 1;
        console.log("hibi " + hibipoints);
    }
    else{
        hibipoints -= 1;
        toZero();
        console.log("hibi " + hibipoints);
    }    
    declarePoints();
})
ans[6].addEventListener("click", function(e){
    choose(e);
    if(e.target.classList.contains("chosen")){
        larkpoints += 1;
        ranpoints += 1;
        console.log("lark  " + larkpoints);
        console.log("ran  " + ranpoints);
    }
    else{
        larkpoints -= 1;
        ranpoints -= 1;
        toZero();
        console.log("lark  " + larkpoints);
        console.log("ran " + ranpoints);
    }    
    declarePoints();
})
ans[7].addEventListener("click", function(e){
    choose(e);
    if(e.target.classList.contains("chosen")){
        chrypoints += 1;
        console.log("chry " + chrypoints);
    }
    else{
        chrypoints -= 1;
        toZero();
        console.log("chry " + chrypoints);
    }    
    declarePoints();
})
ans[8].addEventListener("click", function(e){
    choose(e);
    if(e.target.classList.contains("chosen")){
        dhlpoints += 1;
        sunpoints += 1;
        console.log("sun  " + sunpoints);
    }
    else{
        dhlpoints -= 1;
        sunpoints -= 1;
        toZero();
        console.log("sun " + sunpoints);
    }    
    declarePoints();
})
ans[9].addEventListener("click", function(e){
    choose(e);
    if(e.target.classList.contains("chosen")){
        larkpoints += 1;
        console.log("lark " + larkpoints);
    }
    else{
        larkpoints -= 1;
        toZero();
        console.log("lark " + larkpoints);
    }    
    declarePoints();
})
ans[10].addEventListener("click", function(e){
    choose(e);
    if(e.target.classList.contains("chosen")){
        ranpoints += 1;
        sunpoints += 1;
        console.log("ran  " + ranpoints);
    }
    else{
        ranpoints -= 1;
        sunpoints -= 1;
        toZero();
        console.log("ran " + ranpoints);
    }    
    declarePoints();
})
ans[11].addEventListener("click", function(e){
    choose(e);
    if(e.target.classList.contains("chosen")){
        dhlpoints += 1;
        console.log("lark " + larkpoints);
    }
    else{
        dhlpoints -= 1;
        toZero();
        console.log("lark " + larkpoints);
    }    
    declarePoints();
})
ans[12].addEventListener("click", function(e){
    choose(e);
    if(e.target.classList.contains("chosen")){
        ranpoints += 1;
        sunpoints += 1;
        console.log("ran  " + ranpoints);
    }
    else{
        ranpoints -= 1;
        sunpoints -= 1;
        toZero();
        console.log("ran " + ranpoints);
    }    
    declarePoints();
})
ans[13].addEventListener("click", function(e){
    choose(e);
    if(e.target.classList.contains("chosen")){
        spdpoints += 1;
        hibipoints += 1;
        console.log("ran  " + ranpoints);
    }
    else{
        hibipoints -= 1;
        spdpoints -= 1;
        toZero();
        console.log("hibi " + hibipoints);
    }    
    declarePoints();
})
ans[14].addEventListener("click", function(e){
    choose(e);
    if(e.target.classList.contains("chosen")){
        chrypoints += 1;
    }
    else{
        chrypoints -= 1;
        toZero();
    }    
    declarePoints();
})
ans[15].addEventListener("click", function(e){
    choose(e);
    if(e.target.classList.contains("chosen")){
        dhlpoints += 1;
        spdpoints += 1;
    }
    else{
        dhlpoints -= 1;
        spdpoints -= 1;
        toZero();
    }    
    declarePoints();
})
ans[16].addEventListener("click", function(e){
    choose(e);
    if(e.target.classList.contains("chosen")){
        ranpoints += 1;
        sunpoints += 1;
    }
    else{
        ranpoints -= 1;
        sunpoints -= 1;
        toZero();
    }    
    declarePoints();
})
ans[17].addEventListener("click", function(e){
    choose(e);
    if(e.target.classList.contains("chosen")){
        larkpoints += 1;
        hibipoints += 1;
    }
    else{
        larkpoints -= 1;
        hibipoints -= 1;
        toZero();
    }    
    declarePoints();
})
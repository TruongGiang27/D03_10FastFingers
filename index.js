
// TIME 
let time =0.5  * 60; //minutes * 60 seconds
let refreshIntervalId = setInterval(updateCountdown, 1000); //update every 1 second

function updateCountdown() {
    const minutes = Math.floor(time / 60); // rounds a number DOWN to the nearest integer
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds; 
    const countdownl = document.getElementById("countdown"); 
    countdownl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time < 0) { //stop the setInterval whe time = 0 for avoid negative time      
        clearInterval(refreshIntervalId);
        return alert("Hết giờ!!");
    }
      
}

//Random Words
let randomWords = ['dentist',"hunter","column","wealth","civilian","retailer","hallway","recovery","microphone","letter","senior","transport","circle","circle","critical","solution","detail","bear","allow","power","panic","reaction","sick","theft"];
wordHint = document.querySelector("#words");
checkWord_input = document.querySelector("#add-text");
checkBtn = document.querySelector(".check");
resetBtn = document.querySelector("#restart");

function getRandom(){
    let randomWords_length = randomWords[Math.floor(Math.random()*randomWords.length)]
    wordHint.innerText = randomWords_length;
    console.log(randomWords_length)
    checkWord_input.value = "";
}

function checkWord(){
    let userWord = checkWord_input.value.toLocaleLowerCase();
    if(!userWord)
    return alert("Hãy nhập từ!!");

    if(userWord == getRandom)
    return getRandom();
    
    
    if(userWord !== getRandom)
    return getRandom(); 
}



getRandom();
resetBtn.addEventListener("click",getRandom);
checkBtn.addEventListener("click",checkWord);
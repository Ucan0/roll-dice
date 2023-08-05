
function randomFrom1to6(){
    var randomNo = Math.floor(Math.random() * 6) + 1;
//    var path = "./images/dice"+randomNo+".png";
    return randomNo;
}


    dice1 = randomFrom1to6();
    dice2 = randomFrom1to6();

    if(dice1 > dice2) {
        document.querySelector("h1").textContent = "🏆🚩 Player 1 Wins!";
    }
    else if (dice1 < dice2) {
        document.querySelector("h1").textContent = "🏆🚩 Player 2 Wins!";
    }
    else {
        document.querySelector("h1").textContent = "🤝 Draw!";
    }

    document.querySelector("img.img1").setAttribute("src","./images/dice"+dice1+".png");
    document.querySelector("img.img2").setAttribute("src","./images/dice"+dice2+".png");

    // document.querySelector("img.img1").setAttribute("src","./images/dice2.png");
    // document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
    //document.querySelector("h1").textContent = "Draw";
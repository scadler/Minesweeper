var minesweeperObject = {
    gameInProgress: false,
    gameStarted: false,
    gameEnded: false,

    //make an array of all mine positions here
};
// rearrange the way the board is set so that after the user
//clicks it generates, this will ensure that they always click 
//on a clear spot
$("#gameStart").click(function(){
    minesweeperObject.gameInProgress = false;
    minesweeperObject.gameStarted = true;
    minesweeperObject.gameEnded = false;
    boardClear();
    // plantMines();
});
$(".square").click(function(){
    if(minesweeperObject.gameStarted === true && minesweeperObject.gameInProgress === false && minesweeperObject.gameEnded === false){
        minesweeperObject.gameInProgress = true;
        minesweeperObject.gameStarted = true;
        var parentDivId = $(this).attr('id');
        $("#"+parentDivId).append(`<img class="numberTile 0" id="tile${parentDivId}" src="https://upload.wikimedia.org/wikipedia/commons/8/80/Minesweeper_0.svg"></img>`)

        plantMines(parentDivId);
    }
    if(minesweeperObject.gameInProgress === true){
  //var thisId = $(this).contents().attr('id');
  var parentDivId = $(this).attr('id');
  if($(this).contents().attr('id') === "tile0"){
    var a = parentDivId;
    a = a-10
    if($("#"+a).contents().attr('id') === "tile0"){
        $("#"+a).css({"height": "50", "width": "50", "border":"0px"});
    }
    a = parentDivId;
    a = a-1
    if($("#"+a).contents().attr('id') === "tile0"){
        $("#"+a).css({"height": "50", "width": "50", "border":"0px"});
    }
    a = parentDivId;
    a = a+1
    if($("#"+a).contents().attr('id') === "tile0"){
        $("#"+a).css({"height": "50", "width": "50", "border":"0px"});
    }
    a = parentDivId;
    a = a+10
    if($("#"+a).contents().attr('id') === "tile0"){
        $("#"+a).css({"height": "50", "width": "50", "border":"0px"});
    }
    a = parentDivId;
  }
  else{
        if($(this).contents().attr('class') !== "bomb"){ 
            $("#"+parentDivId).css({"height": "50", "width": "50", "border":"0px"});
            $("#"+$(this).contents().attr('id')).show();
        }
        if($(this).contents().attr('class') === "bomb"){
            minesweeperObject.gameInProgress = false;
            minesweeperObject.gameEnded = true;
            $(".bomb").parent().css({"height": "40", "width": "40", "border-top":"5px solid #FBFAF9" , "border-left":"5px solid #FBFAF9", "border-bottom":"5px solid #949494", "border-right":"5px solid #949494"})
            $(".bomb").show();
            
        }
    }
}
});
function tileImagePicker(mineTileCounter, i){
    if(mineTileCounter===0){
    $("#"+i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/8/80/Minesweeper_0.svg"></img>`);
    }
    else if(mineTileCounter===1){
    $("#"+i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Minesweeper_1.svg"></img>`);
    }
    else if(mineTileCounter===2){
    $("#"+i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Minesweeper_2.svg"></img>`);
    }
    else if(mineTileCounter===3){
    $("#"+i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Minesweeper_3.svg"></img>`);
    }
    else if(mineTileCounter===4){
    $("#"+i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Minesweeper_4.svg"></img>`);
    }
    else if(mineTileCounter===5){
    $("#"+i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/4/46/Minesweeper_5.svg"></img>`);
    }
    else if(mineTileCounter===6){
    $("#"+i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Minesweeper_6.svg"></img>`);
    }
    else if(mineTileCounter===7){
    $("#"+i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Minesweeper_7.svg"></img>`);
    }
    else if(mineTileCounter===8){
    $("#"+i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Minesweeper_8.svg"></img>`);
    $("#"+i).css({"height": "50", "width": "50", "border":"0px"});
    }
    //$("#"+i).contents().hide();
}
function plantMines(parentDivId){
    //add a way to ensure bombs do not spawn on top of eachother using an object
    var i = 0;
    while(i<10){
    var xCoor = (Math.floor((Math.random()*7)+1)*10);
    var yCoor = (Math.floor((Math.random()*8)+1));
    var xyCoor = Number(xCoor+yCoor);
    if(xyCoor === parentDivId || parentDivId-11 || parentDivId-10 || parentDivId-9 || parentDivId-1 || parentDivId+1 || parentDivId+9 || parentDivId+10 || parentDivId+11){
        i=i-1
    }
    else if($("#"+xyCoor).contents().attr('class') === "mine"){
        $("#"+xyCoor).empty();
        $("#" + xyCoor).append(`<img class="bomb" id=${xyCoor} src="https://i.imgur.com/MpG5ARn.png"></img>`);
        i=i-1;
    }
    else{
    $("#" + xyCoor).append(`<img class="bomb" id=${xyCoor} src="https://i.imgur.com/MpG5ARn.png"></img>`);
    //$(".bomb").hide();
    }
    i = i+1;
    }
    boardPopulate();
}
function boardClear(){
     var i=0;
    while(i<79){
        $("#"+i).empty();
        i=i+1;
        $("#"+i).css({"height": "40", "width": "40", "border-top":"5px solid #FBFAF9" , "border-left":"5px solid #FBFAF9", "border-bottom":"5px solid #949494", "border-right":"5px solid #949494"})
    }
}
function boardPopulate(){    
    var i=1;
    while(i<79){
        if($("#" + i).contents().attr('class') !== "bomb"){
            var mineFind = i;
            var mineTileCounter=0;
            // I was having trouble compressing the following
            //code into a function so I am temporarily
            //not compressing it
            mineFind = mineFind-11;
            if($("#" + mineFind).contents().attr('class') === "bomb"){
                //console.log("bomb found at "+mineFind);
                mineTileCounter=mineTileCounter+1;
            }
            mineFind = i;
            mineFind = mineFind-10;
            if($("#" + mineFind).contents().attr('class') === "bomb"){
                //console.log("bomb found at "+mineFind);
                mineTileCounter=mineTileCounter+1;
            }
            mineFind = i;
            mineFind = mineFind-9;
            if($("#" + mineFind).contents().attr('class') === "bomb"){
                //console.log("bomb found at "+mineFind);
                mineTileCounter=mineTileCounter+1;
            }
            mineFind = i;
            mineFind = mineFind-1;
            if($("#" + mineFind).contents().attr('class') === "bomb"){
                //console.log("bomb found at "+mineFind);
                mineTileCounter=mineTileCounter+1;
            }
            mineFind = i;
            mineFind = mineFind+1;
            if($("#" + mineFind).contents().attr('class') === "bomb"){
                //console.log("bomb found at "+mineFind);
                mineTileCounter=mineTileCounter+1;
            }
            mineFind = i;
            mineFind = mineFind+9;
            if($("#" + mineFind).contents().attr('class') === "bomb"){
                //console.log("bomb found at "+mineFind);
                mineTileCounter=mineTileCounter+1;
            }
            mineFind = i;
            mineFind = mineFind+10;
            if($("#" + mineFind).contents().attr('class') === "bomb"){
                //console.log("bomb found at "+mineFind);
                mineTileCounter=mineTileCounter+1;
            }
            mineFind = i;
            mineFind = mineFind+11;
            if($("#" + mineFind).contents().attr('class') === "bomb"){
                //console.log("bomb found at "+mineFind);
                mineTileCounter=mineTileCounter+1;
            }
            //console.log(mineTileCounter+" mineTileCounte id= "+i);
            tileImagePicker(mineTileCounter, i);
        }
        i=i+1;
        mineTileCounter=0;
    }
}
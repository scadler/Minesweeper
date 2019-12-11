$("#gameStart").click(function(){
    boardClear();
    plantMines();
});
function plantMines(){
    var i = 0;
    while(i<12){
    var xCoor = (Math.floor(Math.random()*10)*7);
    console.log(xCoor+" xCoor");
    var yCoor = (Math.floor(Math.random()*7)+1);
    console.log(yCoor+" yCoor");
    var xyCoor = Number(xCoor+yCoor);
    console.log(xyCoor);
    $("#" + xyCoor).append(`<img class="bomb" id=${xyCoor} src="https://i.imgur.com/MpG5ARn.png"></img>`);
    i = i+1;
    }
}
function boardClear(){
     var i=0;
    while(i<78){
        $("#"+i).empty();
        i=i+1;
    }
}
function boardPopulate(){
    var i=1;
    while(i<78){
        //here write code for each tile to check the number of bombs
        //it and display the correct number
        //later add the mechanic that hides all tile values and shows
        //them when the corresponding tile is clicked
        i=i+1;
    }
}
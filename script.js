//https://commons.wikimedia.org/wiki/File:Minesweeper_1.svg
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
    $(".bomb").hide();
    i = i+1;
    }
    boardPopulate();
}
function boardClear(){
     var i=0;
    while(i<79){
        $("#"+i).empty();
        i=i+1;
    }
}
function boardPopulate(){    
    var i=1;
    while(i<79){
        if($("#" + i).contents().attr('class') !== "bomb"){
            console.log(i);
            var mineFind = i;
            var mineTileCounter=0;
            // I was having trouble compressing the following
            //code into a function so I am temporarily
            //not compressing it
            mineFind = mineFind-11;
            if($("#" + mineFind).contents().attr('class') === "bomb"){
                console.log("bomb found at "+mineFind);
                mineTileCounter=mineTileCounter+1;
            }
            mineFind = i;
            mineFind = mineFind-10;
            if($("#" + mineFind).contents().attr('class') === "bomb"){
                console.log("bomb found at "+mineFind);
                mineTileCounter=mineTileCounter+1;
            }
            mineFind = i;
            mineFind = mineFind-9;
            if($("#" + mineFind).contents().attr('class') === "bomb"){
                console.log("bomb found at "+mineFind);
                mineTileCounter=mineTileCounter+1;
            }
            mineFind = i;
            mineFind = mineFind-1;
            if($("#" + mineFind).contents().attr('class') === "bomb"){
                console.log("bomb found at "+mineFind);
                mineTileCounter=mineTileCounter+1;
            }
            mineFind = i;
            mineFind = mineFind+1;
            if($("#" + mineFind).contents().attr('class') === "bomb"){
                console.log("bomb found at "+mineFind);
                mineTileCounter=mineTileCounter+1;
            }
            mineFind = i;
            mineFind = mineFind+9;
            if($("#" + mineFind).contents().attr('class') === "bomb"){
                console.log("bomb found at "+mineFind);
                mineTileCounter=mineTileCounter+1;
            }
            mineFind = i;
            mineFind = mineFind+10;
            if($("#" + mineFind).contents().attr('class') === "bomb"){
                console.log("bomb found at "+mineFind);
                mineTileCounter=mineTileCounter+1;
            }
            mineFind = i;
            mineFind = mineFind+11;
            if($("#" + mineFind).contents().attr('class') === "bomb"){
                console.log("bomb found at "+mineFind);
                mineTileCounter=mineTileCounter+1;
            }
            console.log(mineTileCounter+" mineTileCounte id= "+i);
            $("#" + i).append(mineTileCounter);

        }
        i=i+1;
        mineTileCounter=0;
    }
}
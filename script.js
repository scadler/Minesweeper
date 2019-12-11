$("#gameStart").click(function(){
    plantMines();
});
function plantMines(){
    var i = 0;
    while(i<12){
    var xCoor = Math.floor(Math.random()*70);
    var yCoor = Math.floor(Math.random()*8)
    var xyCoor = Number(xCoor+yCoor);
    //if($("#" + xyCoor).contents() === ""){
    console.log(xyCoor);
    //}
    i = i+1;
    }
}
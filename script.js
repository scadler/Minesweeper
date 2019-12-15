var minesweeperObject = {
    gameInProgress: false,
    gameStarted: false,
    gameEnded: false,
    flagButtonClicked: false,

    //make an array of all mine positions here
};
// rearrange the way the board is set so that after the user
//clicks it generates, this will ensure that they always click 
//on a clear spot
$("#gameStart").click(function() {
    minesweeperObject.gameInProgress = false;
    minesweeperObject.gameStarted = true;
    minesweeperObject.gameEnded = false;
    boardClear();
    plantMines();
});
$(".square").click(function() {
    var parentDivId = $(this).attr('id');
    if (minesweeperObject.gameStarted === true && minesweeperObject.gameEnded === false) {
        minesweeperObject.gameInProgress = true;
        if($(this).contents().hasClass("flag") === true){
            $("#f"+parentDivId).remove();
            $("#"+parentDivId).css({
                    "height": "40",
                    "width": "40",
                    "border-top": "5px solid #FBFAF9",
                    "border-left": "5px solid #FBFAF9",
                    "border-bottom": "5px solid #949494",
                    "border-right": "5px solid #949494"
                })
        }
        else if (minesweeperObject.flagButtonClicked === true && $(this).contents().hasClass("flag") === false){
            $("#" + parentDivId).css({
                "height": "50",
                "width": "50",
                "border": "0px"
            });
            $("#" + parentDivId).append(`<img class="flag" id="f${parentDivId}" src="https://i.imgur.com/v0YAYw9.jpg"></img>`);
        }
         else if (minesweeperObject.gameInProgress === true) {
            var parentDivId = $(this).attr('id');
            if($(this).contents().hasClass("flag") === false){
            if ($(this).contents().attr('class') !== "bomb") {
                $("#" + parentDivId).css({
                    "height": "50",
                    "width": "50",
                    "border": "0px"
                });
                $("#" + $(this).contents().attr('id')).show();
            } else if ($(this).contents().attr('class') === "bomb") {
                minesweeperObject.gameInProgress = false;
                minesweeperObject.gameEnded = true;
                $(".bomb").parent().css({
                    "height": "40",
                    "width": "40",
                    "border-top": "5px solid #FBFAF9",
                    "border-left": "5px solid #FBFAF9",
                    "border-bottom": "5px solid #949494",
                    "border-right": "5px solid #949494"
                });
                $(".bomb").show();
            }
        }
        }
    }
});
$("#flagButtonImg").click(function() {
    minesweeperObject.flagButtonClicked = !minesweeperObject.flagButtonClicked
    if (minesweeperObject.gameStarted === true && minesweeperObject.gameEnded === false) {
        if (minesweeperObject.flagButtonClicked === true) {
            $("#flagButtonIndicator").css({
                "background-color": "#66FF33"
            })
        } else {
            $("#flagButtonIndicator").css({
                "background-color": "#FF6633"
            })
        }
    }
});

function tileImagePicker(mineTileCounter, i) {
    if (mineTileCounter === 0) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/8/80/Minesweeper_0.svg"></img>`);
    } else if (mineTileCounter === 1) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Minesweeper_1.svg"></img>`);
    } else if (mineTileCounter === 2) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Minesweeper_2.svg"></img>`);
    } else if (mineTileCounter === 3) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Minesweeper_3.svg"></img>`);
    } else if (mineTileCounter === 4) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Minesweeper_4.svg"></img>`);
    } else if (mineTileCounter === 5) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/4/46/Minesweeper_5.svg"></img>`);
    } else if (mineTileCounter === 6) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Minesweeper_6.svg"></img>`);
    } else if (mineTileCounter === 7) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Minesweeper_7.svg"></img>`);
    } else if (mineTileCounter === 8) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Minesweeper_8.svg"></img>`);
        $("#s" + i).css({"height": "50","width": "50","border": "0px"
        });
    }
    $("#s" + i).contents().hide();
}

function plantMines() {
    //add a way to ensure bombs do not spawn on top of eachother using an object
    var i = 0;
    while (i < 10) {
        var xCoor = (Math.floor((Math.random() * 7) + 1) * 10);
        var yCoor = (Math.floor((Math.random() * 8) + 1));
        var xyCoor = Number(xCoor + yCoor);
        if ($("#s" + xyCoor).contents().attr('class') === "mine") {
            $("#s" + xyCoor).parent().empty();
            $("#s" + xyCoor).append(`<img class="bomb" id=${xyCoor} src="https://i.imgur.com/MpG5ARn.png"></img>`);
            i = i - 1;
        } else {
            $("#s" + xyCoor).append(`<img class="bomb" id=${xyCoor} src="https://i.imgur.com/MpG5ARn.png"></img>`);
            $(".bomb").hide();
        }
        i = i + 1;
    }
    boardPopulate();
}

function boardClear() {
    var i = 0;
    while (i < 79) {
        $("#s" + i).empty();
        i = i + 1;
        $("#s" + i).css({
            "height": "40",
            "width": "40",
            "border-top": "5px solid #FBFAF9",
            "border-left": "5px solid #FBFAF9",
            "border-bottom": "5px solid #949494",
            "border-right": "5px solid #949494"
        })
    }
}

function boardPopulate() {
    var i = 1;
    while (i < 79) {
        if ($("#s" + i).contents().attr('class') !== "bomb") {
            var mineFind = i;
            var mineTileCounter = 0;
            // I was having trouble compressing the following
            //code into a function so I am temporarily
            //not compressing it
            mineFind = mineFind - 11;
            if ($("#s" + mineFind).contents().attr('class') === "bomb") {
                mineTileCounter = mineTileCounter + 1;
            }
            mineFind = i;
            mineFind = mineFind - 10;
            if ($("#s" + mineFind).contents().attr('class') === "bomb") {
                mineTileCounter = mineTileCounter + 1;
            }
            mineFind = i;
            mineFind = mineFind - 9;
            if ($("#s" + mineFind).contents().attr('class') === "bomb") {
                mineTileCounter = mineTileCounter + 1;
            }
            mineFind = i;
            mineFind = mineFind - 1;
            if ($("#s" + mineFind).contents().attr('class') === "bomb") {
                mineTileCounter = mineTileCounter + 1;
            }
            mineFind = i;
            mineFind = mineFind + 1;
            if ($("#s" + mineFind).contents().attr('class') === "bomb") {
                mineTileCounter = mineTileCounter + 1;
            }
            mineFind = i;
            mineFind = mineFind + 9;
            if ($("#s" + mineFind).contents().attr('class') === "bomb") {
                mineTileCounter = mineTileCounter + 1;
            }
            mineFind = i;
            mineFind = mineFind + 10;
            if ($("#s" + mineFind).contents().attr('class') === "bomb") {
                mineTileCounter = mineTileCounter + 1;
            }
            mineFind = i;
            mineFind = mineFind + 11;
            if ($("#s" + mineFind).contents().attr('class') === "bomb") {
                mineTileCounter = mineTileCounter + 1;
            }
            tileImagePicker(mineTileCounter, i);
        }
        i = i + 1;
        mineTileCounter = 0;
    }
}
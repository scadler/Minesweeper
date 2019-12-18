var minesweeperObject = {
    gameInProgress: false,
    gameStarted: false,
    gameEnded: false,
    flagButtonClicked: false,
    bombButtonClicked: false,
    foundBlank: false,
    blankArray: [],
    minesFound: 0,
};
$("#gameStart").click(function() {
    minesweeperObject.gameInProgress = false;
    minesweeperObject.gameStarted = true;
    minesweeperObject.gameEnded = false;
    minesweeperObject.foundBlank = false;
    minesweeperObject.blankArray = [];
    minesweeperObject.minesFound = 0,
    boardClear();
    plantMines();

});
$(".square").click(function() {
    var parentDivId = $(this).attr('id');
    if (minesweeperObject.gameStarted === true && minesweeperObject.gameEnded === false) {
        minesweeperObject.gameInProgress = true;
        if ($(this).contents().hasClass("flag") === true) {
            flagCounterUpdateSubtract()
            $("#f" + parentDivId).remove();
            $("#" + parentDivId).css({
                "height": "40",
                "width": "40",
                "border-top": "5px solid #FBFAF9",
                "border-left": "5px solid #FBFAF9",
                "border-bottom": "5px solid #949494",
                "border-right": "5px solid #949494"
            })
        } else if (minesweeperObject.flagButtonClicked === true && $(this).contents().hasClass("flag") === false && $(this).contents().is(":hidden") === true) {
            flagCounterUpdateAdd()
            $("#" + parentDivId).css({
                "height": "50",
                "width": "50",
                "border": "0px"
            });
            $("#" + parentDivId).append(`<img class="flag" id="f${parentDivId}" src="https://i.imgur.com/v0YAYw9.jpg"></img>`);
        } else if (minesweeperObject.gameInProgress === true) {
            var parentDivId = $(this).attr('id');
            if ($(this).contents().hasClass("flag") === false && minesweeperObject.flagButtonClicked === false) {
                if ($(this).contents().hasClass("0") === true) {
                    thisId = $(this).attr('id');
                    blankChain(thisId)
                }
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
                        "height": "50",
                        "width": "50",
                        "border": "0px"
                    });
                    $(".bomb").css({
                        "height": "47",
                        "width": "47",
                        "border": "1.5px solid #757575"
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
$("#bombButtonImg").click(function() {
    minesweeperObject.bombButtonClicked = !minesweeperObject.bombButtonClicked
    if (minesweeperObject.gameStarted === true && minesweeperObject.gameEnded === false) {
        if (minesweeperObject.bombButtonClicked === true) {
            $("#bombButtonIndicator").css({
                "background-color": "#66FF33"
            })
        } else {
            $("#bombButtonIndicator").css({
                "background-color": "#FF6633"
            })
        }
    }
});

function tileImagePicker(mineTileCounter, i) {
    if (mineTileCounter === 0) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/8/80/Minesweeper_0.svg"></img>`);
        if (minesweeperObject.bombButtonClicked === true) {
            if (i !== "10" && i !== "20" && i !== "30" && i !== "40" && i !== "50" && i !== "60" && i !== "70") {
                minesweeperObject.blankArray.push("#s" + i);
            }
        }
        $("#s" + i).contents().hide();
    } else if (mineTileCounter === 1) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Minesweeper_1.svg"></img>`);
        $("#s" + i).contents().hide();
    } else if (mineTileCounter === 2) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Minesweeper_2.svg"></img>`);
        $("#s" + i).contents().hide();
    } else if (mineTileCounter === 3) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Minesweeper_3.svg"></img>`);
        $("#s" + i).contents().hide();
    } else if (mineTileCounter === 4) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Minesweeper_4.svg"></img>`);
        $("#s" + i).contents().hide();
    } else if (mineTileCounter === 5) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/4/46/Minesweeper_5.svg"></img>`);
        $("#s" + i).contents().hide();
    } else if (mineTileCounter === 6) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Minesweeper_6.svg"></img>`);
        $("#s" + i).contents().hide();
    } else if (mineTileCounter === 7) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Minesweeper_7.svg"></img>`);
        $("#s" + i).contents().hide();
    } else if (mineTileCounter === 8) {
        $("#s" + i).append(`<img class="numberTile ${mineTileCounter}" id="tile${i}" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Minesweeper_8.svg"></img>`);
        $("#s" + i).contents().hide();
    };
}

function plantMines() {
    var i = 0;
    while (i < 20) {
        var xCoor = (Math.floor((Math.random() * 10)) * 10);
        var yCoor = (Math.floor((Math.random() * 10)));
        var xyCoor = Number(xCoor + yCoor);
        if ($("#s" + xyCoor).contents().attr('class') === "bomb") {
            i = i - 1;
        } else {
            $("#s" + xyCoor).append(`<img class="bomb" id=${xyCoor} src="https://i.imgur.com/MpG5ARn.png"></img>`);
            $(".bomb").hide();
        }
        i = i + 1;
    }
    mineDuplicateDelete()
    boardPopulate();
}

function boardClear() {
    var i = -1;
    while (i < 100) {
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
    var i = 0;
    while (i < 100) {
        if ($("#s" + i).contents().attr('class') !== "bomb") {
            var mineFind = i;
            var mineTileCounter = 0;
            //the n%10 === X statements are to prevent left and right border tiles from miscounting the # of mines they border
            if (i % 10 === 0) {
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
                mineFind = mineFind + 1;
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
            } else if (i % 10 === 9) {
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
                mineFind = mineFind - 1;
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
            } else {
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
            }
            tileImagePicker(mineTileCounter, i);
        }
        i = i + 1;
        mineTileCounter = 0;
    }
    if (minesweeperObject.bombButtonClicked === true) {
        var i = 2
        while (i > 1) {
            i = i + 1
            var blankArrayLength = minesweeperObject.blankArray.length
            var arrayIndex = Math.floor(Math.random() * blankArrayLength)
            var arrayOutput = minesweeperObject.blankArray[arrayIndex]
            if (arrayOutput !== "#s10" && arrayOutput !== "#s20" && arrayOutput !== "#s30" && arrayOutput !== "#s40" && arrayOutput !== "#s50" && arrayOutput !== "#s60" && arrayOutput !== "#s70" && arrayOutput !== "#s80") {
                $(arrayOutput).contents().show();
                $(arrayOutput).css({
                    "height": "50",
                    "width": "50",
                    "border": "0px"
                });
                break;
            }
        }
    }
}

function blankChain(thisId) {
    if(thisId.substring(1) % 10 === 0){
        thisId = thisId.substring(1)
    thisId = thisId - 10
    reveal(thisId)
    thisId = thisId + 1
    reveal(thisId)
    thisId = thisId + 10
    reveal(thisId)
    thisId = thisId + 10
    reveal(thisId)
    thisId = thisId - 1
    reveal(thisId)
    } else if (thisId.substring(1) % 10 === 9){
        thisId = thisId.substring(1)
    thisId = thisId - 10
    reveal(thisId)
    thisId = thisId -1
    reveal(thisId)
    thisId = thisId + 10
    reveal(thisId)
    thisId = thisId + 10
    reveal(thisId)
    thisId = thisId + 1
    reveal(thisId)
    } else{
    thisId = thisId.substring(1)
    thisId = thisId - 11
    reveal(thisId)
    thisId = thisId + 10
    reveal(thisId)
    thisId = thisId + 10
    reveal(thisId)
    thisId = thisId + 1
    reveal(thisId)
    thisId = thisId + 1
    reveal(thisId)
    thisId = thisId - 10
    reveal(thisId)
    thisId = thisId - 10
    reveal(thisId)
    thisId = thisId - 1
    reveal(thisId)
    }
}

function reveal(thisId) {
    if ($("#s" + thisId).contents().length > 1) {
        //this line stops code from runnng if flag present
    } else {
        $("#s" + thisId).contents().show();
        $("#s" + thisId).css({
            "height": "50",
            "width": "50",
            "border": "0px"
        });
    }

}

function mineDuplicateDelete() {
    var i = 0;
    while (i < 100) {
        if ($("#s" + i).contents().attr('class') === "bomb") {
            $("#s" + i).empty();
            $("#s" + i).append(`<img class="bomb" id=${i} src="https://i.imgur.com/MpG5ARn.png"></img>`);
            $(".bomb").hide();
            minesweeperObject.minesFound = minesweeperObject.minesFound + 1
        }
        i = i + 1;
    }
    if (minesweeperObject.minesFound > 9) {
        minesweeperObject.minesFound = "0" + minesweeperObject.minesFound
    } else {
        minesweeperObject.minesFound = "00" + minesweeperObject.minesFound
    }
    $("#flagCounter").text(minesweeperObject.minesFound);
}




function flagCounterUpdateAdd() {
    var flagCounterVal = Number($("#flagCounter").text());
    flagCounterVal = flagCounterVal - 1;
    if (flagCounterVal < 100 && flagCounterVal > 9) {
        flagCounterVal = "0" + flagCounterVal
        $("#flagCounter").text(flagCounterVal);
    } else if (flagCounterVal < 10 && flagCounterVal > 0) {
        flagCounterVal = "00" + flagCounterVal
        $("#flagCounter").text(flagCounterVal);
    } else if (flagCounterVal === 0) {
        $("#flagCounter").text("000");
        isMinefieldCleared()
    } else if (flagCounterVal > -10 && flagCounterVal < 1) {
        flagCounterVal = flagCounterVal * (-1);
        flagCounterVal = "-0" + flagCounterVal
        $("#flagCounter").text(flagCounterVal);
    } else if (flagCounterVal > -100 && flagCounterVal < -9) {
        $("#flagCounter").text(flagCounterVal);
    }
}

function flagCounterUpdateSubtract() {
    var flagCounterVal = Number($("#flagCounter").text());
    flagCounterVal = flagCounterVal + 1;
    if (flagCounterVal < 100 && flagCounterVal > 9) {
        flagCounterVal = "0" + flagCounterVal
        $("#flagCounter").text(flagCounterVal);
    } else if (flagCounterVal < 10 && flagCounterVal > 0) {
        flagCounterVal = "00" + flagCounterVal
        $("#flagCounter").text(flagCounterVal);
    } else if (flagCounterVal === 0) {
        $("#flagCounter").text("000");
        isMinefieldCleared()
    } else if (flagCounterVal > -10 && flagCounterVal < 1) {
        flagCounterVal = flagCounterVal * (-1);
        flagCounterVal = "-0" + flagCounterVal
        $("#flagCounter").text(flagCounterVal);
    } else if (flagCounterVal > -100 && flagCounterVal < -9) {
        $("#flagCounter").text(flagCounterVal);
    }
}
function isMinefieldCleared() {
    var flaggedMines = 0
    var i = 0
    while (i < 100) {
        i = i + 1;
        if ($("#s" + i).contents().length === 2) {
            flaggedMines = flaggedMines + 1;
            if (flaggedMines === (minesweeperObject.minesFound - 1)) {
                console.log("won")
                break;
            }
        }
    }
}
var buttonsq = ["red", "blue","green","yellow"];
var patt = [];
var gamepat = [];
var level = 0;
var started = false;

function nextsq(){
    level++;
  $("#level-title").text("Level " + level);
    var a  = Math.random();
    a = (a * 4);
    var b = Math.floor(a);
    var rand = buttonsq[b];
    patt.push(rand);
    $("#" + rand).fadeIn(100).fadeOut(100).fadeIn(100);
    gamepat=[];
}


$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    console.log(userChosenColour);
    gamepat.push(userChosenColour);
    console.log(gamepat);
    $(" #"+userChosenColour).addClass('pressed');
    var d = new Audio('./sounds/'+userChosenColour+'.mp3');
    d.play();
    setTimeout(function(){$(" #"+userChosenColour).removeClass('pressed');},100);
    ans(gamepat.length-1);
  });


  $(document).keypress(function() {
    if (!started) {
  
      
      $("#level-title").text("Level " + level);
      nextsq();
      started = true;
    }
  });

  function ans(curlev){
    if(gamepat[curlev]=== patt[curlev])
    {
        console.log("Success");
        if(gamepat.length===patt.length){
            setTimeout(function(){nextsq();},1000);
        }
    }
    else{
        console.log("Wrong");
        var aq = new Audio('./sounds/wrong.mp3');
        aq.play();
        $('body').addClass('game-over');
        setTimeout(function(){
            $('body').removeClass('game-over');
        },500);
        $('h1').text("Game over: Press anyKey to Restart");
        $(document).one('keypress', startov);
    }

  }
  function startov(){
    level = 0;
    patt = [];
    gamepat = [];
    started = false;
    $("#level-title").text("Press A Key to Start");

  }
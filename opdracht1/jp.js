
var speler = true;
    function background(t){
      var div = t.id;
        if (speler){
          document.getElementById(div).style.backgroundColor = "#FFD700";
          speler = false;
          document.getElementById(div).innerHTML ="<div class='center'><h1 class = 'een'>" + "0" +"</h1></div>";
        }
        else{
          document.getElementById(div).style.backgroundColor = "#FF0000";
          speler = true;
          document.getElementById(div).innerHTML ="<div class='center'><h1 class = 'een'>" + "×" +"</h1></div>";
        }
    }

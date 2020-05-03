$("#dropdownMenu2").text("00:00:00");
var h = 0;
var m = 0;
var s = 0;

$(".dropdown-item").click(function(){
    var selText = $(this).text();
    $("#dropdownMenu2").text(selText);

    s = parseInt((selText.substring(6, 8)));
});


$("#start").click(function(){
    updateClock();  
});

function updateClock() {
    $("#dropdownMenu2").text("00:00:"+ checkTime(s));
    
    if(s==0){
        alert('Final');
    }else{
        s-=1;
        setTimeout("updateClock()",1000);
    }
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  $("#reset").on ("click", function(){
    $("#dropdownMenu2").text("00:00:00");
    s=0;

  });
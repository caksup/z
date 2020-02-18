// Set the date we're counting down to
var countDownDate = new Date("Feb 18, 2020 21:10:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
// Get todays date and time
    var now = new Date().getTime();
// Find the distance between now an the count down date
    var distance = countDownDate - now;
// Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// Output the result in an element with id="demo"
    document.getElementById("muncul").innerHTML = "<mn>" + "<div class='box'><b><bl>♥</bl><br>" + days + "<br><sm>hari</sm><hr>" + hours + "<br><sm>jam</sm><br>" + minutes + "<br><sm>menit</sm><br>" + seconds + "<br><sm>detik</sm><br>" + "<bl>♥</bl>" + "</b></div>"+
"</mn>" ;
// If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
      document.getElementById("muncul").innerHTML = "<mb>" + "<div class='box'><b>" + "04 Juni 2020 | 08:00 WIB <br /><bl> &#10148; </bl> Acara Berlangsung..." + "</div>" + "</mb>";
     document.getElementById("fw").style.display = "block";
    }
}, 1000);

function knop(){
    document.querySelector(".foto1").style.display="none";
    document.querySelector(".foto11").style.display="inline";
    document.querySelector(".but1").style.opacity="0";
}

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline="January 01 2026 00:00:00 GMT+0300"; //for Ukraine
  initializeClock('countdown', deadline);

  function fo2(){
    document.querySelector(".f02").style.display="none";
    document.querySelector(".fo2").style.display="inline";
}
function fo1(){
  document.querySelector(".f01").style.display="none";
  document.querySelector(".fo1").style.display="inline";
}
function fo3(){
  document.querySelector(".f03").style.display="none";
  document.querySelector(".fo3").style.display="inline";
}
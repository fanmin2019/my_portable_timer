var start_count_down = () => {
  var counter = 0

  var id = setInterval(function () {
    if(counter > 30 * 60) {
      clearInterval(id)
      alert("30分が過ぎました！")
    }
    log("aaa")
    counter += 1
    var elm = document.getElementById('id-timer-circle')
    var text_elm = document.getElementById('id-time-now')
    var degree = 1 /( 30 * 60) * counter * 180

    var miliSecs =  24 * 60 * 60 * 1000
    var diff_time = 30 * 60 * 1000 - counter * 1000
    var h = String(Math.floor(diff_time / 3600000) + 100).substring(1);
    var m = String(Math.floor((diff_time - h * 3600000)/60000)+ 100).substring(1);
    var s = String(Math.round((diff_time - h * 3600000 - m * 60000)/1000)+ 100).substring(1);
    var t = new Timer()
    var minute =  t.addZero(m)
    var secs =  t.addZero(s)
    // log("minute secs", m, s)

    text_elm.innerText = m + ":" +  s
    elm.style.transform = 'rotate(' + degree + 'deg)'
    // circle.animate(make)
  }, 1000)
}

var btn = document.getElementById("id-start-time-up")
btn.addEventListener('click', function () {
  start_count_down()
})

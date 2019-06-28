  class StopWatchTimer {
      constructor() {
      this.interval_id = ""
      this.stop_time = ""
      this.timerCounter = 0
      this.start_time = ""
      this.pattern = {
        // START STOP RESUME RESET
        "start": [false, true, false, false],
        "stop": [false, false, true, true],
        "resume": [false, true, false,false],
        "reset": [true, false, false, false],
      },

     this.btn_list =  {
       "start": document.getElementById('id-btn-start'),
       "stop": document.getElementById('id-btn-stop'),
       "resume": document.getElementById('id-btn-resume'),
       "reset": document.getElementById('id-btn-reset'),
     }

    }

    initialize_stop_watch(){
         var cdt = new Timer()
         var timer='';
         timer += cdt.template_time('day', cdt.addZero(0))
         timer += cdt.template_time('hour', cdt.addZero(0))
         timer += cdt.template_time('min', cdt.addZero(0))
         timer += cdt.template_time('sec', cdt.addZero(0))
         document.getElementById('stopwatch').innerHTML = timer;
    }

    countup(start_time, timerCounter) {
      var timer_id = setInterval(function () {
          var this_time = new Date()
          var diff_time = this_time - start_time + timerCounter
          log("diff_time", diff_time)
          var miliSecs =  24 * 60 * 60 * 1000
          var diff_day = Math.floor(diff_time / miliSecs);
          var diff_hour = Math.floor((diff_time % miliSecs) / (60 * 60 * 1000));
          var diff_min = Math.floor((diff_time % miliSecs)/( 60 * 1000)) % 60;
          var diff_sec = Math.floor((diff_time % miliSecs)/1000) % 60 % 60;
          var t = new Timer()
          var timer='';
          timer += t.template_time('day', t.addZero(diff_day))
          timer += t.template_time('hour', t.addZero(diff_hour))
          timer += t.template_time('min', t.addZero(diff_min))
          timer += t.template_time('sec', t.addZero(diff_sec))
          document.getElementById('stopwatch').innerHTML = timer;
      }, 1000);
      return timer_id
    }

     startStopwatch () {
       log("startStopwatch start")
       this.start_time = new Date()
       log(" this.start_time",  this.start_time)
       this.interval_id = this.countup(this.start_time, 0)
       this.toggleButton(this.pattern["start"])
     }

     stopwatch () {
         log("stop クリックしたよ")
         clearInterval(this.interval_id)
         this.stop_time = new Date()
         log("stopwathc", this.timerCounter)
         this.toggleButton(this.pattern["stop"])
     }

     resumewatch () {

       log("resumewatch stop_time", this.stop_time, new Date())
       this.timerCounter += this.stop_time - this.start_time
       log("this.timerCounter", this.timerCounter)
       this.start_time = new Date()
       this.interval_id = this.countup(this.start_time,  this.timerCounter)
       this.toggleButton(this.pattern["resume"])
     }

     resetwatch () {
       log("reset")
       clearInterval(this.interval_id)
       this.toggleButton(this.pattern["reset"])
       var timer='';
       var cdt = new Timer()
       timer += cdt.template_time('day', cdt.addZero(0))
       timer += cdt.template_time('hour', cdt.addZero(0))
       timer += cdt.template_time('min', cdt.addZero(0))
       timer += cdt.template_time('sec', cdt.addZero(0))
       document.getElementById('stopwatch').innerHTML = timer;
     }

     bindEventsForStopWatch () {
       var self = this
      this.btn_list['start'].addEventListener('click', function () {
        self.startStopwatch()
      })

      this.btn_list['stop'].addEventListener('click', function () {
         self.stopwatch()
       })

       this.btn_list['resume'].addEventListener('click', function () {
          self.resumewatch()
        })

        this.btn_list['reset'].addEventListener('click', function () {
           self.resetwatch()
         })
}

     toggleButton(status_list) {
       // log("status_list", status_list)
       var keyList = ["start", "stop", "resume", "reset"]
       for (var i = 0; i < status_list.length; i++) {
         var s = status_list[i]
         var b = this.btn_list[keyList[i]]
         log("s, b", s, b)
         if(s) {
           b.classList.remove('inactive')
         } else {
           b.classList.add('inactive')
         }
       }
     }
}


 //
 //  startStopwatch: function () {
 //    log("時間計測始まるよ")
 //    //object化する必要がある
 //    var start_time = new Date()
 //    interval_id = this.countup(start_time)
 //    this.toggleButton("start", pattern["start"])
 //  },
 //
 //  stopwatch: function () {
 //      log("stop クリックしたよ")
 //      clearInterval(interval_id)
 //      // stop_time = new Date()
 //      this.toggleButton("stop", pattern["stop"])
 //  },
 //
 //  resumewatch: function () {
 //    this.interval_id = this.countup(this.stop_time)
 //    this.toggleButton("resume", pattern["resume"])
 //  },
 //
 //  resetwatch: function () {
 //    log("reset")
 //    clearInterval(this.interval_id)
 //    this.toggleButton("reset", pattern["reset"])
 //    var timer='';
 //    var cdt = new Timer()
 //    timer += cdt.template_time('day', cdt.addZero(0))
 //    timer += cdt.template_time('hour', cdt.addZero(0))
 //    timer += cdt.template_time('min', cdt.addZero(0))
 //    timer += cdt.template_time('sec', cdt.addZero(0))
 //    document.getElementById('stopwatch').innerHTML = timer;
 //  },
 //
 //  pattern: {
 //    // START STOP RESUME RESET
 //    "start": [false, true, false, false],
 //    "stop": [false, false, true, true],
 //    "resume": [false, true, false,false],
 //    "reset": [true, false, false, false],
 //  },
 //
 // btn_list: {
 //   "start": document.getElementById('id-btn-start'),
 //   "stop": document.getElementById('id-btn-stop'),
 //   "resume": document.getElementById('id-btn-resume'),
 //   "reset": document.getElementById('id-btn-reset'),
 // },
 //
 //  bindEventsForStopWatch: function () {
 //   btn_list['start'].addEventListener('click', function () {
 //     startStopwatch()
 //   })
 //
 //   btn_list['stop'].addEventListener('click', function () {
 //      stopwatch()
 //    })
 //
 //    btn_list['resume'].addEventListener('click', function () {
 //       resumewatch()
 //     })
 //
 //     btn_list['reset'].addEventListener('click', function () {
 //        resetwatch()
 //      })
 // },
 //
 //  toggleButton: function (key, status_list) {
 //    // var b1 = document.getElementById('id-btn-start')
 //    // var b2 = document.getElementById('id-btn-stop')
 //    // var b3 = document.getElementById('id-btn-resume')
 //    // var b4 = document.getElementById('id-btn-reset')
 //    // var btn_list = [b1, b2, b3, b4,]
 //    for (var i = 0; i < status_list.length; i++) {
 //      var s = status_list[i]
 //      var b = this.btn_list[key]
 //      if(s) {
 //        log("s, b", s, b)
 //        b.classList.remove('inactive')
 //      } else {
 //        b.classList.add('inactive')
 //      }
 //    }
 //  },

// }
// log("wawa2")
//
// var interval_id
// var stop_time
// var countup = function (start_time) {
//   var timer_id = setInterval(function () {
//       var this_time = new Date()
//       var diff_day=Math.floor((this_time- start_time)/(24*60*60*1000));
//       var diff_hour=Math.floor(((this_time- start_time)%(24*60*60*1000))/(60*60*1000));
//       var diff_min=Math.floor(((this_time- start_time)%(24*60*60*1000))/(60*1000))%60;
//       var diff_sec=Math.floor(((this_time- start_time)%(24*60*60*1000))/1000)%60%60;
//       log("diff_sec", diff_day, diff_hour, diff_min, diff_sec)
//       var cdt = new CountdownTimer()
//       var timer='';
//       timer += cdt.template_time('day', cdt.addZero(diff_day))
//       timer += cdt.template_time('hour', cdt.addZero(diff_hour))
//       timer += cdt.template_time('min', cdt.addZero(diff_min))
//       timer += cdt.template_time('sec', cdt.addZero(diff_sec))
//       document.getElementById('stopwatch').innerHTML = timer;
//       stop_time = this_time
//       log("stop_time", stop_time)
//   }, 1000);
//   return timer_id
// }

// var startStopwatch = function () {
//   log("時間計測始まるよ")
//   //object化する必要がある
//   var start_time = new Date()
//   interval_id = countup(start_time)
//   toggleButton(pattern["start"])
//
// }

// var stopwatch = function () {
//     log("stop クリックしたよ")
//     clearInterval(interval_id)
//     // stop_time = new Date()
//     toggleButton(pattern["stop"])
// }

// var resumewatch = function () {
//   interval_id = countup(stop_time)
//   toggleButton(pattern["resume"])
// }
//
// var resetwatch = function () {
//   log("reset")
//   clearInterval(interval_id)
//   toggleButton(pattern["reset"])
//   var timer='';
//   var cdt = new CountdownTimer()
//   timer += cdt.template_time('day', cdt.addZero(0))
//   timer += cdt.template_time('hour', cdt.addZero(0))
//   timer += cdt.template_time('min', cdt.addZero(0))
//   timer += cdt.template_time('sec', cdt.addZero(0))
//   document.getElementById('stopwatch').innerHTML = timer;
// }

// var resetButton = function (btn_name) {
//   // var es = document.querySelectorAll(".class-stop-watch")
//   // for (var i=0; i < es.length; i++) {
//   //   var e = es[i]
//   //   log()
//   //   if(e.classList.contains('inactive')) {
//   //     e.classList.remove('inactive')
//   //   } else {
//   //     e.classList.add('inactive')
//   //   }
//   var list = {
//     "start":startClicked,
//     "stop":stopClicked,
//     "resume":resumeClicked,
//     "reset":resetClicked,
//   }
//   list[btn_name]()
// }

// var toggleButton = function (e) {
//     if(e.classList.contains('inactive')) {
//       e.classList.remove('inactive')
//     } else {
//       e.classList.add('inactive')
//     }
// }


// var pattern = {
//   // START STOP RESUME RESET
//   "start": [false, true, false, false],
//   "stop": [false, false, true, true],
//   "resume": [false, true, false,false],
//   "reset": [true, false, false, false],
// }
//
// var toggleButton = function (status_list) {
//   var b1 = document.getElementById('id-btn-start')
//   var b2 = document.getElementById('id-btn-stop')
//   var b3 = document.getElementById('id-btn-resume')
//   var b4 = document.getElementById('id-btn-reset')
//   var btn_list = [b1, b2, b3, b4,]
//   for (var i = 0; i < status_list.length; i++) {
//     var s = status_list[i]
//     var b = btn_list[i]
//     if(s) {
//       log("s, b", s, b)
//       b.classList.remove('inactive')
//     } else {
//       b.classList.add('inactive')
//     }
//   }
// }

 // var startClicked = function () {
 //   var b1 = document.getElementById('id-btn-start')
 //   b1.classList.add('inactive')
 //   var b2 = document.getElementById('id-btn-stop')
 //   b2.classList.remove('inactive')
 // }
 //
 // var stopClicked = function () {
 //   var b1 = document.getElementById('id-btn-stop')
 //   b1.classList.add('inactive')
 //   var b2 = document.getElementById('id-btn-reset')
 //   b2.classList.remove('inactive')
 //   var b3 = document.getElementById('id-btn-resume')
 //   b3.classList.remove('inactive')
 // }
 //
 //   var resumeClicked = function () {
 //     var b1 = document.getElementById('id-btn-reset')
 //     b1.classList.add('inactive')
 //     var b2 = document.getElementById('id-btn-stop')
 //     b2.classList.remove('inactive')
 //     var b3 = document.getElementById('id-btn-resume')
 //     b3.classList.add('inactive')
 //   }
 //
 //
 //   var resetClicked = function () {
 //     var b1 = document.getElementById('id-btn-reset')
 //     b1.classList.add('inactive')
 //     var b2 = document.getElementById('id-btn-stop')
 //     b2.classList.add('inactive')
 //     var b3 = document.getElementById('id-btn-resume')
 //     b3.classList.add('inactive')
 //     var b4 = document.getElementById('id-btn-start')
 //     b4.classList.remove('inactive')
 //   }

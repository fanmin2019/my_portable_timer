class Timer {
  constructor() {
    
  }

  template_time(type, number) {
    var t = `
    <span class="number-wrapper">
    	<div class="line">
    	</div>
    	<div class="caption">
    		${type}s
    	</div>
    	<span contentEditable class="number ${type}">
    		${number}
    	</span>
    </span>
    `
    return t
  }

  addZero(num){
    return ('0'+num).slice(-2);
  }

}

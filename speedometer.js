function new_value(){
		var x=document.getElementById("user_value").value;
		RPM(x);
	}
function RPM(val) {
   var opts = {
      angle: 0, 
      lineWidth: 0.38, 
      radiusScale: 1, 
      pointer: {
         length: 0.6, 
         strokeWidth: 0.035, 
         color: '#000000' 
      },

      limitMax: true, 
      limitMin: true,
      colorStart: '#A01313',
      colorStop: '#0D14DB',
      strokeColor: '#EEEEEE', 
      generateGradient: true,
      highDpiSupport: true,
      staticZones: [
         {strokeStyle: "#30B32D", min: 0, max: 60}, 
         {strokeStyle: "#FFDD00", min: 60, max: 80}, 
         {strokeStyle: "#F03E3E", min: 80, max: 100}
      ],
      renderTicks: {
    divisions: 10,
    divWidth: 1.1,
    divLength: 0.53,
    divColor: '#333333',
    subDivisions: 10,
    subLength: 0.23,
    subWidth: 0.6,
    subColor: '#666666'
  }
   };
   var target = document.getElementById('canvas_new'); 
   var gauge = new Gauge(target).setOptions(opts); 
   gauge.maxValue = 100; 
   gauge.setMinValue(0);
   gauge.animationSpeed = 1; 
   gauge.set(val);
   document.getElementById("user_value").textContent = val;
}

RPM(50);
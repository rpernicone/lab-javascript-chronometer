 //Constructor
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
   // this.ms = 0;
 }
 Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval( () => {  
        this.currentTime ++;
        this.setTime();
        printTime();
        }, 1000);
   //       con un intervalo de 10 y otra arrow function dentro de Chronometer.prototype.startClick funciona bien pero se descomponía el stop y reset.
   //  this.intervalId = setInterval ( () => {
   //     this.ms ++
   //     this.setTime();
   //     printTime()
   //  },10)
 };

 Chronometer.prototype.setMinutes = function () {
    var m  = Math.floor(this.currentTime/60);
    return m;
 };

 Chronometer.prototype.setSeconds = function () {
    let s = this.currentTime % 60;
    return s;
 };

 Chronometer.prototype.twoDigitsNumber = function (value) {
    if(value < 10){
        return "0" + value 
    } 
    return value.toString()
 };

 Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    this.milliseconds = this.twoDigitsNumber(this.setMilliseconds());
 };

 Chronometer.prototype.setMilliseconds = function () {
    let ms = (this.ms/100)
    return ms;
 };

 Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
 };

 Chronometer.prototype.splitClick = function () {

 };

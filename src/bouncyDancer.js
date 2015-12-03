var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bouncyDancer"></span>');
  this.setPosition(top,left);
  this.lineUp();
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

/*BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};*/

BouncyDancer.prototype.move = function() {
  setTimeout(this.step.bind(this), Math.random() * 1000)
}

BouncyDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };

/*  var styleSettings1 = {
    top: top 
  }*/
  this.$node.css(styleSettings);
};

BouncyDancer.prototype.lineUp = function(position) {
  window.dancers.forEach(function(val, i) {
    var styleSettings = {
      top: i + 60 * i,
      left: 10
    };
    val.$node.css(styleSettings);
  })
}
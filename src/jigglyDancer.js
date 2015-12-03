var JigglyDancer = function(top, left, timeBetweenSteps) {
  this.$nodeBig = $('<span class="jigglyBigDancer"></span>');
  this.$nodeSmall = $('<span class="jigglySmallDancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top,left);
};

JigglyDancer.prototype = Object.create(Dancer.prototype);
JigglyDancer.prototype.constructor = JigglyDancer;

JigglyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$nodeBig.toggle();
};

JigglyDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$nodeBig.css(styleSettings);
  this.$nodeSmall.css(styleSettings);
};
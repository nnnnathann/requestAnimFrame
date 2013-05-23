(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return (root.requestAnimFrame = factory());
        });
    } else {
        root.requestAnimFrame = factory();
    }
}(this, function () {
	// shim layer with setTimeout fallback
    return (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();
}));
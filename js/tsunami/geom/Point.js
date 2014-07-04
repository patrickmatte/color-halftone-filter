tsunami = this.tsunami || {};
tsunami.geom = tsunami.geom || {};

(function() {

	tsunami.geom.Point = function(x, y) {
		this.constructor(x, y);
	}

    var c = tsunami.geom.Point;
    var p = tsunami.geom.Point.prototype;

    c.polar = function(len, radians) {
        return new tsunami.geom.Point(len * Math.cos(radians), len * Math.sin(radians));
    }

    p.constructor = function(x, y) {
		this.x = x;
		this.y = y;
	}
	
	p.clone = function() {
		return new tsunami.geom.Point(this.x, this.y);
	}
	
	p.toString = function() {
		return "[Point" + " x=" + this.x + " y=" + this.y + "]";
	}
	
}());
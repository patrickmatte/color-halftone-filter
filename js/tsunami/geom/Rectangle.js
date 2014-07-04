tsunami = this.tsunami || {};
tsunami.geom = tsunami.geom || {};

(function() {

	tsunami.geom.Rectangle = function(x, y, width, height) {
		this.constructor(x, y, width, height);
	}
	
	var p = tsunami.geom.Rectangle.prototype;
	
	p.constructor = function(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

    p.contains = function(point) {
        return (point.x >= this.x && point.x <= this.x + this.width && point.y >= this.y && point.y <= this.y + this.height)?true:false;
    }

    p.clone = function(rect) {
		return new tsunami.geom.Rectangle(this.x, this.y, this.width, this.height);
	}
	
	p.toString = function() {
		return "[Rectangle" + " x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]";
	}
	
}());
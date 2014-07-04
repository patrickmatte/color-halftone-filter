tsunami = this.tsunami || {};
tsunami.geom = tsunami.geom || {};

(function() {

	tsunami.geom.Ratio = function() {
		this.constructor();
	}
	
	var c = tsunami.geom.Ratio;
	
	var p = tsunami.geom.Ratio.prototype;
	
	c.widthToHeight = function(rect) {
		return rect.width / rect.height;
	}
	
	c.heightToWidth = function(rect) {
		return rect.height / rect.width;
	}
	

	c.scale = function(rect, amount, snapToPixel) {
		return tsunami.geom.Ratio.defineRect(rect, rect.width * amount.decimalPercentage, rect.height * amount.decimalPercentage, snapToPixel);
	}
	
	c.scaleWidth = function(rect, height, snapToPixel) {
		return tsunami.geom.Ratio.defineRect(rect, height * tsunami.geom.Ratio.widthToHeight(rect), height, snapToPixel);
	}
	

	c.scaleHeight = function(rect, width, snapToPixel) {
		return tsunami.geom.Ratio.defineRect(rect, width, width * tsunami.geom.Ratio.heightToWidth(rect), snapToPixel);
	}
	
	c.scaleToFill = function(rect, bounds, snapToPixel) {
		var scaled = tsunami.geom.Ratio.scaleHeight(rect, bounds.width, snapToPixel);
		
		if (scaled.height < bounds.height) {
			scaled = tsunami.geom.Ratio.scaleWidth(rect, bounds.height, snapToPixel);
		}
		return scaled;
	}
	
	c.scaleToFit = function(rect, bounds, snapToPixel) {
		var scaled = tsunami.geom.Ratio.scaleHeight(rect, bounds.width, snapToPixel);
		
		if (scaled.height > bounds.height) {
			scaled = tsunami.geom.Ratio.scaleWidth(rect, bounds.height, snapToPixel);
		}
		scaled.x = (bounds.width - scaled.width) / 2;
		scaled.y = (bounds.height - scaled.height) / 2;
		return scaled;
	}
	
	c.defineRect = function(rect, width, height, snapToPixel) {
		var scaled = new tsunami.geom.Rectangle(0, 0, rect.width, rect.height);
		scaled.width = snapToPixel ? Math.round(width) : width;
		scaled.height = snapToPixel ? Math.round(height) : height;
		return scaled;
	}
	
}());
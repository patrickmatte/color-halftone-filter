tsunami = this.tsunami || {};
tsunami.filters = tsunami.filters || {};

(function() {

	tsunami.filters.Blendmode = function() {
	}

    var c = tsunami.filters.Blendmode;

	var p = tsunami.filters.Blendmode.prototype;

	c.normal = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				src.data[i] = target.data[i];
				src.data[i + 1] = target.data[i+ 1];
				src.data[i + 2] = target.data[i+ 2];
			}
		}
	}

	c.multiply = function (src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				src.data[i] = target.data[i] * src.data[i] / 255;
				src.data[i + 1] = target.data[i + 1] * src.data[i + 1] / 255;
				src.data[i + 2] = target.data[i + 2] * src.data[i + 2] / 255;
			}
		}
	}

	c.normal = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				src.data[i] = target.data[i];
				src.data[i + 1] = target.data[i+ 1];
				src.data[i + 2] = target.data[i+ 2];
			}
		}
	}

	c.lighten = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = target.data[i];
				var green = target.data[i + 1];
				var blue = target.data[i + 2];
				if (red > src.data[i]) src.data[i] = red;
				if (green > src.data[i + 1])	src.data[i + 1] = green;
				if (blue > src.data[i + 2]) src.data[i + 2] = blue;
			}
		}
	}

	c.darken = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = target.data[i];
				var green = target.data[i + 1];
				var blue = target.data[i + 2];
				if (red < src.data[i]) src.data[i] = red;
				if (green < src.data[i + 1]) src.data[i + 1] = green;
				if (blue < src.data[i + 2]) src.data[i + 2] = blue;
			}
		}
	}

	c.darkercolor = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = target.data[i];
				var green = target.data[i + 1];
				var blue = target.data[i + 2];
				if ((red * 0.3+ green * 0.59 + blue * 0.11) <= (src.data[i] * 0.3 + src.data[i + 1] * 0.59 + src.data[i + 2] * 0.11)) {
					src.data[i] = red;
					src.data[i + 1] = green;
					src.data[i + 2] = blue;
				}
			}
		}
	}

	c.lightercolor = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = target.data[i];
				var green = target.data[i + 1];
				var blue = target.data[i + 2];
				if ((red * 0.3 + green * 0.59 + blue * 0.11) > (src.data[i] * 0.3 + src.data[i + 1] * 0.59 + src.data[i + 2] * 0.11)) {
					src.data[i] = red;
					src.data[i + 1] = green;
					src.data[i + 2] = blue;
				}
			}
		}
	}

	c.lineardodge = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = target.data[i];
				var green = target.data[i + 1];
				var blue = target.data[i + 2];
				var redSrc = target.data[i] + src.data[i];
				var greenSrc = target.data[i + 1] + src.data[i + 1];
				var blueSrc = target.data[i+2] + src.data[i + 2];
				if (redSrc > 255) src.data[i] = 255;
				else	src.data[i] = redSrc;
				if (greenSrc > 255) src.data[i + 1] = 255;
				else	src.data[i + 1] = greenSrc;
				if (blueSrc > 255) src.data[i + 2] = 255;
				else	src.data[i + 2] = blueSrc;
			}
		}
	}

	c.linearburn = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = target.data[i];
				var green = target.data[i + 1];
				var blue = target.data[i + 2];
				var redSrc = target.data[i] + src.data[i];
				var greenSrc = target.data[i + 1] + src.data[i + 1];
				var blueSrc = target.data[i + 2] + src.data[i + 2];
				if (redSrc < 255) src.data[i] = 0;
				else	src.data[i] = (redSrc - 255);
				if (greenSrc < 255) src.data[i + 1] = 0;
				else	src.data[i + 1] = (greenSrc - 255);
				if (blueSrc < 255) src.data[i + 2] = 0;
				else	src.data[i + 2] = (blueSrc - 255);
			}
		}
	}

	c.difference = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = target.data[i];
				var green = target.data[i + 1];
				var blue = target.data[i + 2];
				var redSrc = target.data[i] - src.data[i];
				var greenSrc = target.data[i + 1] - src.data[i + 1];
				var blueSrc = target.data[i + 2] - src.data[i + 2];
				if (redSrc < 0) src.data[i] = -redSrc;
				else	src.data[i] = redSrc;
				if (greenSrc < 0) src.data[i + 1] = -greenSrc;
				else	src.data[i + 1] = greenSrc;
				if (blueSrc < 0) src.data[i + 2] = -blueSrc;
				else	src.data[i + 2] = blueSrc;
			}
		}
	}

	c.screen = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = target.data[i];
				var green = target.data[i + 1];
				var blue = target.data[i + 2];
				src.data[i] = (255 - ( ((255-src.data[i]) * (255-target.data[i])) >> 8));
				src.data[i + 1] = (255 - ( ((255-src.data[i + 1]) * (255-target.data[i + 1])) >> 8));
				src.data[i + 2] = (255 - ( ((255-src.data[i + 2]) * (255-target.data[i + 2])) >> 8));
			}
		}
	}

	c.exclusion = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = target.data[i];
				var green = target.data[i + 1];
				var blue = target.data[i + 2];
				src.data[i] = red - (red * 2 / 255 - 1) * src.data[i];
				src.data[i + 1] = (green = target.data[i + 1]) - (green * 2 / 255 - 1) * src.data[i + 1];
				src.data[i + 2] = (blue = target.data[i + 2]) - (blue * 2 / 255 - 1) * src.data[i + 2];
			}
		}
	}

	c.overlay = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = target.data[i];
				var green = target.data[i + 1];
				var blue = target.data[i + 2];
				if (red < 128) src.data[i] = src.data[i] * red * 2 / 255;
				else src.data[i] = 255 - (255 - src.data[i]) * (255 - red) * 2 / 255;
				if (green < 128) src.data[i + 1] = src.data[i + 1] * green * 2 / 255;
				else	src.data[i + 1] = 255 - (255 - src.data[i + 1]) * (255 - green) * 2 / 255;
				if (blue < 128)	src.data[i + 2] = src.data[i + 2] * blue * 2 / 255;
				else	src.data[i + 2] = 255 - (255 - src.data[i + 2]) * (255 - blue) * 2 / 255;
			}
		}
	}

	c.softlight = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = target.data[i];
				var green = target.data[i + 1];
				var blue = target.data[i + 2];
				if (red < 128) src.data[i] = ((src.data[i] >> 1) + 64) * red * 2 / 255;
				else	src.data[i] = 255 - (191 - (src.data[i] >> 1)) * (255 - red) * 2 / 255;
				if (green < 128) src.data[i + 1] = ((src.data[i + 1] >> 1) + 64) * green * 2 / 255;
				else src.data[i + 1] = 255 - (191 - (src.data[i + 1] >> 1)) * (255 - green) * 2 / 255;
				if (blue < 128)	src.data[i + 2] = ((src.data[i + 2] >> 1) + 64) * blue * 2 / 255;
				else	src.data[i + 2] = 255 - (191 - (src.data[i + 2] >> 1)) * (255 - blue) * 2 / 255;
			}
		}
	}

	c.hardlight = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = src.data[i];
				var green = src.data[i + 1];
				var blue = src.data[i + 2];
				if (red < 128) src.data[i] = target.data[i] * red * 2 / 255;
				else	src.data[i] = 255 - (255-target.data[i]) * (255 - red) * 2 / 255;
				if (green < 128) src.data[i + 1] = target.data[i + 1] * green * 2 / 255;
				else	src.data[i + 1] = 255 - (255-target.data[i + 1]) * (255 - green) * 2 / 255;
				if (blue < 128) src.data[i + 2] = target.data[i + 2] * blue * 2 / 255;
				else	src.data[i + 2] = 255 - (255-target.data[i + 2]) * (255 - blue) * 2 / 255;
			}
		}
	}

	c.colordodge = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = target.data[i];
				var green = target.data[i + 1];
				var blue = target.data[i + 2];
				var redSrc = (target.data[i] << 8) / (255 - (red = src.data[i]));
				var greenSrc = (target.data[i + 1] << 8) / (255 - (green = src.data[i + 1]));
				var blueSrc = (target.data[i + 2] << 8) / (255 - (blue = src.data[i + 2]));
				if (redSrc > 255 || r2 == 255)	src.data[i] = 255;
				else src.data[i] = redSrc;
				if (greenSrc > 255 || g2 == 255) src.data[i + 1] = 255;
				else	src.data[i + 1] = greenSrc;
				if (blueSrc > 255 || b2 == 255) src.data[i + 2] = 255;
				else	src.data[i + 2] = blueSrc;
			}
		}
	}

	c.colorburn = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = target.data[i];
				var green = target.data[i + 1];
				var blue = target.data[i + 2];
				var redSrc = 255 - ((255 - target.data[i]) << 8) / src.data[i];
				var greenSrc = 255 - ((255 - target.data[i + 1]) << 8) / src.data[i + 1];
				var blueSrc = 255 - ((255 - target.data[i + 2]) << 8) / src.data[i + 2];
				if (redSrc < 0 || src.data[i] == 0) src.data[i] = 0;
				else	src.data[i] = redSrc;
				if (greenSrc < 0 || src.data[i + 1] == 0) src.data[i + 1] = 0;
				else	src.data[i + 1] = greenSrc;
				if (blueSrc < 0 || src.data[i + 2] == 0) src.data[i + 2] = 0;
				else	src.data[i + 2] = blueSrc;
			}
		}
	}

	c.linearlight = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = target.data[i];
				var green = target.data[i + 1];
				var blue = target.data[i + 2];
				var redSrc = 2 * (red + target.data[i] - 256) < 0;
				var greenSrc = 2 * (green + target.data[i + 1] - 256) < 0;
				var blueSrc = 2 * (blue + target.data[i + 2] - 256) < 0
				if (redSrc || (red < 128 && redSrc < 0)) {
					src.data[i] = 0
				} else {
					if (redSrc > 255) src.data[i] = 255;
					else	src.data[i] = redSrc;
				}
				if (greenSrc || (green < 128 && greenSrc < 0)) {
					src.data[i + 1] = 0
				} else {
					if (greenSrc > 255) src.data[i + 1] = 255;
					else	src.data[i + 1] = greenSrc;
				}
				if (blueSrc || (blue < 128 && blueSrc < 0)) {
					src.data[i + 2] = 0
				} else {
					if (blueSrc > 255) src.data[i + 2] = 255;
					else	src.data[i + 2] =  blueSrc;
				}
			}
		}
	}

	c.vividlight = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = src.data[i];
				var green = src.data[i + 1];
				var blue = src.data[i + 2];
				var redTarget = 255 - ((255 - target.data[i]) << 8) / (2 * red);
				var redF = 2 * red - 256;
				var greenTarget = 255 - ((255 - target.data[i + 1]) << 8) / (2 * green);
				var greenF = 2 * red - 256;
				var blueTarget = 255 - ((255 - target.data[i + 2]) << 8) / (2 * blue);
				var blueF = 2 * red - 256;
				if (red < 128) {
					if (red) {
						if (redTarget < 0) src.data[i] = 0;
						else	src.data[i] = redTarget;
					} else {
						src.data[i] = 0;
					}
				} else if ((redTarget = redF) < 255) {
					if ((redTarget = (target.data[i] << 8) / (255 - redF)) > 255) src.data[i] = 255;
					else	src.data[i] = redTarget;
				} else {
					if (redTarget < 0) src.data[i] = 0;
					else src.data[i] = redTarget;
				}
				if (green < 128) {
					if (green) {
						if (greenTarget < 0) src.data[i + 1] = 0;
						else	src.data[i + 1] = greenTarget;
					} else {
						src.data[i + 1] = 0;
					}
				} else if ((greenTarget = greenF) < 255) {
					if ((greenTarget = (target.data[i + 1] << 8) / (255 - greenF)) > 255) src.data[i + 1] = 255;
					else	src.data[i + 1] = greenTarget;
				} else {
					if (greenTarget < 0) src.data[i + 1] = 0;
					else src.data[i + 1] = greenTarget;
				}
				if (blue < 128) {
					if (blue) {
						if (blueTarget < 0) src.data[i + 2] = 0;
						else	src.data[i + 2] = blueTarget;
					} else {
						src.data[i + 2] = 0;
					}
				} else if ((blueTarget = redF) < 255) {
					if ((blueTarget = (target.data[i + 2] << 8) / (255 - blueF)) > 255) src.data[i + 2] = 255;
					else	src.data[i + 2] = blueTarget;
				} else {
					if (blueTarget < 0) src.data[i + 2] = 0;
					else src.data[i + 2] = blueTarget;
				}
			}
		}
	}

	c.pinlight = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var red = target.data[i];
				var green = target.data[i + 1];
				var blue = target.data[i + 2];
				var redSrc = src.data[i];
				var greenSrc = src.data[i + 1];
				var blueSrc = src.data[i + 2];
				var redF = 2 * redSrc;
				var greenF = 2 * greenSrc;
				var blueF = 2 * blueSrc;
				var redF2 = 2 * redSrc - 256;
				var greenF2 = 2 * greenSrc - 256;
				var blueF2 = 2 * blueSrc - 256;
				if (redSrc < 128)
					if (red < redF) src.data[i] = red;
					else	src.data[i] = redF;
				else
				if (red > redF2) src.data[i] = red;
				else	src.data[i] = redF;
				if (greenSrc < 128)

					if (green < greenF) src.data[i + 1] = green;
					else	src.data[i + 1] = greenF;
				else
				if (green > greenF2) src.data[i + 1] = green;
				else	src.data[i + 1] = greenF;
				if (blueSrc < 128)
					if (blue < blueF) src.data[i + 2] = blue;
					else	src.data[i + 2] = blueF;
				else
				if (blue > blueF2) src.data[i + 2] = blue;
				else	src.data[i + 2] = blueF;
			}
		}
	}

	c.hardmix = function(src, target) {
		for (var x = 0; x < target.width; x++) {
			for (var y = 0; y < target.height; y++) {
				var i = 4 * (y * target.width + x);
				var redSrc = src.data[i];
				var greenSrc = src.data[i + 1];
				var blueSrc = src.data[i + 2];
				var redF = 2 * redSrc - 256;
				var greenF = 2 * greenSrc - 256;
				var blueF = 2 * blueSrc - 256;
				if (redSrc < 128)
					if (255 - ((255 - target.data[i]) << 8) / (2 * redSrc) < 128 || redSrc == 0) src.data[i] = 0;
					else src.data[i] = 255;
				else if (redF < 255 && (target.data[i] << 8) / (255 - redF) < 128) src.data[i] = 0;
				else	src.data[i] = 255;
				if (greenSrc < 128)
					if (255 - ((255 - target.data[i + 1]) << 8) / (2 * greenSrc) < 128 || greenSrc == 0) src.data[i + 1] = 0;
					else src.data[i + 1] = 255;
				else if (greenF < 255 && (target.data[i + 1] << 8) / (255 - greenF) < 128) src.data[i + 1] = 0;
				else	src.data[i + 1] = 255;
				if (blueSrc < 128)
					if (255 - ((255 - target.data[i + 2]) << 8) / (2 * blueSrc) < 128 || blueSrc == 0) src.data[i + 2] = 0;
					else src.data[i + 2] = 255;
				else if (blueF < 255 && (target.data[i + 2] << 8) / (255 -blueF) < 128) src.data[i + 2] = 0;
				else	src.data[i + 2] = 255;
			}
		}
	}

}());
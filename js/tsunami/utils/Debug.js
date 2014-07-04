tsunami = this.tsunami || {};
tsunami.utils = tsunami.utils || {};

tsunami.utils.allEvents = [
	"onclick",
	"ondblclick",
	"onmousedown",
	"onmousemove",
	"onmouseover",
	"onmouseout",
	"onmouseup",
	"onkeydown",
	"onkeypress",
	"onkeyup",
	"onabort",
	"onerror",
	"onload",
	"onresize",
	"onscroll",
	"onunload",
	"onblur",
	"onchange",
	"onfocus",
	"onreset",
	"onselect",
	"onsubmit"
];

tsunami.utils.testElementEvents = function(element) {
	for (var i = 0; i < tsunami.utils.allEvents.length; i++) {
		var eventName = tsunami.utils.allEvents[i];
		element[eventName] = tsunami.utils.testElementEventsHandler;
	}
}

tsunami.utils.testElementEventsHandler = function(event) {
	console.log(event.type, event);
}
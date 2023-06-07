let i = 0;
const log_ev = [];
let base = "";
const mouse_event = document.querySelector("#canvas1");

mouse_event.addEventListener("mouseover", e => {
	base = i + " | " + "Type: mouseover | " + "X: " + e.x + " | " + "Y: " + e.y + "\n";
	log_ev.push(base);
	i = i + 1;
})
mouse_event.addEventListener("click", e => {
	base = i + " | " + "Type: click | " + "X: " + e.x + " | " + "Y: " + e.y + "\n";
	log_ev.push(base);
	i = i + 1;
})
mouse_event.addEventListener("dblclick", e => {
	base = i + " | " + "Type: dblclick | " + "X: " + e.x + " | " + "Y: " + e.y + "\n";
	log_ev.push(base);
	i = i + 1;
})
mouse_event.addEventListener("contextmenu", e => {
	base = i + " | " + "Type: contextmenu | " + "X: " + e.x + " | " + "Y: " + e.y + "\n";
	log_ev.push(base);
	i = i + 1;
})
mouse_event.addEventListener("mouseleave", e => {
	base = i + " | " + "Type: mouseleave | " + "X: " + e.x + " | " + "Y: " + e.y + "\n";
	log_ev.push(base);
	i = i + 1;
})
mouse_event.addEventListener("mousemove", e => {
	base = i + " | " + "Type: mousemove | " + "X: " + e.x + " | " + "Y: " + e.y + "\n";
	log_ev.push(base);
	i = i + 1;
})

mouse_event.addEventListener("mouseup", e => {
	base = i + " | " + "Type: mouseup | " + "X: " + e.x + " | " + "Y: " + e.y + "\n";
	log_ev.push(base);
	i = i + 1;
})
mouse_event.addEventListener("mousedown", e => {
	base = i + " | " + "Type: mousedown | " + "X: " + e.x + " | " + "Y: " + e.y + "\n";
	log_ev.push(base);
	i = i + 1;
})

window.onload = function () {
	document.getElementById('link1').onclick = function (mouselogs) {
		this.href = 'data:text/plain;charset=utf-11,' + encodeURIComponent(log_ev);
	};
};

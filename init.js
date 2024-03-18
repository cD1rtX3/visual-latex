// Create the canvas.
const div_main = document.getElementById("vis-latex-main");
div_main.innerHTML += `<canvas id="vis-latex-canvas-main" width="${window.innerWidth}" height="${window.innerHeight}" style="width: 100vw; height: 100vh;"></canvas>`;

// Initialize the canvas.
const ctx = document.getElementById("vis-latex-canvas-main").getContext("2d");
ctx.fillStyle = "#eee";
ctx.textBaseline = "hanging";

// Text drawing function.
let cursor_x = 8;
let cursor_y = 44;
function text(style, text, x_offset = 0, y_offset = 0) {
	ctx.font = style + ' "Nimbus Roman No. 9 L"';
	cursor_x += x_offset;
	cursor_y += y_offset;
	ctx.fillText(text, cursor_x, cursor_y);
	cursor_x += ctx.measureText(text);
}

let cur_string = "";

// Listening for keypresses.
document.addEventListener("keydown", function (e) {
	if (e.key = "Backspace" && cur_string) {
		cur_string = cur_string.substring(-1);
	} else {
		cur_string += e.key;
	}
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
	cursor_x = 8;
	text("italic 36px", cur_string);
});

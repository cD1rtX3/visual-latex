let cur_string = "";

// Listening for keypresses.
document.addEventListener("keydown", function (e) {
	if (e.key = "Backspace" && cur_string) {
		cur_string = cur_string.substring(-1);
	} else {
		cur_string += e.key;
	}
	cursor_x = 8;
	text("italic 36px", cur_string);
});

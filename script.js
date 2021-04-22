let click = document.getElementsByTagName('img');
for (var i = 0; i < click.length; i++) {
	click[i].onclick = ninja;
}

function ninja() {
	alert(this.getAttribute('src'));
}
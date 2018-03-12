document.write(
  "<ul id='nav'>\
    <img id='nav_logo' src='res/logo.png'/>\
    <div class='nav_title'>\
      <p id='nav_name'><b>CWRU IEEE</b></p>\
      <p id='nav_desc'><b>Case Western Reserve University's IEEE Chapter</b></p>\
    </div>\
    <li><a href='index.html#main'>Home</a></li>\
    <li><a href='index.html#contact'>Contact</a></li>\
  </ul>"
);

window.onscroll = function() {f_scroll()};

function f_scroll() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav_logo").style.maxWidth = "60px";
		document.getElementById("nav_name").style.fontSize = "20pt";
		document.getElementById("nav_desc").style.fontSize = "0px";
		var elems = document.getElementsByTagName("li");
		for(var i = 0; i < elems.length; i++) {
			elems[i].style.margin = "4px 15px";
		}
    } else {
        document.getElementById("nav_logo").style.maxWidth = "100px";
		document.getElementById("nav_name").style.fontSize = "20pt";
		document.getElementById("nav_desc").style.fontSize = "12pt";
		var elems = document.getElementsByTagName("li");
		for(var i = 0; i < elems.length; i++) {
			elems[i].style.margin = "20px 15px";
		}
    }
}

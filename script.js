const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});
document.getElementById("resume-btn").addEventListener("click", function() {
	var link = document.createElement("a");
	link.href = "https://drive.google.com/file/d/1xCN8Jb0lXX2m4IKP02PCoTPyqhg4fBgU/view?usp=drive_link";
	link.download = "Vivesh_resume.pdf";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
});


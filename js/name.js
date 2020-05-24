function changeName() {
	name = document.getElementById("name").value;
	nameComparison = name.toLowerCase();
	if(nameComparison.includes("lucien") && !(nameComparison === "lucien15937")) {
		alert("That's MY name, you can't use it!");
	} else if (nameComparison === "chelsea" || nameComparison === "whoischelsea") {
		alert("You are amazing, beautiful, and amazingly beautiful. Good luck, Chelsea!");
		document.getElementById("nameDisplay").innerHTML = "Welcome, " + name + ".";
	} else if (nameComparison.startsWith("baron")) {
		alert("What, you planning to make a meme of this, too?");
		document.getElementById("nameDisplay").innerHTML = "Welcome, " + name + ".";
	} else if (nameComparison === "ram_pez" || nameComparison === "ram") {
		alert("BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
		document.getElementById("nameDisplay").innerHTML = "Welcome, " + name + ".";
	} else if (nameComparison.includes("bluestrike")) {
		alert("Sorry, this is a numbers game, not a word game, Blue. Ahh, who am I kidding, you're gonna wreck shop. Good luck, Blue!");
		document.getElementById("nameDisplay").innerHTML = "Welcome, " + name + ".";
	} else if (nameComparison.includes("vemrott")) {
		alert("Aren't you good enough at TMP already, Vem?");
		document.getElementById("nameDisplay").innerHTML = "Welcome, " + name + ".";
	} else {
		alert("Good luck, " + name + "!");
		document.getElementById("nameDisplay").innerHTML = "Welcome, " + name + ".";
	}
}
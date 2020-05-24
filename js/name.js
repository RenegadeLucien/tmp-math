function changeName() {
	name = document.getElementById("name").value;
	nameComparison = name.toLowerCase();
	if(nameComparison.includes("lucien")) {
		alert("That's MY name, you can't use it!");
	} else {
		alert("Good luck, " + name + "!");
		document.getElementById("nameDisplay").innerHTML = "Welcome, " + name + ".";
	}
}

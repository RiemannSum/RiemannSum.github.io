let authJson = '{"username" : "owen", "password" : "123a"}';

function auth(){
	// console.log("auth");
	let user = document.getElementById("user").value;
	let pass = document.getElementById("pass").value;
	// console.log(searchJson(user));
	console.log(returnAuth(user, pass));
	let authVal = returnAuth(user, pass);
	if(authVal){
		document.getElementById("result").innerHTML = "Match";
	}
	else{
		document.getElementById("result").innerHTML = "No match";
	}
}

function searchJson(value){
	let objJSON = JSON.parse(authJson);
	return !value.localeCompare(objJSON.username) ? true : false;
}

function returnAuth(user, pass){
	let objJ = JSON.parse(authJson);
	let userMatch = !user.toLowerCase().localeCompare(objJ.username) ? true : false;
	let passMatch = !pass.toLowerCase().localeCompare(objJ.password) ? true : false;
	return userMatch && passMatch;
}
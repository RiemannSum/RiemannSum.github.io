let json = '{"name":"owen"}'

function test(){
	console.log("testing file works");
}

// function parseJson(){
// 	let obj = JSON.parse(json);
// 	console.log(obj.name);
// }

function parseJson(){
	let key = document.getElementById("default").value;
	// console.log(key);
	// console.log(search(key));
	document.getElementById("found").value = search(key);
}

function search(value){
	let obj = JSON.parse(json);
	
	let str = !value.localeCompare(obj.name) ? "match" : "no match";
	return str;
}
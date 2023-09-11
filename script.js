//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let arr = [];
let regex = /\bthe \b|\ba \b|\ban \b/gi;
for(let index of touristSpots) {
	arr[index] = touristSpots[index].replace(regex, "");
}
touristSpots.sort();
let map = {
	'Virupaksha Temple' : 'The Virupaksha Temple',
	'Victoria Memorial' : 'Victoria Memorial',
	'Tajmahal' : 'Tajmahal',
}
for (let index of arr) {
arr[index] = map[index];	
}
console.log(arr)
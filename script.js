//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let arr = [];
// let regex = /\bthe \b|\ba \b|\ban \b/gi;
// for(let index of touristSpots) {
// 	arr[index] = touristSpots[index].replace(regex, "");
// }
let regex = /\bthe \b|\ba \b|\nan \b/gi;
for (let i = 0; i < touristSpots.length; i++) {
  touristSpots[i] = touristSpots[i].replace(regex, "");
}
touristSpots.sort();
let map = {
	'Virupaksha Temple' : 'The Virupaksha Temple',
	'Victoria Memorial' : 'Victoria Memorial',
	'Tajmahal' : 'Tajmahal',
}
// for (let index of arr) {
// arr[index] = map[index];	
// }
for (let i = 0; i < arr.length; i++) {
  if (map[arr[i]]) {
    arr[i] = map[arr[i]];
  }
}
console.log(arr)
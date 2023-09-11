//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let regex = /\bthe \b|\ba \b|\ban \b/gi;
for (let i = 0; i < touristSpots.length; i++) {
  touristSpots[i] = touristSpots[i].replace(regex, "").trim();
}

touristSpots.sort();

let map = {
  'The Virupaksha Temple': 'Virupaksha Temple',
  'Victoria Memorial': 'Victoria Memorial',
  'Tajmahal': 'Tajmahal'
};

for (let i = 0; i < touristSpots.length; i++) {
  if (map[touristSpots[i]]) {
    touristSpots[i] = map[touristSpots[i]];
  }
}

console.log(touristSpots);
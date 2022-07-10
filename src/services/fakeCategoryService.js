const categories = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Sad Songs",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Rain Songs",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Romantic Songs",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Religious Songs",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    name: "Happy Songs",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Dance Songs",
  },
];

export function getCategories() {
  return categories;
}

// export function getSong(id) {
//   return songs.find((m) => m._id === id);
// }

// export function saveSong(song) {
//   let songInDb = songs.find((m) => m._id === song._id) || {};
//   songInDb.name = song.name;
//   songInDb.genre = genresAPI.genres.find((g) => g._id === song.genreId);
//   songInDb.numberInStock = song.numberInStock;
//   songInDb.dailyRentalRate = song.dailyRentalRate;

//   if (!songInDb._id) {
//     songInDb._id = Date.now();
//     songs.push(songInDb);
//   }

//   return songInDb;
// }

// export function deleteSong(id) {
//   let songInDb = songs.find((m) => m._id === id);
//   songs.splice(songs.indexOf(songInDb), 1);
//   return songInDb;
// }

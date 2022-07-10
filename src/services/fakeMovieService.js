//import * as moviesAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    movieA_id: "1734",
    title: "Aah",
    year: "1953",
    cast: "Raj Kapoor, Nargis Dutt, Vijayalaxmi, Pran, Mukesh, Leela Mishra, Ramesh Sinha, Bhupendra, Rashid Khan, Sohanlal, Chitra, Kusum",
    singers: "Lata Mangeshkar, Mukesh",
    lyricist: "Hasrat Jaipuri, Shailendra",
    musicdirector: "Shankarsinh Raghuwanshi, Jaikishan Dayabhai Pankal",
    director: "Raja Nawathe",
    producer: "Raj Kapoor",
    hgm_lnk: "aah.htm",
    poster_hgm_lnk: "aah.jpg",
    imdb_lnk: "tt0045467",
    wiki_lnk: "https://en.wikipedia.org/wiki/Aah_%28film%29",
    video_youtube1_lnk: "j_d9Wyj-2aE",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    movieA_id: "1739",
    title: "Anarkali",
    year: "1953",
    cast: "Pradeep Kumar, Beena Roy, Mubarak, Noor Jahan, Manmohan Krishan, Sulochana, S L Puri, Kuldip Kaur",
    singers: "Geeta Dutt, Hemant Kumar, Lata Mangeshkar",
    lyricist: "Hasrat Jaipuri, Shailendra, Rajinder Krishan, Jan Nisar Akhtar",
    musicdirector: "Basant Prakash, C Ramachandra",
    director: "Nandalal Jaswantlal",
    producer: "",
    hgm_lnk: "anarkali.htm",
    poster_hgm_lnk: "anarkali.jpg",
    imdb_lnk: "tt0045506",
    wiki_lnk: "Anarkali_%281953_film%29",
    video_youtube1_lnk: "mPGoznWGdXw",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    movieA_id: "1760",
    title: "Dil - E - Nadan",
    year: "1953",
    cast: "Talat Mahmood, Shyama, Shyam Kumar, Dewan Sarai, Master Romi, Ramesh, S N Banerjee, Peace Kanwal, L Ramesh",
    singers: "Asha Bhosle, Shamshad Begum, Sudha Malhotra, Talat Mahmood",
    lyricist: "Shakeel Badayuni",
    musicdirector: "Ghulam Mohd, Anil Biswas",
    director: "A R Kardar",
    producer: "Kardar Productions",
    hgm_lnk: "dil_e_nadan_1953.htm",
    poster_hgm_lnk: "dil_e_nadan_1953.jpg",
    imdb_lnk: "tt0231460",
    wiki_lnk: "",
    video_youtube1_lnk: "a8V4VGXUyAI, sz_xKsN__IU",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    movieA_id: "1768",
    title: "Footpath",
    year: "1953",
    cast: "Dilip Kumar, Meena Kumari, Kuldip Kaur, Anwar Hussan, Achla Sachdev, Jankidas, Ramesh Thakur, P Kailash, Master Romi",
    singers: "Asha Bhosle, Talat Mahmood, Premlata, Ashima Bannerjee",
    lyricist: "Majrooh Sultanpuri",
    musicdirector: "Khayyam",
    director: "Zia Sarhadi",
    producer: "Ranjit",
    hgm_lnk: "footpath.htm",
    poster_hgm_lnk: "footpath.jpg",
    imdb_lnk: "tt0132166",
    wiki_lnk: "Footpath_(1953_film)",
    video_youtube1_lnk: "4mWqocahTKk, KNjActimEJs",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    movieA_id: "1807",
    title: "Patita",
    year: "1953",
    cast: "Dev Anand, Usha Kiran, Agha, Lalita Pawar, Indu Shivraj, Krishna Kant, C S Dube, Tiwari, B M Vyas",
    singers: "Talat Mahmood, Lata Mangeshkar, Hemant Kumar",
    lyricist: "Hasrat Jaipuri, Shailendra",
    musicdirector: "Shankar Jaikishan",
    director: "Amiya Chakraborty",
    producer: "Mars & Movies",
    hgm_lnk: "patita.htm",
    poster_hgm_lnk: "patita.jpg",
    imdb_lnk: "tt0158074",
    wiki_lnk: "Patita",
    video_youtube1_lnk: "ZS0ZniLt0N4, -LUVoZmpvbk",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    movieA_id: "1819",
    title: "Shikast",
    year: "1953",
    cast: "Dilip Kumar, Nalini Jaywant, Shyam Lal, Om Parkesh, Nargis Dutt, Leela Mishra, Hemavati, K N Singh, Durga Khote",
    singers:
      "Asha Bhosle, Hemant Kumar, Lata Mangeshkar, Mohammed Rafi, Talat Mahmood",
    lyricist: "Hasrat Jaipuri, Shailendra",
    musicdirector: "Shankarsinh Raghuwanshi, Jaikishan Dayabhai Pankal",
    director: "Ramesh Saigal",
    producer: "Asha Dep",
    hgm_lnk: "shikast.htm",
    poster_hgm_lnk: "shikast.jpg",
    imdb_lnk: "tt0148842",
    wiki_lnk: "Shikast",
    video_youtube1_lnk: "a09EkS3nxpM, hi_TrMLQuQQ",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    movieA_id: "1846",
    title: "Chakradhari",
    year: "1954",
    cast: "Shahu Modak, Trilok Kapoor, Nirupa Roy, Indira, Yashodhara Katju",
    singers: "Mohammed Rafi, Asha Bhosle, Hemant Kumar",
    lyricist: "Kavi Pradeep",
    musicdirector: "Avinash Vyas",
    director: "Raman Desai",
    producer: "",
    hgm_lnk: "chakradhari.htm",
    poster_hgm_lnk: "pna.jpg",
    imdb_lnk: "tt0388822",
    wiki_lnk: "",
    video_youtube1_lnk: "-KoMog9wpK4, riUnzwI2lA8",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    movieA_id: "1876",
    title: "Jagriti",
    year: "1954",
    cast: "Abhi Bhattacharya, Pranoti Ghosh, Dhumal, Bipin Gupta, Kanu Rao, Ghanshyam, Mehmood, Ratan Kumar, Mumtaz Begum, Ramesh Sinha",
    singers: "Asha Bhosle, Lata Mangeshkar, Mohammed Rafi, Pradeep",
    lyricist: "Kavi Pradeep",
    musicdirector: "Hemant Kumar",
    director: "Satyen Bose",
    producer: "",
    hgm_lnk: "jagriti.htm",
    poster_hgm_lnk: "jagriti.jpg",
    imdb_lnk: "tt0145851",
    wiki_lnk: "Jagriti",
    video_youtube1_lnk: "ZS8ahsaaVXY, P27hZGBP-eY",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    movieA_id: "1903",
    title: "Naukari",
    year: "1954",
    cast: "Kishore Kumar, Sheela Ramani, Jagdeep, Nirupa Roy, Balraj Sahni, Kanhaiya Lal",
    singers: "Geeta Dutt, Kishore Kumar, Usha Mangeshkar",
    lyricist: "Shailendra",
    musicdirector: "Salil Chowdhary",
    director: "Bimal Roy",
    producer: "Bimal Roy",
    hgm_lnk: "naukari.htm",
    poster_hgm_lnk: "naukari.jpg",
    imdb_lnk: "tt0047271",
    wiki_lnk: "",
    video_youtube1_lnk: "CyJvUEOFVCk, qcQbKNmpbNk",
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}

// export function saveMovie(movie) {
//   let movieInDb = movies.find((m) => m._id === movie._id) || {};
//   movieInDb.name = movie.name;
//   movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
//   movieInDb.numberInStock = movie.numberInStock;
//   movieInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb._id) {
//     movieInDb._id = Date.now();
//     movies.push(movieInDb);
//   }

//   return movieInDb;
// }

export function deleteMovie(id) {
  let movieInDb = movies.find((m) => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}

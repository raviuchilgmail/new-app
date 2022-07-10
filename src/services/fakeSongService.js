//import * as movieAPI from "./fakeMovieService";

const songs = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    songA_id: "14776",
    title: "Aaja Re, Ab Mera Dil Pukara",
    category: {
      _id: "5b21ca3eeb7f6fbccd471815",
      name: "Sad Songs",
    },
    bgmrank: "7",
    singers: "Lata Mangeshkar, Mukesh",
    actors: "Raj Kapoor, Nargis",
    musicdirectors: "Shankar Jaikishan",
    lyricists: "Hasrat Jaipuri",
    movie: {
      _id: "5b21ca3eeb7f6fbccd471815",
      id: "1734",
      title: "Aah",
      year: "1953",
    },
    image_hgm_lnk: "aaja_re_ab_mera_dil_pukara.jpg",
    videoyoutubelinks: "A:iA-2peuUYmE",
    lyrics: "aaja re | aaja re ab mera dil pukara ro ",
    hgm_lnk: "aaja_re_ab_mera_dil_pukara.htm",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    songA_id: "15094",
    title: "Kaare Badaraa Tu Na Jaa Na Jaa Bairi Tu Bides Na Jaa",
    category: {
      _id: "5b21ca3eeb7f6fbccd471816",
      name: "Rain Songs",
    },
    bgmrank: "10",
    singers: "Lata Mangeshkar",
    actors: "Nalini Jaywant",
    musicdirectors: "Shankar Jaikishan",
    lyricists: "Shailendra",
    movie: {
      _id: "5b21ca3eeb7f6fbccd47181b",
      id: "1819",
      title: "Shikast",
      year: "1953",
    },
    image_hgm_lnk: "kaare_badaraa_tu_na_jaa_i.jpg",
    videoyoutubelinks: "A:qQJEspyiKvg",
    lyrics: "kaare badra tu na jaa na jaa bairi tu bi",
    hgm_lnk: "kaare_badaraa_tu_na_jaa_i.htm",
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    songA_id: "15399",
    title: "Shaam-E-Gham Ki Kasam",
    category: {
      _id: "5b21ca3eeb7f6fbccd471815",
      name: "Sad Songs",
    },
    bgmrank: "2",
    singers: "Talat Mahmood",
    actors: "Dilip Kumar",
    musicdirectors: "Khayyam",
    lyricists: "Ali Sardar Jafri, Majrooh Sultanpuri",
    movie: {
      _id: "5b21ca3eeb7f6fbccd471819",
      id: "1768",
      title: "Footpath",
      year: "1953",
    },
    image_hgm_lnk: "shaam_e_gham_ki_kasam.jpg",
    videoyoutubelinks: "A:x8UW6fvGLDw",
    lyrics: "shaam-e-gam ki qasam aaj gamagi hai ham ",
    hgm_lnk: "shaam_e_gham_ki_kasam.htm",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    songA_id: "15503",
    title: "Yaad Kiya Dil Ne Kahaan Ho Tum",
    category: {
      _id: "5b21ca3eeb7f6fbccd471817",
      name: "Romantic Songs",
    },
    bgmrank: "5",
    singers: "Hemant Kumar, Lata Mangeshkar",
    actors: "Dev Anand, Usha Kiran",
    musicdirectors: "Shankar Jaikishan",
    lyricists: "Hasrat Jaipuri",
    movie: {
      _id: "5b21ca3eeb7f6fbccd47181a",
      id: "1807",
      title: "Patita",
      year: "1953",
    },
    image_hgm_lnk: "yaad_kiyaa_dil_ne_kahaan.jpg",
    videoyoutubelinks: "A:PvwnvoUOa-Q",
    lyrics: "yaad kiya dil ne kaha ho tum | jhumti ba",
    hgm_lnk: "yaad_kiyaa_dil_ne_kahaan.htm",
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    songA_id: "15523",
    title: "Ye Zindagi Usi Ki Hai, Jo Kisi Ka Ho Gaya, Pyar Hi Me Kho Gaya",
    category: {
      _id: "5b21ca3eeb7f6fbccd471817",
      name: "Romantic Songs",
    },
    bgmrank: "1",
    singers: "Lata Mangeshkar",
    actors: "Pradeep Kumar, Bina Roy",
    musicdirectors: "Chitalkar Ramchandra",
    lyricists: "Rajinder Krishan",
    movie: {
      _id: "5b21ca3eeb7f6fbccd471816",
      id: "1739",
      title: "Anarkali",
      year: "1953",
    },
    image_hgm_lnk: "yeh_jindgi_usiki_hai.jpg",
    videoyoutubelinks: "A:zfGppnmNMFY",
    lyrics: "yeh jindgi usiki hai | jo kisi ka ho gaya ",
    hgm_lnk: "yeh_jindgi_usiki_hai.htm",
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    songA_id: "15536",
    title: "Zindagi Denewale Sun, Teri Duniya Se Dil Bhar Gaya",
    category: {
      _id: "5b21ca3eeb7f6fbccd471815",
      name: "Sad Songs",
    },
    bgmrank: "6",
    singers: "Talat Mahmood",
    actors: "Talat Mahmood",
    musicdirectors: "Ghulam Mohammad",
    lyricists: "Shakeel Badayuni",
    movie: {
      _id: "5b21ca3eeb7f6fbccd471817",
      id: "1760",
      title: "Dil - E - Nadan",
      year: "1953",
    },
    image_hgm_lnk: "zindagi_denewale_sun.jpg",
    videoyoutubelinks: "A:-YR6XEO-BmY",
    lyrics: "zindagi dene vale sun teri duniya se dil",
    hgm_lnk: "zindagi_denewale_sun.htm",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    songA_id: "15695",
    title: "Bolo He Zamin, Bolo Aasman",
    category: {
      _id: "5b21ca3eeb7f6fbccd471819",
      name: "Religious Songs",
    },
    bgmrank: "13",
    singers: "Mohammed Rafi",
    actors: "Nirupa Roy, Trilok Kapoor",
    musicdirectors: "Avinash Vyas",
    lyricists: "Kavi Pradeep",
    movie: {
      _id: "5b21ca3eeb7f6fbccd47181e",
      id: "1846",
      title: "Chakradhari",
      year: "1954",
    },
    image_hgm_lnk: "aaj_achanak_rut_key_mujh.jpg",
    videoyoutubelinks: "B:XRDn7HeMYTc,yWhzCAy0igs",
    lyrics: "aaj achanak ruth ke mujh se, chale gaye ",
    hgm_lnk: "aaj_achanak_rut_key_mujh.htm",
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    songA_id: "15712",
    title: "Chalo Chale Mann Sapano Ke Ganv Me",
    category: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Happy Songs",
    },
    bgmrank: "10",
    singers: "Asha Bhosle",
    actors: "Ratan Kumar, Pronoti Ghose",
    musicdirectors: "Hemant Kumar",
    lyricists: "Kavi Pradeep",
    movie: {
      _id: "5b21ca3eeb7f6fbccd47181f",
      id: "1876",
      title: "Jagriti",
      year: "1954",
    },
    image_hgm_lnk: "chalo_chale_mann_sapano_ke.jpg",
    videoyoutubelinks: "A:qSZfNGZTs6s",
    lyrics: "chalo chale mann sapano ke ganv mekant",
    hgm_lnk: "chalo_chale_mann_sapano_ke.htm",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    songA_id: "15730",
    title: "Chhota Sa Ghar Hoga Badlo Ki Chhanv Me",
    category: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Happy Songs",
    },
    bgmrank: "9",
    singers: "Kishore Kumar, Usha Mangeshkar",
    actors: "Kishore Kumar, Sheela Ramani",
    musicdirectors: "Salil Chowdhury",
    lyricists: "Shailendra",
    movie: {
      _id: "5b21ca3eeb7f6fbccd471821",
      id: "1903",
      title: "Naukari",
      year: "1954",
    },
    image_hgm_lnk: "chhota_sa_ghar_hoga_baadalo.jpg",
    videoyoutubelinks: "B:rhKGCbzHNU4,KRfgKRy-W7E,P-kGuo_crvY",
    lyrics: "chhota sa ghar hoga badlo ki chhanv me",
    hgm_lnk: "chhota_sa_ghar_hoga_baadalo.htm",
    liked: false,
  },
];

export function getSongs() {
  return songs;
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

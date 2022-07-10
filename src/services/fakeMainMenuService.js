const home = {
  _id: "0",
  level: 0,
  name: "Home",
  parent: "Home",
  page: "home",
  children: [
    {
      _id: "1.1",
      level: 1,
      name: "Select",
      parent: "Home",
    },
    {
      _id: "1.2",
      level: 1,
      name: "Create",
      parent: "Home",
    },
    {
      _id: "1.3",
      level: 1,
      name: "View",
      parent: "Home",
    },
    {
      _id: "1.4",
      level: 1,
      name: "Manage",
      parent: "Home",
    },
    {
      _id: "1.5",
      level: 1,
      name: "Register",
      parent: "Home",
    },
    {
      _id: "1.6",
      level: 1,
      name: "Search",
      parent: "Home",
    },
    {
      _id: "1.7",
      level: 1,
      name: "Notifications",
      parent: "Home",
    },
    {
      _id: "1.8",
      level: 1,
      name: "Settings",
      parent: "Home",
    },
    {
      _id: "1.9",
      level: 1,
      name: "Help",
      parent: "Home",
    },
    {
      _id: "1.10",
      level: 1,
      name: "Project",
      parent: "Home",
      verbose: "Project the mobile screen to TV etc",
    },
    {
      _id: "1.11",
      level: 1,
      name: "Help Improve",
      parent: "Home",
    },
  ],
};

const select = {
  _id: "1.1",
  level: 1,
  name: "Select",
  parent: "Home",
  page: "selectBase",
  children: [
    {
      _id: "1.1.1",
      level: 2,
      name: "Songs",
      parent: "Select",
      page: "select",
    },
    {
      _id: "1.1.2",
      level: 2,
      name: "PlayLists",
      parent: "Select",
    },
    {
      _id: "1.1.3",
      level: 2,
      name: "Channels",
      parent: "Select",
    },
  ],
};

const create = {
  _id: "1.2",
  level: 1,
  name: "Create",
  parent: "Home",
  children: [
    {
      _id: "1.2.1",
      level: 2,
      name: "PlayList",
      parent: "Create",
    },
    {
      _id: "1.2.2",
      level: 2,
      name: "Channel",
      parent: "Create",
    },
  ],
};

const view = {
  _id: "1.3",
  level: 1,
  name: "View",
  parent: "Home",
  children: [
    {
      _id: "1.3.1",
      level: 2,
      name: "Video",
      parent: "View",
    },
    {
      _id: "1.3.2",
      level: 2,
      name: "SongDetails",
      parent: "View",
    },
    {
      _id: "1.3.3",
      level: 2,
      name: "Lyrics",
      parent: "View",
    },
    {
      _id: "1.3.4",
      level: 2,
      name: "MyRatings",
      parent: "View",
    },
    {
      _id: "1.3.5",
      level: 2,
      name: "ChannelUpdates",
      parent: "View",
    },
    {
      _id: "1.3.6",
      level: 2,
      name: "ScoreCard",
      parent: "View",
    },
    {
      _id: "1.3.6",
      level: 2,
      name: "Messages",
      parent: "View",
    },
  ],
};

const manage = {
  _id: "1.4",
  level: 1,
  name: "Manage",
  parent: "Home",
  children: [
    {
      _id: "1.4.1",
      level: 2,
      name: "PlayLists",
      parent: "Manage",
    },
    {
      _id: "1.4.2",
      level: 2,
      name: "Channels",
      parent: "Manage",
    },
  ],
};

const settings = {
  _id: "1.5",
  level: 1,
  name: "Settings",
  parent: "Home",
  children: [
    {
      _id: "1.5.1",
      level: 2,
      name: "Skins",
      parent: "Settings",
    },
    {
      _id: "1.5.2",
      level: 2,
      name: "Ticker",
      parent: "Settings",
    },
  ],
};

const songs = {
  _id: "1.1.1",
  level: 2,
  name: "Songs",
  parent: "Select",
  page: "song",
  children: [
    {
      _id: "1.1.1.1",
      level: 3,
      name: "Period",
      parent: "Songs",
      page: "song",
    },
    {
      _id: "1.1.1.2",
      level: 3,
      name: "Movie",
      parent: "Songs",
      page: "song",
    },
    {
      _id: "1.1.1.3",
      level: 3,
      name: "Song",
      parent: "Songs",
      page: "song",
    },
    {
      _id: "1.1.1.4",
      level: 3,
      name: "Artist",
      parent: "Songs",
      page: "song",
    },
  ],
};

const playlists = {
  _id: "1.1.2",
  level: 2,
  name: "PlayLists",
  parent: "Select",
  children: [
    {
      _id: "1.1.2.1",
      level: 3,
      name: "Personal",
      parent: "PlayLists",
    },
    {
      _id: "1.1.2.2",
      level: 3,
      name: "Public",
      parent: "PlayLists",
    },
  ],
};

const channels = {
  _id: "1.1.3",
  level: 2,
  name: "Channels",
  parent: "Select",
  children: [
    {
      _id: "1.1.3.1",
      level: 3,
      name: "Personal",
      parent: "PlayLists",
    },
    {
      _id: "1.1.3.2",
      level: 3,
      name: "Public",
      parent: "PlayLists",
    },
  ],
};

const period = {
  _id: "1.1.1.1",
  level: 3,
  name: "Period",
  parent: "Songs",
  page: "song",
  children: [
    {
      _id: "1.1.1.1.1",
      level: 4,
      name: "Era",
      parent: "Period",
      page: "song",
    },
    {
      _id: "1.1.1.1.2",
      level: 4,
      name: "Decade",
      parent: "Period",
      page: "song",
    },
    {
      _id: "1.1.1.1.3",
      level: 4,
      name: "Year",
      parent: "Period",
      page: "song",
    },
  ],
};

const movie = {
  _id: "1.1.1.2",
  level: 3,
  name: "Movie",
  parent: "Songs",
  page: "song",
  children: [
    {
      _id: "1.1.1.2.1",
      level: 4,
      name: "Name",
      parent: "Movie",
      page: "song",
    },
    {
      _id: "1.1.1.2.2",
      level: 4,
      name: "Director",
      parent: "Movie",
      page: "song",
    },
    {
      _id: "1.1.1.2.3",
      level: 4,
      name: "Producer",
      parent: "Movie",
      page: "song",
    },
  ],
};

const song = {
  _id: "1.1.1.3",
  level: 3,
  name: "Song",
  parent: "Songs",
  page: "song",
  children: [
    {
      _id: "1.1.1.3.1",
      level: 4,
      name: "Title",
      parent: "Movie",
      page: "song",
    },
    {
      _id: "1.1.1.3.2",
      level: 4,
      name: "Category",
      parent: "Movie",
      page: "song",
    },
    {
      _id: "1.1.1.3.3",
      level: 4,
      name: "BGMRank",
      parent: "Movie",
      page: "song",
    },
  ],
};

const artist = {
  _id: "1.1.1.3",
  level: 3,
  name: "Artist",
  parent: "Songs",
  page: "song",
  children: [
    {
      _id: "1.1.1.4.1",
      level: 4,
      name: "Singer",
      parent: "Artist",
      page: "song",
    },
    {
      _id: "1.1.1.4.2",
      level: 4,
      name: "Actor",
      parent: "Artist",
      page: "song",
    },
    {
      _id: "1.1.1.4.3",
      level: 4,
      name: "MusicDirector",
      parent: "Artist",
      page: "song",
    },
    {
      _id: "1.1.1.4.4",
      level: 4,
      name: "Lyricist",
      parent: "Artist",
      page: "song",
    },
    {
      _id: "1.1.1.4.5",
      level: 4,
      name: "Performance",
      parent: "Artist",
      page: "song",
    },
  ],
};

const singer = {
  _id: "1.1.1.4.1",
  level: 4,
  name: "Singer",
  parent: "Artist",
  page: "song",
  children: [
    {
      _id: "1.1.1.4.1.1",
      level: 5,
      name: "Name",
      parent: "Singer",
      page: "song",
    },
    {
      _id: "1.1.1.4.1.2",
      level: 5,
      name: "Popularity",
      parent: "Singer",
      page: "song",
    },
  ],
};

const actor = {
  _id: "1.1.1.4.2",
  level: 4,
  name: "Actor",
  parent: "Artist",
  page: "song",
  children: [
    {
      _id: "1.1.1.4.2.1",
      level: 5,
      name: "Name",
      parent: "Actor",
      page: "song",
    },
    {
      _id: "1.1.1.4.2.2",
      level: 5,
      name: "Popularity",
      parent: "Actor",
      page: "song",
    },
  ],
};

const musicdirector = {
  _id: "1.1.1.4.3",
  level: 4,
  name: "MusicDirector",
  parent: "Artist",
  page: "song",
  children: [
    {
      _id: "1.1.1.4.3.1",
      level: 5,
      name: "Name",
      parent: "MusicDirector",
      page: "song",
    },
    {
      _id: "1.1.1.4.3.2",
      level: 5,
      name: "Popularity",
      parent: "MusicDirector",
      page: "song",
    },
  ],
};

const lyricist = {
  _id: "1.1.1.4.4",
  level: 4,
  name: "Lyricist",
  parent: "Artist",
  page: "song",
  children: [
    {
      _id: "1.1.1.4.4.1",
      level: 5,
      name: "Name",
      parent: "Lyricist",
      page: "song",
    },
    {
      _id: "1.1.1.4.4.2",
      level: 5,
      name: "Popularity",
      parent: "Lyricist",
      page: "song",
    },
  ],
};

export function getMenu(item) {
  if (item === "Home") return home;
  if (item === "Select") return select;
  if (item === "Create") return create;
  if (item === "View") return view;
  if (item === "Manage") return manage;
  if (item === "Settings") return settings;
  if (item === "Songs") return songs;
  if (item === "PlayLists") return playlists;
  if (item === "Channels") return channels;
  if (item === "Period") return period;
  if (item === "Movie") return movie;
  if (item === "Song") return song;
  if (item === "Artist") return artist;
  if (item === "Singer") return singer;
  if (item === "Actor") return actor;
  if (item === "MusicDirector") return musicdirector;
  if (item === "Lyricist") return lyricist;
  return [];
}

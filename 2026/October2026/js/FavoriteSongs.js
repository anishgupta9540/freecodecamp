https://www.freecodecamp.org/learn/daily-coding-challenge/10-23
Favorite Songs

function favoriteSongs(songs) {
  return songs
    .sort((a, b) => b.plays - a.plays)
    .slice(0, 2)
    .map(song => song.title);
}

favoriteSongs([
  { title: "Sync or Swim", plays: 3 },
  { title: "Byte Me", plays: 1 },
  { title: "Earbud Blues", plays: 2 }
]);

["Sync or Swim", "Earbud Blues"]


function favoriteSongs(songs) {
  let first = songs[0];
  let second = songs[1];

  for (let i = 0; i < songs.length; i++) {
    if (songs[i].plays > first.plays) {
      second = first;
      first = songs[i];
    } else if (
      songs[i] !== first &&
      (second === first || songs[i].plays > second.plays)
    ) {
      second = songs[i];
    }
  }

  return [first.title, second.title];
}

console.log(favoriteSongs([
  { title: "Sync or Swim", plays: 3 },
  { title: "Byte Me", plays: 1 },
  { title: "Earbud Blues", plays: 2 }
]));

console.log(favoriteSongs([
  { title: "Skip Track", plays: 98 },
  { title: "99 Downloads", plays: 99 },
  { title: "Clickwheel Love", plays: 100 }
]));

console.log(favoriteSongs([
  { title: "Song A", plays: 42 },
  { title: "Song B", plays: 99 },
  { title: "Song C", plays: 75 }
]));

["Sync or Swim", "Earbud Blues"]
["Clickwheel Love", "99 Downloads"]
["Song B", "Song C"]
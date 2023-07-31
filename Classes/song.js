function song(array) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }

  let songs = [];
  let numberOfSongs = array.shift();
  let typeSong = array.pop();

  for (let index = 0; index < numberOfSongs; index++) {
    let [type, name, time] = array[index].split('_');
    let song = new Song(type, name, time);
    songs.push(song);
  }

  if (typeSong === 'all') {
    songs.forEach((element) => console.log(element.name));
  } else {
    let filtered = songs.filter((element) => element.type === typeSong);
    filtered.forEach((element) => console.log(element.name));
  }
}
song([
  3,
  'favourite_DownTown_3:14',
  'favourite_Kiss_4:16',
  'favourite_Smooth Criminal_4:01',
  'favourite',
]);

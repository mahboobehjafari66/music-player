let currentSongIndex = 0;
let songs = [];
fetch("songs.json")
  .then((response) => response.json())
  .then((data) => {
    songs = data;
    loadSong();
    displayRecommendedSongs();
  });
export function loadSong() {
  const song = songs[currentSongIndex];
  document.getElementById("cover").src = song.cover;
  document.getElementById("title").innerText = song.title;
  document.getElementById("artist").innerText = song.artist;
  document.getElementById("audio").src = song.audio;
}
document.getElementById("prev").addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong();
});

document.getElementById("next").addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong();
});

export function displayRecommendedSongs() {
  const songList = document.getElementById("song-list");
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.innerText = `${song.title} - ${song.artist}`;
    li.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong();
    });
    songList.appendChild(li);
  });
}

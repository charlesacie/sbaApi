import { displayGallery, setupPagination, searchArtists } from './gallery.mjs';
import { createPlaylist } from './playlist.mjs';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-bar').value;
    searchArtists(query);
  });

  document.getElementById('create-playlist').addEventListener('click', () => {
    const playlistName = document.getElementById('playlist-name').value;
    createPlaylist(playlistName);
  });

  displayGallery(); 
  setupPagination();
});

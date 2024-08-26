import { fetchSpotifyData } from './api.mjs';

let currentPage = 1;
let currentQuery = '';

export async function displayGallery(page = 1) {
  const data = await fetchSpotifyData(currentQuery, page);
  const galleryElement = document.getElementById('Spotify');
  galleryElement.innerHTML = ''; 

  data.artists.items.forEach(artist => {
    const artistElement = document.createElement('div');
    artistElement.textContent = artist.name;
    galleryElement.appendChild(artistElement);
  });
}

export function setupPagination() {
  document.getElementById('next-page').addEventListener('click', async () => {
    currentPage++;
    await displayGallery(currentPage);
  });

  document.getElementById('prev-page').addEventListener('click', async () => {
    if (currentPage > 1) {
      currentPage--;
      await displayGallery(currentPage);
    }
  });
}

export async function searchArtists(query) {
  currentQuery = query;
  currentPage = 1;
  await displayGallery(currentPage);
}




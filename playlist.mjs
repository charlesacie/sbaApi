import { createSpotifyPlaylist } from './api.mjs';

export async function createPlaylist(playlistName) {
  if (!playlistName) {
    alert("Please enter a playlist name.");
    return;
  }

  try {
    const playlist = await createSpotifyPlaylist(playlistName);

    if (playlist && playlist.name) {
      alert(`Playlist "${playlist.name}" created successfully!`);
    } else {
      alert("Failed to create playlist.");
    }
  } catch (error) {
    console.error('Error creating playlist:', error);
    alert('Failed to create playlist.');
  }
}

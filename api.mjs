const CLIENT_ID = '4b947014e3ad4c888702eede1b6464ce';
const CLIENT_SECRET = 'b2441e9334fd40debd616b294ebe418e';
let accessToken = '';

async function getAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    },
    body: 'grant_type=client_credentials'
  });

  const data = await response.json();
  accessToken = data.access_token;
}

export async function fetchSpotifyData(query, page = 1) {
  if (!accessToken) {
    await getAccessToken();
  }

  const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=artist&limit=10&offset=${(page - 1) * 10}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  const data = await response.json();
  return data;
}

export async function createSpotifyPlaylist(playlistName) {
  if (!accessToken) {
    await getAccessToken();
  }

  const user_id = '31ionsueu77z3udceh7yvaf4bjlq'; 

  const response = await fetch('https://api.spotify.com/v1/users/{user_id}/playlists', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: playlistName,
      description: 'New playlist created from API',
      public: false
    })
  });

  const data = await response.json();
  return data;
}

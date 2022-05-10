const API_ENDPOINT = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyDXY2vL5obEXc6bYHEWIKJ6wsJ6wUBNSMA';
const PLAYLIST_ID = 'UUWjDbk8VIEc_OYqsAyal-Cw';

let queryParams = new URLSearchParams({
    maxResults: 10,
    part: 'snippet',
    playlistId: PLAYLIST_ID,
    key: API_KEY
  });

fetch(`${API_ENDPOINT}/playlistItems?${queryParams}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });

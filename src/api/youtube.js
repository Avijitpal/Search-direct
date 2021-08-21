import axios from 'axios'
const KEY ="AIzaSyBc1mReb6hCH9lp-2hmzV8bwt1gW_dhttM";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      maxResults: 100,
      key: KEY
    },
    headers: {}
  });


import axios from "axios";

const KEY = "AIzaSyDEar7F7wksc0F37JFg2C3SCqQLWGRfJlE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key:KEY, 
  },
});

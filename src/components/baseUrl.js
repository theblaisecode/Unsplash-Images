import axios from "axios";

const unsplashCustomInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 7AR_4GvLjjKtz_4PuAIBDN0mKwZOGuleNMaSWjStQ4U",
    Accept: "application/JSON",
  },
});

export default unsplashCustomInstance;

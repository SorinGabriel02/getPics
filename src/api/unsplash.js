import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 39a537fa9239332d10a213820f904b90f51e48bf8ac32b9cc3515adc7fda9732"
  }
});

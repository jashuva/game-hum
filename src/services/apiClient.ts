import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '2721829903334cecaa4bb99699f44a12'
  }
});

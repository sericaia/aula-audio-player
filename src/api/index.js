import axios from 'axios';

export default {
  getAllSongs: async cb => {
    try {
      const page = 0;
      const result = await axios(`/songs?page=${page}`);
      cb(result.data);
    } catch (err) {
      throw new Error('Error: could not fetch song list');
    }
  },
  getSong: () => {
    // TODO
  }
};

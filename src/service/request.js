const axios = require('../common/axios');

module.exports = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(url);
      resolve(data);
    } catch (error) {
      const e = new Error(error);
      reject(e);
    }
  });
};
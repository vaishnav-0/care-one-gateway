/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Search for services by intent
*
* searchPostRequest SearchPostRequest One Protocol-Consumer Platform searches for healthcare services/product (optional)
* returns _search_post_200_response
* */
const searchPOST = ({ searchPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        searchPostRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  searchPOST,
};

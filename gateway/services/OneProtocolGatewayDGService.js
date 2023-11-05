/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Send catalog
*
* onSearchPostRequest OnSearchPostRequest Sends catalog of emergency services as a response to /search (optional)
* returns _on_search_post_200_response
* */
const on_searchPOST = ({ onSearchPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        onSearchPostRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
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
  on_searchPOST,
  searchPOST,
};

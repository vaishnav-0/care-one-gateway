/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Fetch the status of a Service
*
* onStatusPostRequest OnStatusPostRequest Describes the fulfillment status of the order (optional)
* returns _search_post_200_response
* */
const on_statusPOST = ({ onStatusPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        onStatusPostRequest,
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
  on_statusPOST,
};

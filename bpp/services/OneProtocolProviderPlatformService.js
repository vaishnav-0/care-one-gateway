/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Confirms the order by agreeing to the fullfillment terms
*
* confirmPostRequest ConfirmPostRequest Confirmation of the order once fulfillment terms are agreed (optional)
* returns _search_post_200_response
* */
const confirmPOST = ({ confirmPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        confirmPostRequest,
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
* Initialize an order by providing user details
*
* initPostRequest InitPostRequest Initialization of the order once quote is agreed (optional)
* returns _search_post_200_response
* */
const initPOST = ({ initPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        initPostRequest,
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
/**
* Select items from the catalog and build your order
*
* selectPostRequest SelectPostRequest Selection of various products/services as part of order (optional)
* returns _search_post_200_response
* */
const selectPOST = ({ selectPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        selectPostRequest,
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
* Fetch the latest order object
*
* statusPostRequest StatusPostRequest Fetch the fulfillment status of the order (optional)
* returns _search_post_200_response
* */
const statusPOST = ({ statusPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        statusPostRequest,
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
* Track an active order
*
* track Track  (optional)
* returns _track_post_default_response
* */
const trackPOST = ({ track }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        track,
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
  confirmPOST,
  initPOST,
  searchPOST,
  selectPOST,
  statusPOST,
  trackPOST,
};

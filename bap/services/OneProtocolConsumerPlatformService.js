/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Send active order object
*
* onInitPostRequest OnInitPostRequest active order object (optional)
* returns _search_post_200_response
* */
const on_confirmPOST = ({ onInitPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        onInitPostRequest,
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
* Send order object with payment details updated
*
* onInitPostRequest OnInitPostRequest Order object with payment details updated (optional)
* returns _search_post_200_response
* */
const on_initPOST = ({ onInitPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        onInitPostRequest,
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
* Send draft order object with quoted price for selected items
*
* onSelectPostRequest OnSelectPostRequest Draft order object with price quotation (optional)
* returns _search_post_200_response
* */
const on_selectPOST = ({ onSelectPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        onSelectPostRequest,
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
/**
* Send tracking details of an active order
*
* onTrack1 OnTrack1  (optional)
* returns _on_track_post_default_response
* */
const on_trackPOST = ({ onTrack1 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        onTrack1,
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
  on_confirmPOST,
  on_initPOST,
  on_searchPOST,
  on_selectPOST,
  on_statusPOST,
  on_trackPOST,
};

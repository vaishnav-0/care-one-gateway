/**
 * The OneProtocolConsumerPlatformController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/OneProtocolConsumerPlatformService');
const on_confirmPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.on_confirmPOST);
};

const on_initPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.on_initPOST);
};

const on_searchPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.on_searchPOST);
};

const on_selectPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.on_selectPOST);
};

const on_statusPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.on_statusPOST);
};

const on_trackPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.on_trackPOST);
};


module.exports = {
  on_confirmPOST,
  on_initPOST,
  on_searchPOST,
  on_selectPOST,
  on_statusPOST,
  on_trackPOST,
};

/**
 * The OneProtocolGatewayDGController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */


let axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
  },
  proxy: false

};

const axios = require('axios');

const sendPost = async (url, data) => {
  try {
    console.log(url)
    const res = await axios.post(url, data, axiosConfig);
    console.log(res.data)
  } catch (error) {
    // Handle errors

    console.error('Error:', error);
  }

}
const Controller = require('./Controller');
const service = require('../services/OneProtocolGatewayDGService');
const config = require("../config");
const on_searchPOST = async (request, response) => {
  console.log(request.body)
  sendPost(config.bap_url+"/on_search", request.body)
  await Controller.sendResponse(response, "ACK");
};

const searchPOST = async (request, response) => {
  sendPost(config.bpp_url+"/search", request.body)
  await Controller.sendResponse(response, "ACK");
};


module.exports = {
  on_searchPOST,
  searchPOST,
};

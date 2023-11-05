/**
 * The OneProtocolProviderPlatformController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */
const db_prom = require('../utils/db')()
const Controller = require('./Controller');
const service = require('../services/OneProtocolProviderPlatformService');
const confirmPOST = async (request, response) => {
  await Controller.sendResponse(response, "ACK");
};

const initPOST = async (request, response) => {
  await Controller.sendResponse(response, "ACK");
};



const onSearch = async (request)=>{
  body = request.body;

  if(body.message.intent.item.descriptor.name == "Ambulance"){
    const con = await db_prom;
    const db = con.db("careone_provider")
    const collection = db.collection("ambulances");

    const gpsCoordinates = request.body.message.intent.fulfilment.start.location.gps;
    const [longitude, latitude] = gpsCoordinates.split(',').map(parseFloat);

    const locationGeoJSON = {
      type: "Point",
      coordinates: [latitude,longitude]
    };
    // Create a geospatial index on the "location" field, if not already created
    await collection.createIndex({ last_location: "2dsphere" });

    // Perform a geospatial query to find documents near the query point
    const result = await collection.find({
      last_location: {
        $near: {
          $geometry: locationGeoJSON,
          $maxDistance: 10000, // Max distance in meters (adjust as needed)
        },
      },
    }).toArray();

    console.log(result)

    console.log("Documents near the query point:", result);

  }else if(body.message.intent.item.descriptor.name == "Consult"){

  }
}
const searchPOST = async (request, response) => {

  await Controller.sendResponse(response, "ACK");
};





const selectPOST = async (request, response) => {
  await Controller.sendResponse(response, "ACK");
};

const statusPOST = async (request, response) => {
  await Controller.sendResponse(response, "ACK");
};

const trackPOST = async (request, response) => {
  await Controller.sendResponse(response, "ACK");
};


module.exports = {
  confirmPOST,
  initPOST,
  searchPOST,
  selectPOST,
  statusPOST,
  trackPOST,
};

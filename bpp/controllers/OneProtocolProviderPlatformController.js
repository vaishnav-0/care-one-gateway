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
const config = require("../config");
const axios = require('axios');

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    },
    proxy: false

};
const sendPost = async (url, data) => {
    try {

        const response = await axios.post(url, data, axiosConfig);

        const responseData = response.data;

    } catch (error) {
        // Handle errors
        console.error('Error:', error);

    }

}
const confirmPOST = async (request, response) => {
    await Controller.sendResponse(response, "ACK");
};


const initPOST = async (request, response) => {
    await Controller.sendResponse(response, "ACK");
};


const onSearch = async (request) => {
    body = request.body;
    if (body.message.intent.item.descriptor.name == "Ambulance") {
        const con = await db_prom;
        const db = con.db("careone_provider")
        const collection = db.collection("ambulances");

        const gpsCoordinates = request.body.message.intent.fulfilment.start.location.gps;
        const [longitude, latitude] = gpsCoordinates.split(',').map(parseFloat);

        const locationGeoJSON = {
            type: "Point",
            coordinates: [longitude, latitude]
        };
        // Create a geospatial index on the "location" field, if not already created
        await collection.createIndex({last_location: "2dsphere"});

        // Perform a geospatial query to find documents near the query point
        const result = await collection.find({
            last_location: {
                $near: {
                    $geometry: locationGeoJSON,
                    $maxDistance: 10000, // Max distance in meters (adjust as needed)
                },
            },
        }).toArray();
        console.log("asasd")
        // console.log("Documents near the query point:", result);
        // No time for implementing the business logic. Bye
        const postData = {
            "context": {
                "domain": "nic2004:85110",
                "country": "IND",
                "city": "std:080",
                "action": "on_search",
                "core_version": "0.0.1",
                "message_id": "85a422c4-2867-4d72-b5f5-d31588e2f7c5",
                "timestamp": "2021-03-23T10:00:40.065Z"
            },
            "message": {
                "catalog": {
                    "descriptor": {
                        "name": "Practo"
                    },
                    "providers": [
                        {
                            "id": "289edce4-d002-4962-b311-4c025e22b4f6",
                            "descriptor": {
                                "name": "Provider 1"
                            },
                            "categories": [
                                {
                                    "id": "1",
                                    "descriptor": {
                                        "name": "Emergency"
                                    }
                                }
                            ],
                            "fulfillments": [
                                {
                                    "id": "1",
                                    "type": "GENERAL-AMBULANCE",
                                    "person": {
                                        "id": "1",
                                        "name": "Name1",
                                        "image": "https://image/of/person.png",
                                        "cred": "OneId:237402938409485039850935"
                                    }
                                },
                                {
                                    "id": "2",
                                    "type": "ICU-AMBULANCE",
                                    "person": {
                                        "id": "1",
                                        "name": "Name2",
                                        "image": "https://image/of/person.png",
                                        "cred": "OneId:237402938409485039850935"
                                    }
                                }
                            ]
                        }
                    ]
                }
            }
        };

        sendPost(config.bg_url+"/on_search", postData);

    } else if (body.message.intent.item.descriptor.name == "Consult") {

    }
}
const searchPOST = async (request, response) => {
    console.log(request.body)
    await Controller.sendResponse(response, "ACK");
    onSearch(request)
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

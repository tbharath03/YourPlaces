const axios = require("axios");
const HttpError = require("../models/HttpError");
const API_KEY = "AIzaSyCHC7A_PlwW-rRHo1l0suqyc6JQ8g5PHy8";

const getCoordsForAddress = async (address) => {
    const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
        )}&key=${API_KEY}`
    );

    const data = response.data;

    if (!data || data.status === "ZERO_RESULTS") {
        throw new HttpError(
            "Could not find location for specified address",
            422
        );
    }

    const coordinates = data.results[0].geometry.location;

    return coordinates;
};

module.exports = getCoordsForAddress;

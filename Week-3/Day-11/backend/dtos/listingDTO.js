const listings = require("../models/listings");

class ListingDTO {
  constructor(listings) {
    this.id = listings._id;
    this.name = listings.name;
    this.city = listings.city;
    this.state = listings.state;
    this.photo = listings.photo;
    this.availableUnits = listings.availableUnits;
    this.wifi = listings.wifi;
    this.laundry = listings.laundry;
    this.location = listings.location;
    this.price = listings.price;
  }
}

module.exports = ListingDTO;

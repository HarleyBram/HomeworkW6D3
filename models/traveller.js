const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) =>{
    return journey.startLocation
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) =>{
    return journey.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.map((journey) =>{
    return journey ? (journey.transport === transport)
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.map((journey) =>{
    return journey ? (journey.distance > 1000)
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  // return this.journeys.reduce((this.journey) =>{
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;

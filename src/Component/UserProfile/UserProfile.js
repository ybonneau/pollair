var UserProfile = (function() {
  var id = "";
  var trajets = [];
  var select = null;
  var filter = "PM10";

  var getId = function() {
    return id;    // Or pull this from cookie/localStorage
  };

  var setId = function(newId) {
    id = newId;     
    // Also set this in cookie/localStorage
  };

  var getTrajets = function() {
    return trajets;
  }

  var setTrajets = function(newTrajets) {
    trajets = newTrajets;
  }

  var addTrajet = function(trajet) {
    trajets.push(trajet);
  }

  var getSelect = function() {
    return select;
  }

  var setSelect = function(newSelect) {
    select = newSelect;
  }

  var getFilter = function() {
    return filter;
  }

  var setFilter = function(newFilter) {
    filter = newFilter;
  }

  return {
    getId: getId,
    setId: setId,
    getTrajets: getTrajets,
    setTrajets: setTrajets,
    addTrajet: addTrajet,
    setSelect: setSelect,
    getSelect: getSelect,
    getFilter: getFilter,
    setFilter: setFilter
  }

})();

export default UserProfile;
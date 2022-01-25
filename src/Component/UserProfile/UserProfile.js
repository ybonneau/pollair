var UserProfile = (function() {
  var id = "";
  var trajets = []

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

  return {
    getId: getId,
    setId: setId,
    getTrajets: getTrajets,
    setTrajets: setTrajets,
    addTrajet: addTrajet
  }

})();

export default UserProfile;
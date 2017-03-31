var PIDParser = {

  name: function(data) {
    var fields = data.split('|');
    return fields[5];
  },

  birthYear: function(data) {
    var fields = data.split('|');
    return fields[7].substr(0, 4);
  },

  birthMonth: function(data) {
    var fields = data.split('|');
    return fields[7].substr(4, 2);
  },

  birthDay: function(data) {
    var fields = data.split('|');
    return fields[7].substr(6, 2);
  }
}

var MSHParser = {

  type: function(data) {
    var fields = data.split('|');
    return fields[8];
  },

  sendingApplication: function(data) {
    var fields = data.split('|');
    return fields[2];
  },

  sendingFacility: function(data) {
    var fields = data.split('|');
    return fields[3];
  },

  receivingApplication: function(data) {
    var fields = data.split('|');
    return fields[4];
  },

  receivingFacility: function(data){
    var fields = data.split('|');
    return fields[5];
  }

}

export default () => {

//
/* Custom getters & setters for google maps marker*/
//    
  google.maps.Marker.prototype.getCustomData = function(key) {        

    if(typeof(this.custom_data) === 'undefined') {
      this.custom_data = {};
    }
    if(typeof(key) !== 'undefined') {
      return this.custom_data[key];
    }
    else {
      return this.custom_data;
    }
  };
  google.maps.Marker.prototype.setCustomData = function(key, value) {

    if(typeof(this.custom_data) === 'undefined') {
      this.custom_data = {};
    }
    if(typeof(value) !== 'undefined') {
      this.custom_data[key] = value;
    }
    else {
      this.custom_data = key;
    }
  };

};
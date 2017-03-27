$.simpleWeather({
    location: 99216,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
      $('img').attr('src', weather.image);
      
      // Condition Code
      // Reference Condition Codes
      // https://developer.yahoo.com/weather/documentation.html#codes
      console.log(weather.code);
      
    
// Get and store Geo Location lat/long coordinates
navigator.geolocation.getCurrentPosition( 
  
  function(position) {
  
  // wait a few seconds to receive location
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  
  console.log( lat, long); 

  
});





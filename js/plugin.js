// Paste jQuery Plugin Code Here
// Get and store Geo Location lat/long coordinates
navigator.geolocation.getCurrentPosition( 
  
  function(position) {
  
  // wait a few seconds to receive location
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  
  console.log( lat, long); 

      
      function loadweather (location, woeid) {
          $.simpleWeather({
              location: location,
              woeid: woeid,
              unit: 'c'
              success: function(weather) {
              city = weather.city;
              temp = weather.temp+'&deg;'
              wcode +' img class="weathericon" src="img/weathericon/' + weather.code+'.svg">';
          
          wind = '<p>' + weather.wind.speed + '</p><p>' + weathe.units.speed + '</p';
          }
              
            humidity = weather.humidity + ' %' ;})
      
      $(".location").text(city);
          $(".temperature").html(temp);
          $(".climate_bg").html(wcode);
          $(".windspeed").html(wind);
          $("humidity").text(humidity);
          
      },
          
          
          
      
      
  
});

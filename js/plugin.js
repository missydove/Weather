// Paste jQuery Plugin Code Here
// Get and store Geo Location lat/long coordinates
if ("geolocation") in navigator) {
    navigator.geolocation.getCurrentPosition(Function(position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude);
    });

} else {
    loadWeather("Spokane, WA,"
        ");
        $(document).ready(function () {
            setInterval(getWeather, 10000)
        });

    function loadweather(location, woeid) {
        $.simpleWeather({
                    location: location,
                    woeid: woeid,
                    unit: 'c'
                    success: function (weather) {
                        city = weather.city;
                        temp = weather.temp + '&deg;';
                        wcode + ' <img class="weathericon" src="img/weathericons/' + weather.code + '.svg">';

                        wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p';


                        humidity = weather.humidity + ' %';
                    })

                $(".location").text(city); $(".temperature").html(temp); $(".climate_bg").html(wcode); $(".windspeed").html(wind); $("humidity").text(humidity);

            },

            error: function (error) {
                $(".error").html('<p>') + error + '</p>');
    }




});

}

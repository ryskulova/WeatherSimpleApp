function weather() {

  var location = document.getElementById("location");
  var apiKey = '9c886f65feaa8279b3600f1b8bb429f1'; // PLEASE SIGN UP FOR YOUR OWN API KEY
  var url = 'https://api.darksky.net/forecast/9c886f65feaa8279b3600f1b8bb429f1/37.8267,-122.4233';

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML = 'Latitude is ' + latitude + '° <br> Longitude is ' + longitude + '°';

     $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      $('#temp').html(data.currently.temperature + '° F');
      $('#minutely').html(data.minutely.summary);
    });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}

weather();
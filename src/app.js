function showCurrentWeather (response){
    let degreesElement = document.querySelector("#current-temperature");
    let degrees = Math.round(response.data.temperature.current);
    let currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = response.data.city;
    degreesElement.innerHTML = degrees;
  
  }
    
    function searchCity (event){
      event.preventDefault();
      let input = document.querySelector(".search");
      let city = input.value;
  
      let myKey = `a34t41e6f3486dfcf9dba23606b154co`;
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${myKey}`;
  
      axios.get(apiUrl).then(showCurrentWeather);
    }
  
    const searchForm = document.querySelector("#city-search");
    searchForm.addEventListener("submit", searchCity);
    
  
    function correctTime (date){
      let minutes = date.getMinutes();
      let hours = date.getHours();
      let day = date.getDay();
  
      if (minutes < 10) {
          minutes = `0${minutes}`;
      }
  
      let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
      ];
  
      let formattedDay = days[day];
      return `${formattedDay} ${hours}:${minutes}`;
  }
  
      let currentDate = document.querySelector("#current-date");
      let currentTime = new Date();
     
      currentDate.innerHTML = correctTime(currentTime);
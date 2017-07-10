const React = require("react");



const PLACES = [
  { name: "Minsk", id: "625144" },
  { name: "Moscow", id: "524901" },
  { name: "New York", id: "5128581" },
  { name: "Paris", id: "4125402" }
];

class WeatherDisplay extends React.Component {
  
   constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }
   componentDidMount() {
   	  
    const id = this.props.id;
    const URL = "http://api.openweathermap.org/data/2.5/weather?id=" +
      id +
      "&units=metric&appid=875012f111377f30bfe2073d73e59ee8";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }
  render() {
     const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>Current: {weatherData.main.temp}°</p>
        <p>Sunrise: {weatherData.sys.sunrise}</p>
        <p>Sunset: {weatherData.sys.sunset}</p>
        <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
      </div>
    );
  }
}

class Comp extends React.Component {
	constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}
          >
              {place.name}
          </button>
        ))}
        <WeatherDisplay
          key={activePlace}
          id={PLACES[activePlace].id}
        />
      </div>
    );
  }
}

module.exports = Comp;

import React, {useState, useEffect} from "react";

import 'semantic-ui-css/semantic.min.css'
import "./App.scss";

import axios from 'axios'
import Title from "./components/Title";
import Media from "./components/Media";
import Text from "./components/Text";
import DateInput from "./components/DateInput"

function App() {
  const [apod, setApod] = useState({
    date: "2019-07-18",
    explanation: "On July 16 the Moon celebrated the 50th anniversary of the launch of Apollo 11 with a lunar eclipse visible from much of planet Earth. In this view part of the lunar disk is immersed in Earth's dark, reddened umbral shadow. Near the maximum eclipse phase, it just touches down along a mountain ridge. The rugged Tyrolean nightscape was recorded after moonrise south of Innsbruck, Austria with a dramatically lit communication tower along the ridgeline. Of course eclipses rarely travel alone. This partial lunar eclipse was at the Full Moon following July 2nd's New Moon and total eclipse of the Sun.",
    media_type: "image",
    title: "Shadowed Moon and Mountain",
    url: "https://apod.nasa.gov/apod/image/1907/moon_eclipse_span1066.jpg"
  })
  const [apiDate, setApiDate] = useState('2019-07-15');
  const apiKey = process.env.REACT_APP_NASA_API_KEY;

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${apiDate}`)
      .then(response => {
        setApod(response.data);
      })
  }, [apiDate]);

  return (
    <div className="App">
      <Title
        title={apod.title}
        date={apod.date}
        copyright={apod.copyright}
        apiDate={apiDate}
        setApiDate={setApiDate}
      />
      <div className='content'>
        <Media
          mediaUrl={apod.url}
          mediaType={apod.media_type} 
        />
        <Text
          explanation={apod.explanation}
        />
      </div>
    </div>
  );
}
export default App;
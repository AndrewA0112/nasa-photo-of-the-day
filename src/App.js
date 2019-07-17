import React, {useState, useEffect} from "react";
import bulma from 'bulma'
import "./App.scss";

import axios from 'axios'
import Header from "./components/Header";
import Media from "./components/Media";
import Text from "./components/Text";

function App() {
  const [apod, setApod] = useState([]);
  const apiKey = process.env.REACT_APP_NASA_API_KEY;
  console.log(apiKey)

  // useEffect(() => {
  //   axios
  //     .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
  //     .then(response => {
  //       setApod(response.data);
  //     });
  // }, []);

  return (
    <div className="App">
      <Header title = {apod.title}></Header>
      <div className='content'>
        <Media mediaUrl = {apod.url} mediaType = {apod.media_type} ></Media>
        <Text explanation = {apod.explanation} date = {apod.date} copyright = {apod.copyright} />
      </div>
      {/* <input type='date'></input> */}
    </div>
  );
}

export default App;

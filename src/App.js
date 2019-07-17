import React, {useState, useEffect} from "react";
import "./App.scss";

import axios from 'axios'
import Header from "./components/Header";
import Media from "./components/Media";
import Text from "./components/Text";
import { appendFile } from "fs";

function App() {
  const [apod, setApod] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15`)
  //     .then(response => {
  //       setApod(response.data);
  //     });
  // }, []);

  return (
    <div className="App">
      <Header title = {apod.title}></Header>
      <div className='content'>
        <Media mediaUrl = {apod.url} mediaType = {apod.media_type} ></Media>
        <Text explanation = {apod.explanation} date = {apod.date} copyright = {apod.copyright}></Text>
      </div>
    </div>
  );
}

export default App;
